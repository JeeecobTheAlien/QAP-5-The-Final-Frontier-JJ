const countDiv = document.getElementById("count");
const hobbiesDiv = document.getElementById("hobbies");
const ageDiv = document.getElementById("age");

//Fetch and read the redo.json disk file

fetch("./redo.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        countRecords(data);
        listHobbies(data);
        averageAge(data);

    })
    .catch(error => {
        console.error(error);
    });

function getName(person){
   console.log (`${person.name}`)
}

function countRecords(data){
    const count = data.length;
    console.log (`There are ${data.length} records in this JSON file`)
}

function listHobbies(data) {
    let hobbies = [];
    data.forEach(person => {
        hobbies = hobbies.concat(person.hobbies);
    });
    hobbies = [...new Set(hobbies)];
    console.log (`The hobbies in this JSON file are: ${hobbies.join(", ")}`)
}

function averageAge(data) {
    let totalAge = 0;
    data.forEach(person => {
        totalAge += person.age;
    });

    const average = totalAge/ data.length;
    console.log (`The average age in this JSON file is ${average.toFixed(1)}`)
}