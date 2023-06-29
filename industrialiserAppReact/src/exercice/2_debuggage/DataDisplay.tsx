import { Button, TextField } from "@mui/material";
import { useState } from "react";

type ParentProps = {
    data: any[]
    removeItem: (id: number) => void
}

const DataDisplay = (props: ParentProps) => {
    const { data, removeItem } = props;
    const [switchItem, setswitchItem] = useState<boolean>(true);
    return (
        <div>

            {switchItem ?
                <>
                    <p>first</p>
                </>
                :
                <>
                    <p>sec</p>
                </>
            }
            <TextField key={switchItem ? `first` : `sec`} />
            <Button
                variant="text"
                onClick={() => setswitchItem(!switchItem)}
                startIcon="O"
            />

        </div >
    )
}

export default DataDisplay;
