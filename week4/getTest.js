import axios from 'axios';

function getTest() {
    axios.get('http://localhost:8080/person/listdata')
        .then(response => {
            response.data.array.forEach(element => {
                console.log(element.name);
                const person = document.createElement('div');
                person.textContent = element.name;
            });
        })
        .catch(error => {
            console.error(error);
        });
}

