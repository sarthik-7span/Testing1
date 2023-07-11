// "use strict";

// x = 115;
// y = 110;

// let y = 7;
// let x = 2;
// let z = 8*x;

// function uppercase() {
//     document.getElementById("input-field").value = document.getElementById("input-field").value.toUpperCase();
// }


// let num = 3;
// let text = "";
// while (num != Infinity) {
//     num = num * num;
//     text += num + "<br>";
// }
// document.getElementsByClassName("text")[0].innerHTML = text
// console.log(text)

// {
//     let array = ["bike", "car", "plant", "money", "house"];
//     let value = "<ul>";

// for (i = 0; i < array.length; i++){
//     value += "<li>" + array[i] + "</li>";
// }
//     value += "</ul>";
//     document.getElementsByClassName("text")[0].innerHTML = value
// }

// {
//     const array = ["bike", "car", "plant", "money", "house"];

//     let valu = "<ul>";
//     array.forEach(fun);
//     valu += "</ul>";

//     function fun(value) {
//             valu += "<li>" + value + "</li>";
//     }


//     document.getElementsByClassName("match")[0].innerHTML = valu;
// }


//     const day = ["sunday", "monday", "tuesday", "wedday", "thursday", "friday", "saturday"];
//     let count = "<ul>";
//     day.forEach(holiday)
//     count += "</ul>";

//     function holiday(value) {
//         count += "<li>" + value + "</li>";
//     }
//     console.log(count)
//     document.getElementsByClassName("match")[0].innerHTML = count;


// const man = [];
// man[0] = "123";
// man[1] = "456";
// man[2] = "789";
// console.log(man[2])









// function submit() {

//     let value = document.getElementById("input-field").value
//     if (isNaN(value)) {
//         console.log("please type your Age in number")
//     }
//     else {
//         (value<18)? console.log("you are baby now") : console.log("you are elidgable")
//     }
// }

// function submit() {

//     let value = document.getElementById("input-field").value
//     if (value < 5) {
//         console.log("first you need to study")
//     }
//     else if (value < 12) {
//         console.log("you are small baby now")
//     }
//     else if (value < 18) {
//         console.log("you are baby now")
//     }
//     else {
//         console.log("you are elidgable")
//     }
// }



// switch (new Date().getDay()) {
//     case 0:
//         day = "SUNDAY"
//     case 1:
//         day = "MONDAY"
//     case 2:
//         day = "THUEDAY"
//     case 3:
//         day = "WEDNUSDAY"
//     case 4:
//         day = "THURSDAY"

//     case 5:
//         day = "FRIDAY"
//     case 6:
//         day = "SATURDAY"

//     // default:
//     //     day = "aaj koi din nahi he re baba"
// }

// console.log(day)




// function cars() {
//     const cars = ["JAGUAR", "PORSHA", "FARARI", "AUDI", "MG"]
//     let fav = "";
//     for (let x in cars) {
//         // let fav = cars[i];
//         fav += cars[x] + " "
//     }
//     console.log(fav)
// }

// for (let i = 0; i < 20; i++) {
//     // const value = array[i];
//     if (i===17) {
//         continue;
//     }
//     console.log(i)
// }


//     let market = new Map([["apple", 500], ["orange", 600], ["banana", 300]])

// let text = ""
//     market.forEach(function all(value,key) {
//         text += key + " " + value + "<br>"
//     })

// console.log(text)


// let market = new Map([["apple", 500], ["orange", 600], ["banana", 300]])

// let text = ""
// for (const x of market.entries()) {
//     text += x;
// }

// console.log(text)



// console.log(sar)


// var sar = "sarthik"

// console.log(sar)


// document.getElementsByClassName("match")[0].innerHTML= sar


// var sar = "sarthik"

// console.log(sar)



// let collection = {
//     cars: "Audio",
//     bike: "duck",
//     house: "burj-al-arab",
//     jet: "cargo-A312",
//     police: function(){
//         return this.cars + " " + this.bike;
//     }
// }


// class car {
//     constructor(name, brand) {
//         this.name = name,
//         this.brand = brand
//     }

//     name(x) {
//        return x + "fire"
//     }
// }

