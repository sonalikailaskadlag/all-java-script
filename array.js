let stud=['sona','mona','supri','surekha','madhu','shubha','gyanu','allfa','om','sai'];
for(let i=0;i<stud.length;i++)
{
    console.log(stud[i]);
}

let compnay=['honda','wipro','tcs','tata','accenture','dada','baap','telco'];//display particulat aary list
for(let i=0;i<compnay.length;i++)
console.log(compnay[i]);

var fruit=['banan','apple','mango'];  //when remove array braket then used tostrting function
var f=fruit.toString();
console.log(f);


// array of object
let cars = [
    {
      color: "purple",
      type: "minivan",
      registration: new Date('2017-01-03'),
      capacity: 7
    },
    {
      color: "red",
      type: "station wagon",
      registration: new Date('2018-03-03'),
      capacity: 5
    },]

    console.log(cars[1],cars[0]);
   console.log(cars.unshift(cars));

//object method

let doc={ name:'om',
address:'pune'

}
function doc1(){
    console.log(doc.name);
}

doc1();


// array of object

let student11=[{
    stud_info:{ name:'sonalee',
    contact:223322,
    address:"pune",
},
     teacher:{
        teacher_name:'swara',
        teacher_sub:'computer',
        teacher_address:'mumbai',

     }
}
]
// console.log(student11);
// console.log(student11[0]);
// console.log(student11.stud_info);
console.log(student11);



     

