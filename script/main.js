// // const buttons = document.querySelectorAll('.button');

// // buttons.forEach(function(item){
// //    item.addEventListener('click', function(){
// //       buttons.forEach((el)=>{
// //          el.classList.remove('green');
// //       });
// //       item.classList.add('green');
// //    });
   
// // });
// //    document.querySelector('.button').click();



// //    const Counter = () => {
// //       let count = 0;
// //       return() => {
// //          return count++;
// //       }
      
// //    }




// // for (let i = 0; i <= 100; i++) {
// //    document.writeln(i);
// //    if(i == 45){
// //       break;

// //    }
// //   }
// //   let floors = 28;
// // for (let i = 1; i <= floors; i++) {
// //  if (i == 13) {
// //  // нет такого этажа (floor)
// //  continue;
// //  }
// //  document.writeln("At floor: " + i + "<br>");
// // }

// //  let array = [
// //    'milk',
// //    'aggs',
// //    'meat'
// //  ]
// //  array.unshift('butter');
// //  array.pop();
// //  for(let i = 0; i <array.length;i++ ){
// //    let item = array[i];
// //    console.log(item);
// //  }

// //  class Comment {
// //    constructor(text){
// //       this.text = text;
// //       this.votesQty = 0;
// //    }
// //    upvote(){
// //       this.votesQty += 1;
// //    }
// //    static mergeComment(first, second){
// //       return `${first} ${second}` 
// //    }
// //  }
 
// //  console.log(Comment.mergeComment('2','1'));


// //  const firstComment = new Comment('First comment');
 
// //  console.log(firstComment);
// //  firstComment.upvote()
// //  console.log(firstComment.votesQty);
// //  firstComment.upvote()
// //  console.log(firstComment.votesQty);

// // /*-------------------------------------------------------------------------------------------------*/

// //  let arr1 = [1, 333,23,3,4,5,888,1337];
// //  let arr2 = [12, 3333,23,3,4,5,123,131237];

// //  let arr3 = arr1.filter((x) => arr2.indexOf(x) !==-1);
// //  document.writeln(arr3);
// // /*-------------------------------------------------------------------------------------------------*/
// // const objectA = {
// //    a: 10,
// //    b:true,
// //    info: {
// //       isPopular: true,
// //       country: 'USA',
// //    }
// // }
// // delete objectA.info['country'];

// // console.log(objectA);

// // const name = 'Vlad';
// // const age = 22;

// // const userProfile = {
// //    name,
// //    age ,
// //    blabla: false,
// // }

// // console.log(userProfile);


// // const myCity = {
// //    city: 'New',
// //    cityGreeting(){
// //       console.log('Greeting!!');
// //    },
// //    country: 'USA'
// // }


// // myCity.cityGreeting();

// // let a = 5;
// //  let b = 5;

// //  function sum(a,b){
// //    const c = a + b;
// //    console.log(c);
// //  }
// //  sum(8,2);
// //  console.dir(sum)

// //  function printName(){
// //    console.log('Hello');
// //  }
// //  setTimeout(printName, 2000)

// //  const myName = 'Vlad';
// //  const liveCity = 'Kharkov';

// //  const result = `Hello my name is ${myName} i live in ${liveCity}`;
// //  console.log(result);



// //Массивы 

// // let names = ["marge", "homer", "bart", "lisa", "maggie"];
// // let newNames = [];
// // for (let i = 0; i < names.length; i++) {
// //  let name = names[i];
// //  let firstLetter = name.charAt(0).toUpperCase();
// //  newNames.push(firstLetter + name.slice(1));
// // }
// // console.log(newNames);


// // метод  map
// // let names = ["marge", "homer", "bart", "lisa", "maggie"];
// // function capitalizeItUp(item) {
// //  let firstLetter = item.charAt(0).toUpperCase();
// //  return firstLetter + item.slice(1);
// // }
// // let newNames = names.map(capitalizeItUp);
// // console.log(newNames);

// // // filter 
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// // let evenNumbers = numbers.filter(function (item) {
// //  return (item % 2 !== 0);
// // });
// // console.log(evenNumbers);
//  // reduce
//  let total = numbers.reduce(function(total, current) {
//     return total + current;
//    }, 0);
//    console.log(total);

//    let words = ["Where", "do", "you", "want", "to", "go", "today?"];
//    let phrase = words.reduce(function (total,e ,current) {
//     if (current == 1) {
//     return e;
//     } else {
//     return total + " " + e;
//     }
//    }, "");
//    console.log(phrase);

// const getData = (url) => 
//    new Promise((resolve, reject)=>
//      fetch(url)
//       .then((response) => response.json())
//       .then((json) => console.log(json))
//       .catch(error => alert(error.message))
//    )


//  getData('https://jsonplaceholder.typicode.com/todos')
//    .then(data => console.log(data))
//    .catch(error => console.log(error.message))
 


//    const asyncFn = async () => {
//       return 'Succsess'
//    }
//    asyncFn()
//    .then(value => console.log(value))
// /*-------------------------------------------------------------------------------------------------*/