// let sim = new car("kora", "tego")
// console.log(sim.name + " " + sim.brand + sim.name(122))



// let day = {
//     first: "monday",
//     second: "tuesday",
//     third: "wednesday",
//     fourth: "thursday",
//     fifth: function() {
//         return 9 + 5;
//     },
//     get lang() {
//         return this.language;
//     }
// }
// text = "";
// for (const x in day) {
//     text += day[x] + " ";


// }
// console.log(JSON.stringify(day))

// function bio(name,lastname,age,blood) {
//     this.name = name;
//     this.lastname = lastname;
//     this.age = age;
//     this.blood = blood;
//     this.flash = function(x){
//         return this.root = x
//     }
// }
// let my = new bio("sarthik","kevadiya",21,"a+")


// console.log(my.flash("sky"))



// const name = ["hello","sarthik"];

// let text = "";
// let noob = "";
// for (let x in name) {
//     text += name[x] + " "
// }
// console.log(text);


// const set = new Set(["1", "2", "3", "4", "5"])
// const day = {
//     one: "monday",
//     two: "tuesday",
//     three: "wednesday",

// }
// set.forEach(value => {
//     text += value + "";
// });

// console.log(set.keys())

// const veg = new Map([
//     ["fruit", "tomatto"],
//     ["fastfood", "pani-puri"],
//     ["drink","rasna"]
// ])
// veg.forEach((key,value)=>{
//     noob+= key + " " + value + "<br>";
// });

// for (const x of veg.values()) {
//     noob+= x+ "<br>"
// }

// const person = {
//     fullname: function (still,cool) {
//         return this.fname + " " + this.lname + " , " + still + " , " +cool
//     }
// }
// const person1 = {
//     fname: "sarthik",
//     lname: "kevadiya"
// }
// const person2 = {
//     fname: "sunny",
//     lname: "kevadiya"
// }
// document.getElementsByClassName("match")[0].innerHTML = person.fullname.apply(person1, ["added", "added to"]);
// console.log(noob)



// class cars {
//     constructor(ducati, audi) {
//         this.ducati = ducati,
//             this.audi = audi
//     }
// }

// const my = new cars(fcar, scar)

// console.log(my.ducati)


// function last(value) {
//     console.log(value)
// }

// function sum(num1,num2,fruit) {
//     let plus = num1 + num2;
//     fruit(plus)
// }
// sum(38, 440, last);


// setTimeout(friee, 3000)
// function friee() {
//     return console.log("first");
// }

// function hulk() {
//     let r = 3 + 5;
//     console.log(r)

// }

// setTimeout(hulk, 4000)

// setTimeout(() => {
//     console.log(3333333)
// }, 5000);

function hello() {
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    document.getElementsByClassName("match")[0].innerHTML = hours + ":" + minutes + ":" + seconds
}

setInterval(hello, 1000);

// setTimeout(() => {
//     return console.log(3+5)
// }, 2000);



// function chalbe(cc) {
//      console.log(cc)
// }
// function tap(valu1,valu2,runbro) {
//     let sum = valu1 * valu2;
//     return runbro(sum);
// }

// tap(200,30,chalbe)



// async function wello() {

//     let bye = new Promise(function (resolve, reject) {
//         resolve('hello sarthik');
//     })

//     document.getElementsByClassName("text")[0].innerHTML= await bye
// }

// function Myalert() {
//     alert("hello");
// }


// const students = [
//     { name: 'Quincy', grade: 96 },
//     { name: 'Jason', grade: 84 },
//     { name: 'Alexis', grade: 100 },
//     { name: 'Sam', grade: 65 },
//     { name: 'Katie', grade: 90 }
// ];

// const studentGrades = students.filter(student => student.grade >= 80 && student.grade <= 100);
// // return studentGrades; // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]


// console.log(studentGrades)



// const para = document.createElement("b");
// const text = document.createTextNode("this is new paragraph");
// para.appendChild(text)

// const element = document.getElementById("div1");
// const child = document.getElementById("p1");
// element.insertBefore(para, child);



// const a = "hello"
// console.log(a)


// console.log(f)
// const f = 333;




// let list = {

