
const form = document.getElementById("formId");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    

    const name = document.getElementById("formName");
    const number = document.getElementById("formNumber");

    const data = {
        name: name,
        number: number
    }

    fetch("http://localhost:3005", {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(user =>{
        console.log(user);
    })
})