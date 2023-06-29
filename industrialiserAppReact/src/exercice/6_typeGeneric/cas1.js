"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemons = [
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
    },
];
TAtt;
keyof;
TList[number] >
    (list);
TList, idx;
number, att;
TAtt;
TList[number][TAtt];
var pokemonKeygetter = function (list, idx, att) { return list[idx - 1][att]; };
var result = pokemonKeygetter(pokemons, 2, "name");
//      ^?
console.log("🚀 QCA ~ result:", result);
var action = { type: "ADD_ONE" };
var formField = {
    isValid: true,
    value: "toto",
};