//     friend: "jack",
//     number: 19,
//     male: 12,
//     femail: 7,

//     myfriend:() => {
//          console.log("friend")
//     },
//     nofriend() {
//          console.log("hello from goa" + " = " + this.male)
//      }   
// }


// list.myfriend()
// list.nofriend()


// function yooofriend() {
//     console.log("hello from goa" + " = " + this.male)
// }   
// console.log(yooofriend())



// function calc(a,b) {
//     return a/b
// }
// document.getElementsByClassName("text")[0].innerHTML = calc(40, 2)
// console.log(calc(400,4))


// text = ""
// for (let i = 0; i < Infinity; i++) {
//     text += [i] + " ";

//     if (i = 1000) {
//         document.getElementsByClassName("text")[0].innerHTML = i;
//         break;
//     }
// }

// document.getElementsByClassName("text")[0].innerHTML = i;

// function check() {
//     var value = document.getElementById("input-field").value;
//     var yum = [22, 33, 24, 555, 655, 25, 88, 977, 56, 87]

//     if (yum[value]%2 == 0) {
//         document.getElementsByClassName("text")[0].innerHTML = (yum[value] + "=" + "even he bhai");
//         console.log(yum[value] + "=" + "even he bhai");
//     }
//     else {
//         document.getElementsByClassName("text")[0].innerHTML = (yum[value] + "=" + "odd he bhai rahene de");
//         console.log(yum[value] + "=" + "odd he bhai rahene de");
//     }

// }


// function check() {

//     if (data % 2 == 0) {
//         document.getElementsByClassName("text")[0].innerHTML = "even he bhai",
//         console.log("even he bhai")
//     }
//     else {
//         document.getElementsByClassName("text")[0].innerHTML = "odd he bhai rahene de",
//         console.log("odd he bhai rahene de")
//     }
// }


// class Car {
//     constructor(name,age) {
//         this.brand = name;
//         this.ages = age;

//     }
// }

// const mycar = new Car("Ford",30);



// const moll={
//     first: "droy",
//     second: "mory",
//     third: "croy",
//     forth: "rory"
// }



// let z = [2, 30, 20, 40,25]

// function avg(a,b,c,d,e) {
//     let m = a + b + c / 2;
//     let o = d - e / 5;
//     return m + o
// }
// let y = avg(...z)
// console.log(y)


// let animal= {
//     fast: "chitas",
//     cute: "dogs",
//     deadly: "crockodile",
//     smart: "wolf"
// }
// let bird = { ...animal, lang: "crock crock" }
// bird.fast = "Eagle"
// console.log(bird.deadly)
// console.log(bird.fast)


// const yoo = animal
// yoo.fast="hoo hoo"
// console.log(yoo.fast      

// console.log("HELLO EVERYONE")
// setTimeout(() => {
//     console.log("HELLO EVERYONE CENTER")
// }, 1000);
// console.log("HELLO EVERYONE ONE TWO THREE")

// let fs= require("fs")
// fs.readFile("random.txt", "utf-8", (err, data) => {
//     console.log(err,data)
// })


// const day = {
//     firstday: "sunday",
//     secondday: "saterday",
//     first: function () {
//         return this.firstday + " " + this.secondday
//     }
// }

// const days = {
//     firstday: "monday",
//     secondday: "tuesday"
// }

// console.log(day.first.bind(days))

// let x = "The rain b in SPAIN B stays mainly b in the B plain"
// let y = x.match(/b/gi)
// console.log(y)

// let xe = 123;
// let ye = `value : ${xe + 123}`;
// console.log(ye)



// let xe = 123;
// let y = 123;
// let z = "hello:" + (xe + 123)
// console.log(z)

// let text = "<ul>"
// for (let index = 0; index < day.length; index++) {
//     text += "<li>" + day[index] + "</li>"
// }
// text += "<ul />"

// document.getElementsByClassName("text-new")[0].innerHTML = text;

// const day = ["monday", "friday", "saturday", "sunday", " thuesday"]
// // day.push("pushday")
// day.pop()
// console.log(day)
// document.getElementsByClassName("text-new")[0].innerHTML = day;

// console.log(day.join(" "))


