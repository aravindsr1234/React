import React, { useState,  } from "react";
// import Preview from "./Preview";

function Form() {
    const [blogs, setBlogs] = useState({
        image: "",
        title: "",
        date: "",
        content: "",
        comment: "",
    });

    const changeBlogimg = (e) => {
        setBlogs({ ...blogs, image: e.target.value, });
        console.log(blogs.image);
    }

    const changeBlogtitle = (e) => {
        setBlogs({ ...blogs, title: e.target.value });
        console.log(blogs.title);
    }

    const changeBlogdate = (e) => {
        setBlogs({ ...blogs, date: e.target.value });
        console.log(blogs.date);
    }

    const changeBlogcontent = (e) => {
        setBlogs({ ...blogs, content: e.target.value });
        console.log(blogs.content);
    }

    const changeBlogcomment = (e) => {
        setBlogs({ ...blogs, comment: e.target.value });
        console.log(blogs.comment);
    }


    // useEffect(() => {
    //     const form = document.getElementById("formId");

    //     form.addEventListener('submit', (e) => {
    //         e.preventDefault();

    //         const image = document.getElementById("image").value;
    //         const title = document.getElementById("title").value;
    //         const date = document.getElementById("date").value;
    //         const content = document.getElementById("content").value;
    //         const comment = document.getElementById("comment").value;

    //         const data = {
    //             image: image,
    //             title: title,
    //             date: date,
    //             content: content,
    //             comment: comment
    //         }

    //         fetch("http://localhost:3005", {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //             .then(res => res.json())
    //             .then(user => {
    //                 console.log(user);
    //             });
    //     });
    // }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        
        const { image, title, date, content, comment } = blogs;

        const data = {
            image,
            title,
            date,
            content,
            comment,
        };

        fetch("http://localhost:3005", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((user) => {
                console.log(user);
            });
    };


    return (
        <div className="formFlex">
            <div>
                <h1 className="Addblog">Add Blog</h1>
                <form id="formId" onSubmit={handleFormSubmit}>

                    <label for="image">Image:</label>
                    <input type="text" name="image" id="image" placeholder="Image" value={blogs.image} onChange={changeBlogimg} />

                    <label for="title">Title:</label>
                    <input type="text" id="title" placeholder="Title" value={blogs.title} onChange={changeBlogtitle} />

                    <label for="date">Date:</label>
                    <input type="date" id="date" placeholder="Date" value={blogs.date} onChange={changeBlogdate} />

                    <label for="content">Content:</label>

                    <textarea name="" id="content" cols="50" rows="" placeholder="Content" value={blogs.content} onChange={changeBlogcontent}></textarea>

                    <label for="comment">Comment:</label>
                    <input type="text" id="comment" placeholder="Comment" value={blogs.comment} onChange={changeBlogcomment} />

                    <button type="submit">Submit</button>
                </form>
            </div>
            {/* <Preview blogs={blogs}/> */}
            <div className="cardMargin">
                <div className="card">
                    <div className="card_img">
                        <img src={blogs.image} alt="" />
                    </div>
                    <div className="card_head">
                        <h1>{blogs.title}</h1>
                        <h3 className="card_subhead">Title description, <span className="subhead_span"></span>{blogs.date}</h3>
                    </div>
                    <div className="card_content">
                        <p>{blogs.content}</p>
                    </div>
                    <div className="card_action">
                        <button>READ MORE</button>
                        <h3>Comments <span>{blogs.comment}</span></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;