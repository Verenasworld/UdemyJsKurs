"use strickt"
//Objektorentierung für strukturierten und übersichtlichen code
//zb. Klasse - quasi der Bauplan eines - Auto - ist ein Objekt . Mehode -blinke / licht anschalten  . Eigenschaft - ps/ liter / farbe ( grobes Beispiel )


// erstellen einer Instanz/Objekt einer Klasse
// definieren einer Eigenenschft der Instanz/Objekt
// Methoden & Eigenschaften einer Instanz




// Klassen erstellen

// hier wird eine Klasse definiert und anschließend eine neue Person hinzugefügt

// quasi das Muster ( Bauplan  = Klasse )

class Person{
    printPerson(){
        console.log(this.firstname + " " + this.lastname + " (" + this.age + ")")
    }
}

// nehme neue Person ( Max ) und erstelle eine neue Instanz der Klasse - new Person (quasi mit dem Bauplan ( class Person)) und führe die Methode printPerson aus
let max= new Person();
max.firstname ="Max";
max.lastname= "Mustermann";
max.age = 24;
max.printPerson();


let verena= new Person();
verena.firstname="Verena";
verena.age = 45;
verena.printPerson();
