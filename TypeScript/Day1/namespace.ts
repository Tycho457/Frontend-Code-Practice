namespace MyNamespace {
    export interface Person {
        name: string
        age: number
    }

    export function printPersonInfo(person: Person) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
  }

}

const person:MyNamespace.Person = {
    name: 'tycho457',
    age: 19
}

MyNamespace.printPersonInfo(person)