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

class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Rhino extends Animal {
    constructor() {
        super("Test");
    }
}


var koza = new Animal("koza");
var nosorozec = new Rhino();
var user = new Student("Karol", "L", "Wnuk");

//nosorozec = koza;
//koza = nosorozec;

//koza = user;

function greeter(person: Person) {
    return "Hello, " + person.firstname + " " + person.lastname + " " + Color[2];
}

document.body.innerHTML = greeter(user);
