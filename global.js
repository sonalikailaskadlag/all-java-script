// addition of 2 no 1

let a=3;
let b=5;

  
function add(){
    c=a+b;
    console.log("add is"+c);
}
add();

//prime no
let num=8;
function prime(){
    if(num%2==0)
    console.log("no is  not prime");

else console.log("no is prime");}

prime();

//even 2

let num1=7;

function even_odd(){
    if(num1%2==0)
    console.log("no is even");
    else console.log("no is odd");
}
even_odd();

// multiplicatio 3
let q=3;
let w=6;

function MultiPlication(){
    e=q*w;
    console.log("multi is",+e);
}
MultiPlication();

//positive negative 4

let num2=-7;

function Pos_Neg()
{
    if(num2>0)
    console.log("no is positive");
    else console.log("no is negative");
}
Pos_Neg();

// square root 5

let num3=6;
 function square(){
num3=Math.sqrt(num3);
console.log("square root is"+num3);
 }
square();

// trangle  6
 let l=2;
 let b1=5;
  
 function area_of_trangle()
 {
    trangle=l*b1;
    console.log("area of trangle is "+trangle);
 }
 area_of_trangle();

 //swap two variable   7

 let x1=10;
 let x2=50;

 function SwapToVariable(){
    [x1,x2][x2,x1];
    console.log(x1);
    console.log(x2);
 }
 SwapToVariable();

//  kilo meter to Miles  8
let km=30;
const fact=2;

function kilometer_To_Miles(){
    result = km*fact;
    console.log(result);

}
kilometer_To_Miles();

// fahrenheit = celsius * 1.8 + 32   9
let celsius=3.7;
 function FaraToCel(){
    fahrenheit =celsius * 1.8 + 32;
    console.log("fara to cel is......"+fahrenheit);
 }
 FaraToCel();

//  avaScript Program to Find the Largest Among Three Numbers  10

let l1=40;
let l2=600;
let l3=70;

function large_no(){
    if((l1>l2)&&(l1>l3))
    console.log("l1 is greater"+l1);
    else if((l2>l1)&&(l2>l1))
    console.log("l2 is grator    "+l2);
    else console.log("l3 is grator   "+l3);

}
large_no();


// multiplication of 1 table 11

let number=2;

function mult(){
    
for(number=2;number<=20;number=number+2)
console.log(number);
}

mult();

//no is divisible by 7  12

let n=21 ;

function Div(){
if(n%7==0){
    console.log("no is divisable 7");

}else{
    console.log("no is not divsable by 7");

}}  Div();

// square 

let r5=5;

function square000(){
    squaroffive=r5*r5
    console.log("square is " +squaroffive);
}
square000();

// Area of circle 13 

let pi=22/7;

function area_of_circle(){
let r=3;
let A=pi*r*r;
console.log("Area of circle   "+A  );} area_of_circle();

// choice day using switch  14

let day=6;

function swi(){

switch(day){
    case 0:
        console.log("sunday");
break;
case 1:
    console.log("monday");
    break;

    case 2:
        console.log("thesday");
break;
        case 3:
        console.log("wed");
  break;
        case 4:
                console.log("thusday");
                break;
                case 5:
                    console.log(" 4th friday");
                    break;
                    case 6:
          
                    console.log(" 5th satuday");
break;
    }
}swi();


// search it is laep year or not  15

let year=1990;

function LeapYear(){
if((0==year%4) && (0!=year%100)||(0==year%400))
{
    console.log("leap yr"+year);}
    else{ console.log("this is not leap     "+year);}}
    LeapYear();

    // arithmatical operation

    let x, y, res, ch;

    ch=2;

function Arithmatical_operation(){

    if (ch > 0 && ch < 6) {
      x = 29;
      y = 3;
    }

    switch (ch) {
      case 1:
      res = x + y;
      console.log("\n addition Result is :" + res);
      break

      case 2:
      res = x - y;
      console.log("\n substraction is :" + res)
      break

      case 3:
      res = x * y;
      console.log("\n multiplication is is :" + res)
      break

      case 4:
      res = x / y;
      console.log("\nDivision is :" + res);
      break

      case 5:
      res = x % y;
      console.log("\nResult mod is is :" + res)
      break

      default:
      console.log("Invalid Choice:" + ch)
    }} 

    Arithmatical_operation();


    // array declaration  16

    let fruits=['banana','apple']
    function array_declaration(){
console.log(fruits[2])
fruits[2]='mango';
console.log(fruits);}
array_declaration();

