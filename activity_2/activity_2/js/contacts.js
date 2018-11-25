/* 
Activity: Contact manager
*/

// TODO: Complete the program
let names=[
    {
     "Last name": "Smith",
     "first name": "John"   
    },
    {
        "Last name": "Doe",
        "first name": "Jane"   
       }
   
];

function getInput(){
    console.log(`Welcome to your contacts manage
    1. List Contacts
    2. Add a Contact
    0. Quit
`);
    input = parseInt(prompt("Please select your option"));
}

let input;
let counter=0;
getInput();
while(input!==0){
    if(input===1){
        console.log(`Here's the list of all of your contacts:`)
        names.forEach(item=>console.log(`Last name: ${item["Last name"]}, first name: ${item["first name"]}`));
    }
    if(input===2){
        let firstName=prompt("Enter first name");
        let lastName=prompt("Enter last name");
        names.push({
            "Last name":firstName,
            "first name":lastName
        });
        console.log('contact added');
    }
    getInput();
}