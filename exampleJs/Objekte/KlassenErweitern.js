
//extends
class Person {

    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    printPerson(){
        console.log(this.firstname + " " + this.lastname + " (" + this.age + ")");
    }
}
class Student extends Person{
    enroll(){
        console.log("enroll() wurde ausgefuehrt");
    }

}

class Teacher extends Person{

}

let max = new Person("Max","Musterix", 12);
max.printPerson();

let erika = new Person("erika","Misterix", 55);
erika.printPerson();
let susanne = new Student("susi","maxterman", 12);
susanne.printPerson();


//funkt nicht gehler meldung!!!

