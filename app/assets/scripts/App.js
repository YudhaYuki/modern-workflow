function Person(name, lastName, favColor) {
    this.name = name;
    this.lastName = lastName;
    this.favColor = favColor;
    this.greet = function() {
        console.log("Hello, my name is " + this.name + " " + this.lastName + " and my favorite color is " + favColor + ".");
    }
}

var john = new Person("John", "Doe", "blue");
john.greet();

var jane = new Person("Jane", "Smith", "Green");
jane.greet();