"use strict";

class Contacts {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }

};

class AddressBook {
    constructor() { 
        this.contacts = []; // the array is empty because the information is being populated from the contacts class.
    }

    display () {
        document.querySelector(".add_button").addEventListener("click", createContact);
        function createContact(event) {
            event.preventDefault();
            let inputs = document.querySelectorAll("input");
            let div = document.createElement("div");
            div.innerHTML = `
            <div class="contact"?
    <p class= "contact">Name: ${inputs[0].value}</p>
    <p class= "contact">Email: ${inputs[1].value}</p>
    <p class= "contact">Phone: ${inputs[2].value}</p>
    <p class= "contact">Relation: ${inputs[3].value}</p>
    <img class= "contact delete_card" src= "https://photos.gograph.com/thumbs/CSP/CSP992/smiling-trash-can-cartoon-character-clip-art-vector_k13753794.jpg">
            </div>`;

            document.querySelector(".contact_container").append(div);
            
        }
    }
    deleteAt() {
        document.querySelector(".contact_container").addEventListener("click", removeContact);
        function removeContact(event) {
        event.preventDefault();
        if (event.target.tagName === "IMG") {
        let remove = document.querySelector(".contact");
        remove.parentNode.removeChild(remove);
        console.log(event);
            }
        }
    }
   
};

const phoneBook = new AddressBook();
phoneBook.display();
phoneBook.deleteAt();


