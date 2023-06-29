import { Button, TextField } from "@mui/material";
import { useCallback, useMemo, useState } from "react";

const useFilterTodo = (defaultList: string[], filter: () => string[]) => {
    const [todos, setTodos] = useState<string[]>(defaultList);
    const [todoFilter, setTodoFilter] = useState<string>("");


    const todosfilter = useMemo(
        () => todos.filter(filter),
        [todoFilter, todos]);

    const onChangeFilter = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const filter = e.target.value;
        setTodoFilter(filter)
    }, [])


    const removeTodos = useCallback((todo: string) => () => {
        setTodos(oldTodos => oldTodos.filter(t => t !== todo));
    }, [])
    return { todosfilter, setTodos, onChangeFilter, removeTodos }

}

const CycleDeVieProposition = () => {
    const [todoText, setTodoText] = useState<string>("");
    const { todosfilter, setTodos, onChangeFilter, removeTodos } = useFilterTodo([]);

    const addTodo = useCallback(() => {
        if (todoText) {
            setTodos(oldTodos => [...oldTodos, todoText]);
            setTodoText("")
        }
    }, [todoText])




    return (
        <div>
            <h1> Todos </h1>
            <h3>list de Todos ({todosfilter.length})</h3>
            <div>
                <TextField value={todoText} onChange={(e) => setTodoText(e.target.value)}></TextField>
                <Button
                    variant="contained"
                    onClick={addTodo}>
                    AddTodo
                </Button>
            </div>
            <br />
            <div>
                <h3>Filter</h3>
                <TextField onChange={onChangeFilter}></TextField>
            </div>
            <br />
            <div>
                {todosfilter.map((t, id) => (
                    <div key={`${t}-${id}`}>
                        {t}
                        <Button
                            variant="text"
                            onClick={removeTodos(t)}
                            startIcon="X"
                        />
                    </div>))}
            </div>
        </div>
    )
}
export default CycleDeVieProposition;
