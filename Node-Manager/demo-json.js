var person={
    name:"rathi",
    age:25
}
console.log(person);

var personjson=JSON.stringify(person);

console.log(personjson);

console.log(JSON.parse(personjson));

var animal='{"name":"dog"}'

console.log(animal);

var animalobj=JSON.parse(animal);

console.log(animalobj);

animalobj.age=25;

console.log(animalobj);

console.log(JSON.stringify(animalobj));
