interface Person {
    firstname: string;
    lastname: string;
}

enum Color {Blonde, Black, Brown};

class Student {
    fullname: string;
    dumb: boolean;
    age: number;
    placeOfBirth: string;
    friendsNames: string[];
    friendsAges: Array<number>;
    hairColor: Color;

    constructor(public firstname, public middleinitial, public lastname) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

function greeter(person: Person) {
    return "Hello, " + person.firstname + " " + person.lastname + " " + Color[2];
}

var user = new Student("Karol", "L", "Wnuk");

document.body.innerHTML = greeter(user);
