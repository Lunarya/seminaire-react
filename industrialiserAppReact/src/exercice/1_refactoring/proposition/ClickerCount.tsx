import { Button } from "@mui/material";
import { useCallback, useState } from "react";
import { useEffectDebugger,useRenderCount } from "../../../debugTools";

const ClickerCount = () => {

    const [ClickCounter, setClick] = useState<number>(0);

    const addOne = useCallback(() => {
        setClick(old => old + 1)
    }, []);

    useEffectDebugger([ClickCounter, addOne], ["ClickCounter", "addOne"], "QCA")
    const countRender = useRenderCount([ClickCounter, addOne]);
    return (
        <>
            <p>Count render : {countRender}</p>
            <p>Count click : {ClickCounter}</p>
            <Button
                variant='contained'
                onClick={addOne}>
                MyButton
            </Button>
        </>
    )
}

export default ClickerCount;
