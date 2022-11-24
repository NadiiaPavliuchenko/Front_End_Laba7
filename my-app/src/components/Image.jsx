import React from 'react'
import '../App.css'

function Image(){
    function add_picture(){
        const new_div = document.createElement("div");

        document.querySelector(".old_div").appendChild(new_div);
        new_div.className = "new_elem";

        new_div.innerHTML = "<img src='https://www.imgonline.com.ua/examples/photo-mosaic-3.jpg' height='300px' width='300px' id='new_picture' alt='picture'>";
    }

    function inc_picture(){
        const pic = document.getElementById("new_picture");

        const maxsize = "600";
        pic.height = maxsize;
        pic.width = maxsize;
    }

    function dec_picture(){
        const pic = document.getElementById("new_picture");

        const minsize = "90";
        pic.height = minsize;
        pic.width = minsize;
    }

    function del_picture(){
        let new_div = document.querySelector(".new_elem");

        new_div.innerHTML = "";
    }

    return(
        <div className={'old_div'}>
            <button onClick={add_picture}>Add picture</button>
            <button onClick={inc_picture}>Zoom+ picture</button>
            <button onClick={dec_picture}>Zoom- picture</button>
            <button onClick={del_picture}>Delete picture</button>
        </div>
    )
}

export default Image