// const num = [3, 44, 6, 70, 8, 1, 2, 5]

// function max(num) {
//     return Math.max(...num)
// }
// console.log(max(num))

// const max = [
//     { name: "sunny", age: 25 },
//     { name: "sarthik", age: 20 },
//     { name: "keyur", age: 22 }
// ]
// max.sort(function (a, b) {
//     return a.age - b.age
// })
// console.log(max)


// const array = [12, 33, 44, 34, 56, 666, 78, 91, "frog"]

// let txt = ""
// array.forEach(myfunction)
// function myfunction(value, index, array) {
//     array[index] = value * 10;
//     txt += value + "<br>"
// }
// document.getElementsByClassName("text-new")[0].innerHTML = txt;

// const array = [12, 33, 44, 34, 56, 666, 78, 91, "frog"]

// array.forEach(myfunction)
// function myfunction(value, index, array) {
//     array[index] = value * 10;
// }
// document.getElementsByClassName("text-new")[0].innerHTML = array;


// const array = [12, 3, 44, 34, 56, 666, 78, 91]

// function myfunction(value, index, array) {
//     return value > 50
// }
// const v = array.entries()

// let k = "qwertyuiop"
// document.getElementsByClassName("text-new")[0].innerHTML = v;

// const array = [12, 3, 44, 34, 56, 666, 78, 91]

// let txt = "";

// for (const x in array) {
//     txt+= array[x] + ""
// }
// // document.getElementsByClassName("text-new")[0].innerHTML = txt;

// let wri = ""
// for (const iterator of array) {
//     console.log(iterator)
//     wri += iterator + " ";
//     document.getElementsByClassName("text-new")[0].innerHTML = wri;
// }

// const days = [22, 34, 55,-27, 11, 200, 20,-55, 4, 300, 4];

// let y = days.sort(function (a, b) { return a - b })
// console.log(y)
// console.log(y[y.length-1])
// console.log(y[0])

// let r = Math.random()*100
// console.log(r.toPrecision(2))
// function submit(){

//     if (isNaN(value)) {
//         console.warn("number is not a number")
//     } else {
//         console.log((value > 10) ? "10 thi moti" : "10 thi nani")
//     }
// }

// let a = 123;
// let y = "Star"
// let z = a ?? y;

// console.log(z)

// switch (new Date().getDay()) {
//     case 0:
//         day = "sunday";
//         break;
//     case 1:
//         day = "monday";
//         break;
//     case 2:
//         day = "tuesday";
//         break;
//     case 3:
//         day = "wednesday";
//         break;
//     case 4:
//         day = "thusday";
//         break;
//     case 5:
//         day = "friday";
//         break;
//     case 6:
//         day = "saturday";
//         break;
//     default:
//         day = "je hoy ae kam karne"
//         break;
// }
// console.log(day)


// const person = { fname: "John", lname: "Doe", age: 25 };

// // const person = [11, 22, 33, 44, 55, 66, 77]
// // const person = "javascript"
// let txt = ""

// for (const x of person) {
//     txt += x + " ";
// }

// function submit() {
// for (let value = 0; value < 20; value++) {

//     if (value < 10 && value != 8) {
//         console.log("value less 10 success:"+ value)
//     }
//     else if (value = 8) {
//         console.log("value is 8 bro:" + value)
//     }
//     else {
//         console.log("value is more than 10:" + value)
//     }
// }   
// }
// document.getElementsByClassName("text-new")[0].innerHTML = txt;


// for (let i = 0; i < 20; i++) {
//     if (i==3) {
//         continue
//     } 
//     if (i == 10) {
//         break
//     } 
//     else {
//         console.log("value is:"+ i)
//     }
// }
// let box = ["a", "b", "c", "a", "m", "b"]
// let box = new Set(["a", "b", "c", "a", "m", "b"])


// const box = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]);

// let txt = ""
// for (const x of box) {
//     txt += x + " "
// }

// console.log(box.constructor)


// x = "hello from another world From"
// console.log(x.replace(/from/ig, "god"))


// const data = {
//     name: "Sarthik",
//     surName: "Kevadiya",
//     middleName: "Gordhanbhai",
//     fullName: function () {
//         return this.name + " " + this.middleName + " " + this.surName
//     }
// }

