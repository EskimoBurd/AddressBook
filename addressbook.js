class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(info) {
        this.contacts.push(info);
        console.log(this.contacts)

    }
    deleteAt(del) {
        this.contacts.splice(index, 1);

    }
    print() {
        for (let contact of this.contacts) {
            console.log(contacts);
        }
    }
}
class Contact {
    constructor(name, email, phone, relation) {
        this.name = name
        this.email = email
        this.phone = phone
        this.relation = relation
    }
}
const addressBook = new AddressBook();
let John = new Contact("John", "john@gmail.com", "345-310-2689", "hero")
let Sarah = new Contact("Sarah", "Sarah@gmail.com", "343-312-5689", "sister")
let Ron = new Contact("Ron", "john@gmail.com", "345-310-2689", "hero")
addressBook.contacts.push(John);
addressBook.contacts.push(Sarah);
addressBook.contacts.push(Ron);
/*let name = prompt("enter a name");
let email = prompt("Enter email");*/
// addressBook.add(new Contact(name, email, phone, relation));
while (true) {
    const choice = prompt("Would you like to add, delete, print, or quit")
    if (choice === "add") {
        const name = prompt("name?");
        const email = prompt("email?");
        const phone = prompt("phone?");
        const relation = prompt("relation?");
        //const contact = new Contact(name, email, phone, relation);
        addressBook.add(new Contact(name, email, phone, relation));
    } else if (choice === "print") {
        addressBook.print();
    } else if (choice === "delete") {
        let user = prompt("delete by name or index?")
        if (user === "by index") {
            let del = prompt("index to delete");
            addressBook.deleteAt(del);
        }
    } else if (choice === "quit") {
        break;
    }
}
