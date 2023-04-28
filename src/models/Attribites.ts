import { UserProps } from "./User";
export class Attributes<T extends object> {
  constructor(private data: T) {
    // console.log(data);
  }

  get = <K extends keyof T>(key: K): T[K] => {
    // console.log(this.data);
    // console.log(key);
    return this.data[key];
  };

  set = (update: T): void => {
    Object.assign(this.data, update);
  };

  getAll = (): UserProps => {
    console.log(this.data);
    return this.data;
  };
}
