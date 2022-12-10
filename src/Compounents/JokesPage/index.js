


import JokesNumberSlider from "./SubCompounents/JokesNumberSlider";
import GeneratedJokes from "./SubCompounents/GeneratedJokes";
import {useSelector} from "react-redux";
import {useEffect} from "react";

export default function JokesPage(){

    const jokes = useSelector(store=>store.jokes)

    useEffect(()=>{
        console.log("Jokes Reducer from JokesPage =",jokes)
    }, [])


    return(
        <>
            <JokesNumberSlider/>
            <GeneratedJokes/>
        </>

    )
}
