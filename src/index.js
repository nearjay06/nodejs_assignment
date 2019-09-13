import { today, date } from '../src/app/TodayDate';
import {Person} from '../src/app/Obj';

let myDiv = document.querySelector('#root');
let mySpan = document.createElement('span');
myDiv.appendChild(mySpan);
mySpan.className = "lala";
// mySpan.innerHTML = "Today is " + today;
// mySpan.innerHTML = "Person.Name " + " Person.Birthyear " + "Person.Age ";
mySpan.innerHTML =`${today} <br><br> Name:${Person.Name}<br><br> Date of Birth: ${Person.Birthyear}<br><br> Age: ${Person.Age()}`




console.log(date);
console.log(today);


console.log(Person.Name);
console.log(Person.Birthyear);
console.log(Person.Age);
