function Person(name, lastName, favColor) {
    this.name = name;
    this.lastName = lastName;
    this.favColor = favColor;
    this.greet = function() {
        console.log("Hello, my name is " + this.name + " " + this.lastName + " and my favorite color is " + favColor + ".");
    }
}

module.exports = Person;