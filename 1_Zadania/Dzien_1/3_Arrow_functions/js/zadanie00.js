var Students = function(students) {
	this.names = students;
  	this.numberOfLetters = [];
};


Students.prototype.countLetters = function() {
this.names.forEach(item => this.numberOfLetters.push(item.length));
}

var students = new Students(["Ania", "Kamil", "Mariusz"]);
students.countLetters();
console.log(students.numberOfLetters);
