import { Button, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

const Refactoring = () => {
    const [text, setText] = useState<string>();
    const [render, setRender] = useState<number>(0);

    const [click, setClick] = useState<number>(0);
    const addOne = useCallback(
        () => {
            setClick((oldClick) => oldClick + 1)
        }, [])


    useEffect(() => {
        // setRender(render + 1);
    })

    return (
        <div>
            <h1> Basics </h1>
            <p>Count render : {render}</p>
            <p>Count text : {text}</p>
            <TextField onChange={(e) => setText(e.target.value)} />
            <p>Count click : {click}</p>
            <Button
                variant="contained"
                onClick={addOne}>
                MyButton
            </Button>
        </div>
    )
}

export default Refactoring;
