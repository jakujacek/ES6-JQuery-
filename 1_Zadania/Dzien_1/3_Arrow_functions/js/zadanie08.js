const dog = {
    type: "Mammal",
    name: "",
    setName: (newName) => {
        dog.name = newName;
    }
}

dog.setName("Reksio");
console.log(dog.name);
