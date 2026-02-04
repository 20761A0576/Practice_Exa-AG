import React from "react";

const name : string = "Hello";
const array: number[] = [1,2,3,2];
const obj:{name:string, age: number} = {
    name:"ramdskuf sidub sidfu sdifgv sdif",
    age:9
}
type p = keyof {name:string, age: number};
const pp : p = "age";
console.log(pp);


const Practice = () => {
    return (
        <>Hello {obj?.age === 0 && obj.name.toUpperCase()}</>
    )
}

export default Practice;