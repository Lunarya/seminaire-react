import { TextField } from "@mui/material";
import { useState } from "react";
import useRenderCount from "../../../debugTools/useRenderCount";

const SearchText = () => {
    const [text, setText] = useState<string>();
    const countRender = useRenderCount([text]);
    const myObj = {
        id: "1",
        task: "toto"
    }

    const onClick = (obj: typeof myObj) => {
        console.log(obj.task)
    }
    return (
        <>
            <p>Count text Render : {countRender}</p>
            <p>Count text : {text}</p>
            <MyTextField value={myObj} onClick={onClick} />
        </>
    )
}

type propsType = {
    value: { id: string },
    onClick: (value: { id: string }) => void
}
const MyTextField = (props: propsType) => {
    const { value, onClick } = props
    return <TextField value={value} onClick={() => onClick(value)} />

}
export default SearchText;
