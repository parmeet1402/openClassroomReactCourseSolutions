
window.console.log("Welcome to your contacts manager!");

var contactNames = ["John", "Smith", "Jane", "Doe"];

var contacts = {



    init: function (fname, lname) {

        this.fname = fname;

        this.lname = lname;

    },

    

    describe: function () {

        var description = "Firstname:" + this.fname + " Lastname: " + this.lname + "";

        return description;

    }

};


var contacts1 = Object.create(contacts);

contacts1.init("John", "smith");


var contacts2 = Object.create(contacts);

contacts2.init("Jane", "Doe");

var contactNames = [];

contactNames.push(contacts1);

contactNames.push(contacts2); 

var ch = null;
while( ch != "Quit" ){
console.log(" 1: List Contacts");
console.log(" 2: Add Contacts");
console.log(" 0: Quit");


var contactsManager = prompt("pick an option:");



if (contactsManager === "List Contacts") {

    console.log("These are your contacts");
    contactNames.forEach(function (contacts) {

    console.log(contacts.describe());

});

   

} else if (contactsManager === "Add Contacts") {

	var contact3 = Object.create(contacts);
	contact3.init(prompt("enter firstname"), prompt("enter lastname:"));

	contactNames.push(contact3);

    console.log(" contacts added ");

} else if (contactsManager === "Quit") {

    console.log(" Quit ");
	console.clear();
	ch = "Quit";


}}