//    const timerPromise = () =>
//    new Promise((resolve, reject)=>
//    setTimeout(() => resolve(),2000))

//    const asyncFunc = async () => {
//      console.log('Timer start')
//       const startTimer = performance.now()
//      await timerPromise()
//       const endTimer = performance.now()
//       console.log('Timer End', endTimer - startTimer);
//    };
//    asyncFunc();
// let res = 0;
// for ( let i = 1995; i <= 2021; i++){
//    res += i;
//    console.log(res / 27);
   
// }

// const a = ['a','b', 'c'];
// const obj = {
//    2:'a',
//    1: 'b',
//    7: 'c'
// }

// console.log(Object.getOwnPropertyNames(a));

// const x = ['a','b','f','c',];
// const rand = Math.floor(Math.random() * x.length);
// const res = x[rand];
// console.log(res);

// function getRandomColor() {
//    let characters = "0123456789ABCDEF";
//    let color = '#';
 
//    for (let i = 0; i < 6; i++) {
//      color += characters[getRandomNumber(0, 15)];
//    }
   
//    return color;
//  }
 

// const persone = {
//    name: 'Vlad',
//    age: 22,
//    loginfo: function(job){
//       console.log(`Name is ${this.name}, age: ${this.age}`);
//       console.log(`Job is ${job}`);
//    }
// }

// const lena = {
//    name: 'Lena',
//    age: 44
// }

// persone.loginfo.bind(lena,'Frontend')();
// persone.loginfo.call(lena,'Frontend');
// persone.loginfo.apply(lena,['Frontend']);



// function logPersone(){
//    console.log(`Persone: ${this.name}, ${this.age}, ${this.job}`);
// }
// const persone1 = {name:'Mihail', age: 22, job: 'Front'}
// const persone2 = {name:'Elena', age: 55, job: 'SMM'}


// function bind (context, fn){
//    return function(...arrg) {
//       fn.apply(context, arrg)
//    }
// }
// bind(persone1,logPersone)();
// bind(persone2,logPersone)();





 console.log('Request data...');
   
const p = new Promise((resolve, reject) => {
   setTimeout(() => {
      console.log('Prepearing data...');
      const backend = {
         server: 'aws',
         port: 2000,
         status:'working'
      }
      resolve(backend);
   },2000)
})
p.then(data => {
      return new Promise ((resolve, reject)=> {
         setTimeout(() => {
            data.modified = true
            resolve(data)
         },2000)
      })
   
}).then(clientData => {
   console.log('Data received', clientData)
})
.catch(err => console.log('Error', err))
.finally(() => console.log('Finnaly'));

const sleep = ms => {
   return new Promise( resolve => {
      setTimeout(() => resolve(),ms)
   })
}

// ждет, когда все промисы выполнятся 
Promise.all([sleep(2000), sleep(5000)]).then (() => {
   console.log('All promises');
})
// не ждет, а выполняется , когда 1й срабатывает
Promise.race([sleep(2000), sleep(5000)]).then (() => {
   console.log('RAce promises');
})

// class Animal { 
//    static type = 'ANIMAL'
//    constructor(options) {
//       this.name = options.name,
//       this.age = options.age,
//       this.hasTail = options.hasTail
//    }
//    voice() {
//       console.log('I am Animal');
      
//    }
// }
// const animal = new Animal({
//    name: 'Animal',
//    age: 5,
//    hasTail: true
// })
// console.log(animal.voice());

class Commponent{
   constructor(selector){
      this.$el = document.querySelector(selector)
   }
   hide(){
      this.$el.style.display = 'none';
   }

   show(){
      this.$el.style.display = 'block';
   }
}

class Box extends Commponent {
   constructor(options) {
      super(options.selector)
      this.$el.style.width = this.$el.style.height = options.size + 'px';
      this.$el.style.background = options.color;
   }
}

const box1 = new Box({
   selector:'#box1',
   size: 100,
   color: 'red'
})
const box2 = new Box({
   selector:'#box2',
   size: 200,
   color: 'black'
})

class Circle extends Box {
   constructor(options){
      super(options)

      this.$el.style.borderRadius = '50%';
   }
}

const c = new Circle ({
   selector: '#circle',
   size: 300,
   color: 'green'
})

// function fetchTodos() {
//    console.log('fetch todo start');
//    return delay(2000)
//       .then(() =>  fetch(url))
//       .then(respons => respons.json())
// }

// fetchTodos()
// .then(data => {
//    console.log('Data:', data);
   
// })
// .catch(e => console.error(e))
const delay = ms => {
   return new Promise( resolve => setTimeout(() => resolve(), ms))
}
const url = 'https://jsonplaceholder.typicode.com/todos';


async function fetchAsyncTodos() {
   try{
      console.log('fetch todo start')
      await delay(2000)
      const response  = await fetch(url)
      const data = await response.json()
      console.log('Data:', data);
   }
   catch(e) {
      console.error(e)
   }
   finally{
      
   }
  
}
fetchAsyncTodos()