// let name= this.name

// console.log(data.fullName())

// console.log(data.name)


// const person = {
//     Fname: "Sarthik",
//     Lname: "Kevadiya",
//     fullname: function name() {
//         return this.Fname + " " + this.Lname
//     }
// }

// const person1 = {
//     Fname: "Sunny",
//     Lname: "Kevadiya"
// }

// console.log(person.fullname.call(person1))




// function increment() {
//     let value = parseFloat(document.getElementById("display").innerHTML)

//     document.getElementById("display").innerHTML = value+10
//     console.log(value)
// }
// function decrement() {
//     let value = parseFloat(document.getElementById("display").innerHTML)

//     document.getElementById("display").innerHTML = value - 10
//     console.log(value)
// }



// class car {
//     constructor(name,year) {
//         this.name = name;
//         this.year = year;
//     }
//     age() {
//         let old = new Date();
//         return old.getFullYear() - this.year
//     }
// }

// let car1 = new car("mustang", 2020)
// let car2 = new car("Audi", 2022)
// console.log(car1, car2)
// document.getElementById("display").innerHTML = car1.name + " " + car2.year + " " + "<br>" + "how much old:" + " " + car1.age()

// const goal = {
//     name: "first",
//     task: "Vue-js"
// }
// document.getElementById("display").innerHTML = JSON.stringify(goal)

// let x = Symbol("firstname")
// let y = Symbol("lastname")
// console.log(typeof x)


// const jadu = {
//     name: "sarthik",
//     roll: 22,
//     fname: "gordhanbhai",
//     get xyz() {
//         return this.roll
//     },
//     set abc(petname) {
//         return this.name = petname
//     },
//     fyz: function () {
//         return this.name.toUpperCase()
//     }
// }
// jadu.abc = "sunny"
// console.log(jadu.xyz)
// console.log(jadu.name)
// document.getElementById("display").innerHTML = jadu.xyz

// console.log(jadu.fyz())

// function Person(name, surname,age,height) {
//     this.firstname = name;
//     this.surname = surname;
//     this.age = age;
//     this.height = height;
// }

// let person1 = new Person("sarthik", "kevadiya", 22, 150)

// document.getElementById("display").innerHTML = person1.surname
// console.log(person1.height)


// function sum(a,b) {
//     console.log(a + b)
// }
// sum(3,4)


// let myfunction = new Function("a", "b", "return a-b")

// console.log(myfunction(3, 9))
// console.log(myfunction(5, 2))
// console.log(myfunction instanceof Object)

// const x = (a, b, c) => a + b - c
// console.log(x(10, 5, 3))


// let crime = function (i,j=10,k) {
//     return (i*j)/k
// }
// console.log(crime(20,j=10,7))

// let sum = [20, 30, 22, 44, 35]

// txt = null
// for (const x of sum) {
//     txt += parseFloat(x)
// }
// console.log(txt)

// const obj = {
//     fullname(city,town) {
//         return this.fname + " " + this.lname + " " + city + " " + town
//     }
// }

// const obj1={
//     fname: "sarthik",
//     lname: "kevadiya"
// }

// console.log(obj.fullname.call(obj1, "Ahmedabad", "Gujrat"))
// console.log(obj.fullname)
// document.getElementById("display").innerHTML = obj.fullname.apply(obj1,["hello","vello"])


// (function name() {
//     console.log("self invoke function")
// })()

// let display = 0
// document.getElementById("display").innerHTML = display;

// function increment() {
//     display += 1;
//     document.getElementById("display").innerHTML = display;

// }
// function decrement() {
//     display -= 1
//     document.getElementById("display").innerHTML = display;
// }

// function mydisplay(x) {
//     document.getElementById("display").innerHTML = x
// }
// setTimeout(second(5, 6, callback), 3000);

// function callback(xy) {
//     document.getElementById("display").innerHTML = xy
// }

// function second(x,y,callit) {
//     sum= x+y
//     return callit(sum)
// }
// setTimeout(hello, 3000);

// function hello() {
//     document.getElementById("display").innerHTML = "hello fello"
// }


