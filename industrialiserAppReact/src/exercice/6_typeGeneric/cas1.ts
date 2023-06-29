const pokemons = [
    {
        "id": 1,
        "name": "Bulbasaur",
        "type": [
            "Grass",
            "Poison"
        ],
        "hp": 45,
        "defense": 49,
        "special_attack": 65,
        "special_defense": 65,
        "speed": 45
    },
    {
        "id": 2,
        "name": "Ivysaur",
        "type": [
            "Grass",
            "Poison"
        ],
        "hp": 60,
        "defense": 63,
        "special_attack": 80,
        "special_defense": 80,
        "speed": 60
    },
    {
        "id": 3,
        "name": "Venusaur",
        "type": [
            "Grass",
            "Poison"
        ],
        "hp": 80,
        "defense": 83,
        "special_attack": 100,
        "special_defense": 100,
        "speed": 80
    },]

type keyGetterType = <TList extends any[], TAtt extends keyof TList[number]>
    (list: TList, idx: number, att: TAtt) => TList[number][TAtt]

const pokemonKeygetter: keyGetterType = (list, idx, att) => list[idx - 1][att];

const result = pokemonKeygetter(pokemons, 2, "name")
//      ^?
console.log("🚀 QCA ~ result:", result);


export { }


type OnlyList<T> = T extends any[] ? T : never

const myfunc = (list: OnlyList<boolean>) => { }
//              ^?

interface Action {
    id: string;
}
interface ActionAddOne extends Action {
    type: "ADD_ONE"
}
interface ActionSubtractOne extends Action {
    type: "MINUS_ONE"
}

type Actions = ActionAddOne | ActionSubtractOne

const action: Actions = { id: "", type:  }

type FormDataKO<T> = {
    isValid: false,
    errorMsg: string,
}
type FormDataOK<T> = {
    isValid: true,
    value: T
}
export type FormData<T> = FormDataOK<T> | FormDataKO<T>

const formField: FormData<string> = {
    isValid: true,
    value: "toto"
}