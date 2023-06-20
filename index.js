function Person(name, age) {
  this.name = name;
  this.age = age;
  this.isPassed = true;
  this.school = "Above and Beyond School";
}

const wick = new Person("Wick", 22);
console.log(wick);

function createPerson(name, age) {
  return {
    name,
    age,
    isPassed: true,
    school: "Above and Beyond School",
  };
}

const john = createPerson("John", 23);
console.log(john);
