import logo from './logo.svg';
import './App.css';
import GetPost from "./Compounents/GetPost";
import BrotherGetPost from "./Compounents/BrotherGetPost";
import {useEffect, useState} from "react";
import JokesNumberSlider from "./Compounents/JokesPage/SubCompounents/JokesNumberSlider";
import JokesPage from "./Compounents/JokesPage";
import {useSelector} from "react-redux";

function App() {

    const [siblingInputData , setSiblingInputData]=useState("")


    const jokes = useSelector(store=>store.jokes)

    useEffect(()=>{
        console.log("Jokes Reducer from APP =",jokes)
    }, [])

    return (
      <>
        {/*<BrotherGetPost message={siblingInputData}/>*/}
        {/*<GetPost messageSetter={setSiblingInputData}/>*/}

          <JokesPage/>
      </>

  );
}

export default App;
