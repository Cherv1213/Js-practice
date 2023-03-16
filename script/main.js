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

const a = ['a','b', 'c'];
const obj = {
   2:'a',
   1: 'b',
   7: 'c'
}

console.log(Object.getOwnPropertyNames(a));

