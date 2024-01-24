let vorname;
let gender;

function sendData() {
    // Input Wert bekommen
    const nameInput = document.getElementById('nameInput').value;


    // Funktion aufrufen um Geschlecht-Info zu bekommen
    getGenderInfo(nameInput)
        .then(result => {
            
            if (result.gender === 'male') {
                document.body.style.background = '#3da4d5';
                //vorname = document.getElementById('vorname').innerHTML = nameInput;
                gender = document.getElementById('gender').innerHTML = "männlich";
                //alert(`Name: ${result.name}, Gender: ${result.gender}`);
            }
            
            else if (result.gender === 'female') {
                document.body.style.background = 'pink';
                //gender = document.getElementById('gender').innerHTML = "weiblich";
            }

            else if (result.gender === 'female') {
                document.body.style.background = 'pink';
                //gender = document.getElementById('gender').innerHTML = "weiblich";
            }

            else {
                return null;
            }
        })
        .catch(error => {
            console.error(error);
        });
}

async function getGenderInfo(name) {
    try {
        const apiUrl = `https://api.genderize.io/?name=${name}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}