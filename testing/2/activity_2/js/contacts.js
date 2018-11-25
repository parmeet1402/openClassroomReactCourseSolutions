
//----------------contact Object Initialization----------------//
var contact = {
	
	init: function(lastName,firstName){
		this.lastName=lastName;
		this.firstName=firstName;
	},

	describe: function(CONTACT){
		console.log("Last name: "+CONTACT.lastName+ ", first name: "+CONTACT.firstName);
	}
};

var contact1= Object.create(contact);
contact1.init("Smith","John");
var contact2= Object.create(contact);
contact2.init("Doe","Jane");


//----------------------Table Initialization----------------//
var contacts = [];
contacts.push(contact1);
contacts.push(contact2);


//-------------------------Introduction-----------------------//
console.log("Welcome to your contacts manager!");
console.log("1: List contacts");
console.log("2: Add a contact");
console.log("0: Quit");


//--------------------------LOOP---------------------------//

var i=prompt("Enter you commande\n"+
			 "1: List contacts\n"+
			 "2: Add a contact\n"+
			 "0: Quit\n");

while(i!=0){

		//List contacts
		if(i==1){
			console.log("Here's the list of all your contact");
			for(var j=0;j<contacts.length;j++){
				contact.describe(contacts[j]);
			}
	    }

	    //Add a contact
	    if(i==2){
	    	var last= prompt("Enter contact last name");
	    	var first= prompt("Enter contact first name");
	    	var newContact= Object.create(contact);
			newContact.init(last,first);
			contacts.push(newContact);
			console.log("Contact added");
	    }

	    console.log("1: List contacts");
	    console.log("2: Add a contact");
	    console.log("0: Quit");


	    //Ask for input
		i=prompt("Enter you commande\n"+
				 "1: List contacts\n"+
			   	 "2: Add a contact\n"+
			 	 "0: Quit\n");

}