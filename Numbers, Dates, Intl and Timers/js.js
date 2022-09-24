"use strict"
let x = '23'
console.log(Number(x))
console.log(+(x))

console.log(Number.parseInt(x,10))
console.log(Number.parseInt('23int' ,10))



console.log(Number.parseInt('10',2))
console.log(Number.parseInt('23int' ,10))

console.log(Number.isNaN('10'))
console.log(Number.isNaN(55))
console.log(Number.isNaN('sss'))



console.log(Number.isFinite('10'))
console.log(Number.isFinite(10))
console.log(Number.isInteger(10))
//math 
console.log(Math.sqrt(10))

let y =[5,1,2,3,6]
console.log(Math.max(...y));
console.log(Math.trunc( Math.random()*10));
console.log(Math.ceil(3.5))
console.log(Math.floor(3.5))
console.log(Math.round(3.5))

let random = (min,max)=>Math.trunc(( Math.random()*(max-min))+1)+min;

console.log(random(5,9))
console.log(+(2.3).toFixed(5))



// numeric separator 
console.log(555_000)

// working with big numbers 

console.log(2** 52 -1)
