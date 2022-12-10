import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import SyncIcon from '@mui/icons-material/Sync';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {fetchGetJokes} from "../../../../redux/actions";

const marks = [
    {
        value: 1,
        label: '1 joke',
    },
    {
        value: 5,
        label: '5 jokes',
    },
    {
        value: 10,
        label: '10 jokes',
    }
];

function valuetext(value) {
    return `${value}°C`;
}

export default function JokesNumberSlider() {

    const jokes = useSelector(store=>store.jokes)
    const gender = useSelector(store=>store.gender)
    const dispatch = useDispatch()

    const [sliderValue , setSLiderValue]=useState(5)
    useEffect(()=>{
        console.log("Jokes Reducer from JokesNumberSlider =",jokes)
    }, [])

    const handleSliderChange = (event, newValue) => {
        console.log("new Value =", newValue)
        setSLiderValue(newValue);
    };

    const sliderRef = useRef()
    return (
        <div style={{display : "flex" , alignItems : "center" , flexDirection : "column"  }}>
            <Box sx={{ width: 600 }} style={{margin : "3rem"}}>
                <Slider
                    onChange={handleSliderChange}
                    aria-label="Always visible"
                    value={sliderValue}
                    getAriaValueText={valuetext}
                    step={1}
                    min={2}
                    max={10}
                    marks={marks}
                    valueLabelDisplay="on"
                />
            </Box>
            <Button onClick={function (){  dispatch(fetchGetJokes(sliderValue))}} variant="contained"  startIcon={<SyncIcon />}>
                Generate
            </Button>
        </div>

    );
}
