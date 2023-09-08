import React, { useEffect } from "react";

function Form() {
    useEffect(() => {
        const form = document.getElementById("formId");

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const image = document.getElementById("image").value; 
            const title = document.getElementById("title").value;
            const date = document.getElementById("date").value;   
            const content = document.getElementById("content").value;
            const comment = document.getElementById("comment").value;

            const data = {
                image: image,
                title: title,
                date: date,
                content: content,
                comment: comment
            }

            fetch("http://localhost:3005", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(user => {
                console.log(user);
            });
        });
    }, []);
    

    return (
        <form id="formId">

            <label for="image">Upload Image:</label>
            <input type="text" name="image" id="image" placeholder="Image"/>

            <label for="title">Title:</label>
            <input type="text" id="title" placeholder="Title"/>

            <label for="date">Date:</label>
            <input type="date" id="date" placeholder="Date"/>

            <label for="content">Content:</label>
            {/* <input type="" id="content"/> */}
            <textarea name="" id="content" cols="50" rows="" placeholder="Content"></textarea>

            <label for="comment">Comment:</label>
            <input type="text" id="comment" placeholder="Comment"/>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;