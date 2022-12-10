import {useEffect, useState} from "react";
import axios from "axios";
import swal from 'sweetalert';
import PostsLists from "./SubCompounents/PostsLists";


export default function GetPost() {

    const [posts, setPosts] = useState([])

    useEffect(function () {
        swal("Hello world!");

        console.log("Get post compounent is mounted !!!!!! ")

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(function (response) {
                swal("Get post successfully !", "...", "success");
                console.log("RESPONSE = ", response)
                setPosts(response.data)
            })
            .catch(function (error) {
                console.log("ERROR =", error)
                swal("Error ! ", error.message, "error");

            })

        console.log("I'm after Axios")

    }, [])


    return (
        <>
            <div> I have {posts.length} posts in total</div>
            <PostsLists posts={posts} />
        </>

    )
};


