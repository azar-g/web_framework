import { Attributes } from "./models/Attribites";
import { User } from "./models/User";

const user = User.buildUser({ id: 1, name: "ssdsds" });

user.on("change", () => {
  console.log(user);
});
user.fetch();

// user.on("save", () => {
//   console.log("user saved");
//   console.log(user);
// });
// user.on("error", () => {
//   console.log("error occured");
// });
// user.save();

// console.log(user.get("name"));

// user.set({ name: "azik" });

// const fetchedUser = user.fetch();
// console.log(fetchedUser);

// setTimeout(() => {
//   console.log(user);
// }, 4000);

// user.set({
//   // name: "azar",
//   age: 44,
// });

// user.save();
