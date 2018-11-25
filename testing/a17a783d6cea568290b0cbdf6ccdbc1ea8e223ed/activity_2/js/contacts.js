/* 
Activity: Contact manager
*/

// TODO: Complete the program
var contacts = [];
var contact = {
    init: function(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    },

    describe: function () {
        var discription = "Last name: " + this.lastname + ", first name: " + this.firstname;
        return discription;
    }
}

var firstContact = Object.create(contact);
firstContact.init("John", "Smith");
contacts.push(firstContact);


wellCome();

var answer = Number(prompt("What would you like to do?"));

while (answer !== 0){
    if (answer === 1) {
        console.log("*****************************************************")
        console.log("Here's the list of all your contacts:")
        
        contacts.forEach(function(contact){
            console.log(contact.describe())
        });
    } else if(answer === 2){
        //ask for new contact name;
        var firstname = prompt("Enter first name: ");
        var lastname = prompt("Enter last name: ");
        var newContact = Object.create(contact);
        newContact.init(firstname, lastname);

        //add new contact to array;
        contacts.push(newContact);
        console.log("Contact Added")
    }

    //ask again for new input
    var answer = Number(prompt("What would you like to do?"));
}



function wellCome(){
    console.log("Welcome to your contact manager! \n1: List Contacts \n2: Add Contact \n0: Quit");
}