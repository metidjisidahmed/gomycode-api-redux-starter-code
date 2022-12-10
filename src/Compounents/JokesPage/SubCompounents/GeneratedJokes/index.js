import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchGetJokes} from "../../../../redux/actions";
import {Backdrop, CircularProgress, Paper} from "@mui/material";


const JokesList=({jokes})=>{

    return jokes.map(joke=>{
        if(joke.type == "twopart"){
            return (
                <Paper elevation={3} style={{width : "50vw" , padding : "2rem" , margin : "1rem"}} >
                    <div style={{display : "flex" , justifyContent : "center" , alignItems : "center" , flexDirection : "column"}}>
                        <div>Category : {joke.category}</div>
                        <div>Setup : {joke.setup}</div>
                        <div>delivery : {joke.delivery}</div>
                    </div>
                </Paper>
            )
        }else{
            return (
                <Paper elevation={3}  style={{width : "50vw" , padding : "2rem" , margin : "1rem"}} >
                    <div style={{display : "flex" , justifyContent : "center" , alignItems : "center" , flexDirection : "column"}}>
                        <div>Category : {joke.category}</div>
                        <div>joke : {joke.joke}</div>
                    </div>
                </Paper>
            )
        }

    })
}

export default function GeneratedJokes(){

    const jokes = useSelector(store=>store.jokes)
    const dispatch =useDispatch()


    useEffect(()=>{
        console.log("Jokes Reducer from Gnerated Jokes =",jokes)
        dispatch( fetchGetJokes( 7 ) )
    }, [])


    return(
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={jokes.loading===true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <div>Test</div>
            <div style={{display : "flex" , alignItems : "center" , flexDirection : "column"}}>
                <JokesList jokes={jokes.data}/>

            </div>

        </>

    )
}