// function result(result) {
//     document.getElementById("display").innerHTML = result
// }
// let mypromise = new Promise(function (myresolve, myreject) {
//     myresolve("successfully run");
// })

// mypromise.then(
//     function (value) { result(value) },
//     function (error) { result(error) }
// );

// async function sarthik() {
//     let w1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("27 deg")
//         }, 2000)
//     })
//     let w2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("21 deg")
//         }, 5000)
//     })
//     console.log("featching w1:")
//     let w1r = await w1
//     console.log("featching w1:" + w1r)

//     console.log("featching w2:")
//     let w2r = await w2
//     console.log("featching w1:" + w2r)

//     return[w1r,w2r]
// }
// let a = sarthik()
// a.then(
//     (value) => console.log(value)
// )
// let y = document.getElementById("display")
// function morning() {
//     let x = new Date()
//     let hours = x.getHours()
//     let minutes = x.getMinutes()
//     let second = x.getSeconds()

//     let htmltxt= hours + ":" + minutes + ":" + second
//     y.innerHTML = htmltxt
// }
// setInterval(morning, 1000);

// const para = document.createElement("h2")
// para.innerHTML = "this is h2 tag text"
// document.getElementById("display").append(para)

// const x = document.querySelectorAll("p")

// console.log(x[0].innerHTML)

// document.getElementById("input-field").type = "number"

// let v = new Date()
// console.log(v)

// document.getElementById("event-listner").addEventListener("click", () => { alert("hello world") })

// // document.getElementById("event-listner").remove()

// // console.log(document.querySelectorAll("div").length)


// let w = window.innerHeight
// let z = window.innerWidth
// window.resizeTo(600,1440)
// console.warn(w,z)

// let x = '{"name":"John", "age":30, "city":"New York"}'

// let y = JSON.parse('{"name":"John", "age":30, "city":"New York"}')

// console.log(y)

// const citrus = fruits.slice(3);

// console.log(citrus)
// console.log(fruits)
// document.getElementById("display").innerHTML = Math.max(1,22,444)
// const fruits = ["222", 33, "ggg", 444];
// let x = Math.random()
// console.log(Math.trunc(x))

// function submit() {
//     let value = document.getElementById("input").value
//     console.log(value)
//     if (value>18) {
//         document.getElementById("text").innerHTML = "your are eligable"

//     }
//     else {
//         document.getElementById("text").innerHTML = "your are not eligable"
//     }
// }


// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let txt = ""
// for (let x = 0; x < cars.length; x++) {
//     if (x==3) {
//         continue
//     }
//     txt += cars[x] + " "
// }
//  document.getElementById("display").innerHTML = txt


// let string = "hellowhatsup"
// let txt = ""
// for (const x of string) {
//     txt += x + " "
// }
// document.getElementById("display").innerHTML = txt.split("")
// console.warn(txt.split(" "))


// const setting = new Set(["A", "B", "C"])


// let sets = setting.values()
// document.getElementById("display").innerHTML = text

// console.log(sets.next().value)
// console.log(sets.next().value)

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]);
// fruits.set("pinaple", 900)

// let maps = (value) => text += value + " "

// let text = ""
// fruits.forEach(maps)

// let x = ""
// console.log(text)

// const detail = {
//     name: "sarthik",
//     surname: "kevadiya",
//     id: 116
// }
// detail.fathername = "gordhanbhai"
// delete detail.name
// console.log(detail.name)


// function Detail(name, sname, fname, lname) {
//     this.name = name;
//         this.sname = sname;
//         this.fname = fname;
//         this.lname = lname;
// }
// Detail.prototype.upname = "god";

// const family = new Detail("sarthik", "kevadiya", "gordhanbhai", "hello")

// console.log(family.upname)


// const array = [1, 3, 4, 66, 7]

// text = ""

// for (const key in array) {
//     text += array[key] + " "
// }

// const setting = new Set(["A", "B", "C"])


// let sets = setting.entries()
// let txt = ""

// for (const x of sets) {
//     txt += x + "<br>"
// }

// hello = (a,b) => {
//     document.getElementById("display").innerHTML= a+b
// }
// hello(3,4)

