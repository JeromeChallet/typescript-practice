const names: Array<string> = []; //string
// names[0].split(' ');

const promise: Promise<number> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

// promise.then((data) => {
//   //data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "jerome", hobbies: ["sports"] }, { age: 38 });
const mergedObj2 = merge({ name: "jerome" }, { age: 38 });
console.log(mergedObj);

interface Lenghty {
  length: number;
}

function countAndDescribe<T extends Lenghty>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["sport", "cooking"]));
//console.log(countAndDescribe(10));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "jerome" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("jerome");
textStorage.addItem("challet");
textStorage.removeItem("jerome");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "jerome" });
// objStorage.addItem({ name: "challet" });
// // ...
// objStorage.removeItem({ name: "jerome" });
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const namess: Readonly<string[]> = ["jerome", "patrice"];
// namess.push("max");
// namess.pop();
