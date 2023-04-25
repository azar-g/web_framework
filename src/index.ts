import { User } from "./models/User";

const user = new User({
  id: 5,
  name: "aaaa",
  age: 22,
});

user.on("change", () => {
  console.log("user changed");
});
console.log(user.get("name"));

user.set({ name: "azik" });

console.log(user.get("name"));
const fetchedUser = user.fetch(5);
console.log(fetchedUser);

// setTimeout(() => {
//   console.log(user);
// }, 4000);

// user.set({
//   // name: "azar",
//   age: 44,
// });

// user.save();