// let max = [22, 33, 44, 55, 777]
// let result = Math.max.call(null, 22, 33, 44, 55, 777)
// console.log(result)

// function display(x) {
//     document.getElementById("display").innerHTML = x
// }
// function sum(a,b,c) {
//     x= a + b - c
//     display(x)
// }

// sum(2, 33, 4)


// let display = (x) => console.log(x)
// let myPromise = new Promise(function (resolve, reject) {   
//     let x = 12;
//     if (x<5) {
//         resolve("Ok");
//     } else {
//         reject("Failed")
//     }
// })

// myPromise.then(
//     (value22) => display(value22),
//     (error22) => display(error22)
// )


// function function1() {
//     console.log("hello sarthik:" + this)
// }
// d = 98;
// console.log(d)
// document.getElementById("mouseover").addEventListener("click", () => {
//     console.log("sarthik kevadiya")
//     let a = confirm("are you sure....")
//     console.log(a)
// })

// const obj = {
//     one: 111,
//     two: 222,
//     three: `${two}`,
//     function1: function () {
//         console.log("hello sarthik:" + this.one)
//     }
// }
// console.log(obj)
// document.getElementById("mouseover").innerHTML = obj.one + " " + obj.two

// let x = 2
// let y = ""

// while (x <100) {
//     x *= x
//     y += x + "<br>"
// }
// console.log(y)
// document.getElementById("mouseover").innerHTML = y;

// const day = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
// day[12]="funday"
// let text = "<ul>"

// for (let index = 0; index < day.length; index++) {
//     text += "<li>" + day[index] + "</li>"
// }
// text += "</ul>"
// document.getElementById("mouseover").innerHTML = text;
// console.log(text + "")


// const my =[]
// my[0] = "111"
// my[1] = "222"
// console.log(my)

// let on = [11, 22, 33, 333]
// on.forEach(expo)
// function expo(value) {
//     let txt = ""
//     txt += value * 2
//     console.log(txt)
// }



// function timenow() {
//     let one = new Date()
//     let hours = one.getHours();
//     let Minutes = one.getMinutes();
//     let Seconds = one.getSeconds()
//     let time = hours + ":" + Minutes + ":" + Seconds

//     document.getElementById("mouseover").innerHTML = new Date();


// }

// setInterval(timenow, 1000)


// let second = new Date()
// second.setHours(8);
// second.setDate(18);

// console.log(second)

// const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// function random() {

//     return console.log(daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)])
// }
// // setInterval(random,1000)

// let rain = false
// let weather = rain ? "water" : "dry"
// console.log(weather)


// let warn = document.getElementById("warning")
// let name = null
// let surname = "sing"
// let fullName = name ?? surname
// console.log(fullName)
// function submit() {
//     let x = Number(document.getElementById("inpfield").value)

//     console.log(x + " ")

//     if (isNaN(x)) {
//         warn.innerHTML = "Provide valid number please"
//     } else if (x > 18) {
//         warn.innerHTML = "You are eligible"
//     }
//     else {
//         warn.innerHTML = "you are below 18"
//     }
// }

// let day
function update() {
    let data = Number(document.getElementById("day").value)

    switch (new Date().getDay()) {
        case 0:
            day = "monday"
            break;
        case 1:
            day = "tueday"
            break;
        case 2:
            day = "wednesday"
            break;
        case 3:
            day = "thursday"
            break;
        case 4:
            day = "friday"
            break;
        case 5:
            day = "saturday"
            break;
        case 6:
            day = "sundayday"
            break;

        default:
            day = "Funday"
            break;
    }
    console.log(day, data)
}

// let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// let x = "";

// for (let index = 0; index < month.length; ++index) {
//     x += month[index] + " "
// }
// console.log(x) 


// for (let i = 1; i <= 10; ++i) {
//     console.log(i);
// }

// const x = new Map([["fruit", 1000], ["vegetable", 5000], ["snack", 2000]])

// x.set("shake", 2450)
// const numbers = [11, "www", 32, "com", 55]
// console.log(isArray(numbers))
// function isArray(myArray) {
//     return myArray.constructor === Array;
// }
// console.log(typeof(Array))