// calculate salary using array  17

let employees = ["Supriya", "Sai", "Akshay", "Atul", "Raosaheb"];
let baseSalaries = [10000, 12000, 15200, 20000, 18930];


let hraPercentage = 40;
let taxPercentage = 10;
let pt = 200;
let pfEmployeePercentage = 2;
let pfEmployerPercentage = 1;
let ta = 1200;


function calculateSalary(baseSalary, empName){ //parameters
    let hra = baseSalary * hraPercentage / 100;
    console.log("HRA is " + hra);

    let pf = baseSalary * pfEmployeePercentage / 100;
    console.log('PF is (Employee)' + pf);

    let pfEmployer = baseSalary * pfEmployerPercentage / 100;
    console.log('PF is (Employer)' + pfEmployer);

    let totalPf = pf + pfEmployer;


    let grossSalary = baseSalary + hra + totalPf + pt + ta ;
    console.log(empName + "'s Gross Salary is " + grossSalary);

    let tax = (baseSalary + hra + ta) * taxPercentage / 100;
    console.log("Payable tax is " + tax);

    let netSalary = grossSalary - totalPf - tax - pt;

    console.log(empName + "'s Net salary is : " + netSalary);
}


// calculateSalary(5000, "Rao");

//loop
for(let i = 0 ; i < employees.length ; i++){ //counter
    let en = employees[i];
    let bs = baseSalaries[i];

    console.log("---------------------------"+en+"-------------------------");
    calculateSalary(bs, en);  //arguments
}


console.log(6>=3 && 3>=6); //&& T F =F
console.log(3>=6 && 6>=3); // && F T =F
console.log(6>=3 && 6>=3); //&& T T =T

console.log(6>=3 || 3>=6); //||  T F=T
console.log(3>=6 || 6>=3); // || F T=T
console.log(6>=3 || 6>=3); //|| T T=T


console.log(!6>=3 ); //!


//users type

let UserType;
UserType='securityGuard' , 'Kitchen', 'Batch1', 'Batch2', 'Staff';

UserType="securityGuard";
function User_Type(){
switch(UserType){
    case UserType="securityGuard":
        console.log("Please go to security office.");
        break;

        case UserType="Kitchen":
        console.log("Please go to kitchen department.");
        break;
        case UserType="Batch1":
        console.log("Please go to Ground floor.");
        break;
        case UserType="Batch2":
        console.log("Please go to first floor.");
        break;
        case UserType="Staff":
        console.log("Please seat any ware.");
        break; 
        
}
}User_Type();

// milisec to isSec
let minute1=13;
let total_seconds=55;
function min(){
 minute1 = total_seconds/60;



let remaining_seconds = total_seconds % 60;


console.log(minute1 + " minute1 " + remaining_seconds + " seconds");}
min();

// calculate Emi  22
let loan=2000000;
let month=1;
let r=8.5;


function calEmi(){
rate=8.5/12/100;
console.log("rate is"+rate);

   
    int1=loan*rate*1+rate*1/1+rate*1-1;
    console.log("int of 1 month is " +int1); 

    emi1=loan/month+int1;
    console.log("one month emi is"+emi1);}
    calEmi();

    // Bio Data  24

    let name1="sonalee kailas kadlag";
let address="Radhai,sangamner";
let pin_code=422605;
function Bio_Data(){
console.log("name.   ."+name1);
console.log("address is....."+address);
console.log("pin-code"+pin_code);}
Bio_Data();

// rec area  25

let length=3;
let breadth=5;
function rect(){
areaofrect=length*breadth;
console.log("Area of rectangle is.... "+areaofrect);}
rect();

// find reverse no   26

let i;

function rev_no(){
for(i=1;i<20;i++)
console.log(i>10?20-i:i);}

rev_no();

//Random no 27
let a5=80;
function random_no(){
let ramdom=Math.random(a5);
console.log(a5);
}
random_no();











