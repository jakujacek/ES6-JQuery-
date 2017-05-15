var people = [
    {
        person: "Kim Yoo Suk",
        profession: "tyczkarz"
    },
    {
        person: "Sue Yoo",
        profession: "prawnik"
    },
    {
        person: "Dr. Alden Cockburn",
        profession: "urolog"
    },
    {
        person: "Rusty Kuntz",
        profession: "trener"
    }
];

var setFunnyName = (...args) => {
  args.forEach(element => {
    people.push(element);
  });
}
setFunnyName("Dudek");
console.log(people);
