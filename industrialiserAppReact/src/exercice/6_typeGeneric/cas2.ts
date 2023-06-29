
// dans un fichier
const myObject = {
    a: 1,
    b: true,
    c: "3",
}
// const mapper = (data: typeof myObject) => {
//     return data.a * data.b + data.c
// }

// dans un autre fichier hook.
const compose = <TObj, Tkey extends keyof TObj>(data: TObj, key: Tkey) => {
    return data[key]
}

const value = compose(myObject, "b")
//      ^?

export { }
