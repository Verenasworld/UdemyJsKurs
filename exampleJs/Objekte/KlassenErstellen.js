
//Objektorentierung für strukturierten und übersichtlichen code
//zb. Klasse - quasi der Bauplan eines - Auto - ist ein Objekt . Mehode -blinke / licht anschalten  . Eigenschaft - ps/ liter / farbe ( grobes Beispiel )


// erstellen einer Instanz/Objekt einer Klasse
// definieren einer Eigenenschft der Instanz/Objekt
// Methoden & Eigenschaften einer Instanz




// Klassen erstellen

// hier wird eine Klasse definiert und anschließend eine neue Person hinzugefügt

// quasi das Muster ( Bauplan  = Klasse )

class Person{

    constructor(firstname, lastname, age){
        this.firstname =firstname;
        this.lastname = lastname;
        this.age = age;
        //hier wird die verbindung hergestellt zu this
        console.log(this);
        // Ausgabe der Person in der Console zum aufklappen mit angabe der variablen ( firstname, lastname, age ) ( alles steht untereinander)
        console.log("constructor() wurde ausgefuert");
    //    construktur  wird bei jeden erstellen einer neuer Person ausgeführt und ist eine funktion dem ich parameter übergeben kann
    }
    printPerson(){
        console.log(this.firstname + " " + this.lastname + " (" + this.age + ")");
    //    über this greift man auf die Eigenschaften zu die im Objekt festgelegt sind. ( ausgabe wie definiert, ohne angabe variablen name ( firstname, lastname, age)
    }
}

 // neue Person ( Max ) erstelle eine neue Instanz der Klasse - Person (quasi mit dem Bauplan ( class Person)) und führe die Methode printPerson aus

//schreibweise 1
let max= new Person();
max.firstname ="Max";
max.lastname= "Mustermann";
max.age = 24;
max.printPerson();

//ausgabe undefindet weil nicht jede Eigenschaft angegeben ist
let verena = new Person();
verena.firstname="Verena";
verena.age = 45;
verena.printPerson();

//schreibweise 2 mit constructor funktion durch übergebene Parameter

let erika = new Person ("Erika", "Mustermann", 55);
erika.printPerson();

let furz = new Person("harri", "furz", 101);
furz.printPerson();
