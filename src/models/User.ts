import { Sync } from "./Sync";
import { Eventing } from "./Eventing";
import { Attributes } from "./Attribites";

export interface UserProps {
  id: number;
  name: string;
  age: number;
}

const rootUrl = "http://localhost:3000/users";

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}

const user = new User({
  id: 5,
  name: "aaaa",
  age: 22,
});

console.log(user.attributes.get("name"));
