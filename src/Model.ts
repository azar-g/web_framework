import { AxiosPromise, AxiosResponse } from "axios";

interface HasId {
  id?: number;
}

interface Attributes<T> {
  set(value: T): void;
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callBack: () => void): void;
  trigger(eventName: string): void;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: Attributes<T>,
    private sync: Sync<T>,
    private events: Events
  ) {}

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  get get() {
    return this.attributes.get;
  }

  set(update: T) {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  fetch() {
    const id = this.get("id");
    if (typeof id !== "number") throw new Error("cannot fetch without id");
    this.sync
      .fetch(id)
      .then((response: AxiosResponse) => this.set(response.data));
  }

  save() {
    this.sync
      .save(this.attributes.getAll())
      .then(() => this.events.trigger("save"))
      .catch(() => this.events.trigger("error"));
    return this.attributes.getAll();
  }
}