// const fullname = (age, weight) => `my name is ${this.fname} ${this.lname} ${this.fathername} ${age} ${weight}`


// let x = fullname.apply(str, [72, 33])
// console.log(x)

// const arr = [22, 33, 44, 55]
// let sqrt = (x) => x.length
// console.log(sqrt(arr))


// class bike {
//     constructor(name, price, year) {
//         this.name = name,
//         this.price = price,
//         this.year = year
//     }

//     bikedetail() {
//         return `I have a ${this.name} and I bought it for ${this.price}`
//     }
//     years() {
//         let date = new Date()
//         let time = date.getFullYear() - this.year
//         console.log(`I brought this bike almost ${time} years ago`)
//     }
// }

// const list = new bike("Ninja H2", 1200000, 2019)
// console.log(list.years())

// const str = {
//     fname: "sarthik",
//     lname: "kevadiya",
//     fathername: "gordhanbhai",
//     fullname: function () {
//         return "ssss"
//     }
// }
// console.log(str.fullname.name)

// const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//         { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//         { name: "BMW", models: ["320", "X3", "X5"] },
//         { name: "Fiat", models: ["500", "Panda"] }
//     ]
// }
// let txt = "";
// for (const i in myObj.cars) {
//     txt += "<h1>" + myObj.cars[i].name + "</h1>"
//     for (const j in myObj.cars[i].models) {
//         txt += "<p>" + myObj.cars[i].models[j] + "</p>"
//     }
// }

// console.log(str)

// const employee = {
//     name: "harsh",
//     id: 21,
//     height: 5.8,
//     weight: 70
// }
// employee.fullname = "eee"

// let detail = ""
// for (const i of "employee") {
//     detail += i + " "
// }
// console.log(employee)
// document.getElementById("display").innerHTML = employee.height


// function Family(name, price, year) {
//     this.name = name,
//         this.price = price,
//         this.year = year
// }

// Family.gender = "male"
// const tree = new Family("kawasaki", 2000000, 2021)

// console.log(detail)

// function callback() {
//     let l = 0;
//     return {
//         next: () => {
//             l += 10;
//             return {
//                 value: l
//             }
//         }
//     }
// }

// let y = callback()
// y.next()
// y.next()
// y.next()

// console.log(y.next().value)

// function value(x,y) {
//     if (x==undefined) {
//         x=10
//     }
//     return x*y
// }

// console.log(value(undefined,7))

// let u = [11, 22, 333, 4323]
// let m = Math.max.apply(null,u)
// console.log(m)

// class summer {
//     constructor(funday) {
//         this.fundtime = funday
//     }
//     get enjoy() {
//         return this.fundtime
//     }
//     set enjoy(x) {
//         this.fundtime = x
//     }
// }
// class holiday extends summer {
//     constructor(funday, oneday) {
//         super(funday);
//         this.onetime = oneday
//     }
//     sum() {
//         return this.enjoy + " " + this.onetime
//     }
// }
// const myholiday = new holiday("saturday", "sunday")

// myholiday.enjoy = "xxxxxxxxxxxxxxxx"

// console.log(myholiday.sum())

// multi = () => console.log(2 * 2)

// setTimeout(multi, 3000)


// print = (x) => console.log(x)
// let promp = new Promise(
//     function (result, error) {
//         x = 1;
//         if (x <= 5) {
//             result("value is less then 5");
//         } else {
//             error("value is more then 5");
//         }

//     }
// )
// promp.then((value) => print(value), (error) => print(error))


// let mypromp = new Promise(function (myresolve) {
//     setTimeout(() => myresolve("setimeout run successfully"), 4000)
// })

// mypromp.then((value) => console.log(value))

async function name() {
    let issue = new Promise(
        (resolve,reject) => {
            x = 1

            if (x <= 5) {
                resolve("value is less then 5");
            } else {
                reject("value is more then 5");
            }
        }
    )
    document.getElementById("display").innerHTML = await issue
}
name()
$(document).ready(function () {
    $('#display').on('click', function () {
        $('.match').addClass('highlight');
    });
});

// $(document).ready(function () {
//     $('#display').on('click', function () {
//         $('.match').addClass('highlight');
//     });
// });