/* a=221
b=a-5
console.log(b) 하면 결과 216 나옴
const a, let a 사용할 수 있는데 const는 고정 변수
let은 변수 변동 가능할 때 사용. 보통 const사용*/

/*datatype
const wat="minju;   텍스트 string"
const wat=true;      true/false Boolean
const wat=6;        숫자 numebr
const wat=55.1;      소수점 숫자 float*/

/*data 정렬
ARRAY[] 리스트 만들때 사용
예시) const dayOfWeek["mon","tue","wed","tue"]
OBJECT (Array와 함께 사용가능)
예시) const minjuinfo={
      name: "minju",
      age: 28,
      favMovie: ["신과함께","올드보이"],
      favFood: [
        {
          name:"cake",
          fatty: true
        },
        {
          name:"carrot",
          fatty: false
        }
      ]
      }
    console.log(minjuinfo.favFood[0].name)
    결과는 cake가 나옴 */

/* 함수에게 외부 데이터 주는 방법
function sayhello(name, age)
{
   console.log('Hello!',name," you have ",age,"years of age")
}
 sayhello("mijnu",28);
 결과는 Hello! minju you have 28 years of age 나옴
 */    /*name, age는 argument,인자임 뭘 넣어도 됨*/

/* function sayhello(name,age) {
  console.log(`Hello ${name} you are ${age} years old`);
}
sayhello ("minju", 28) */


/* 위에랑 같은 결과물 retrun 을 쓰면 반환값이 console이 나와야함
function sayhello(name,age) {
  return `Hello ${name} you are ${age} years old`;
}
const greetminju = sayhello("minju", 28)
 console. log(greetminju)  */

 /*
 const calculator = {
   plus: function(a,b) {
     return a + b;
   }
 }
   const plus = calculator.plus(5,5)
   console.log(plus)
   //console, calculator 모두 객체, log()인자를 가지는 함수
   //plus()도 2개의 인자를 가지는 함, */

   /* 자바스트립트에서 HTML 수정 가능함
   Html을 DOM 객체로 바꿈.
   HTML에는 title이 This works!로 되어있는데 JS에서 DOM객체로 바꿈
   const title = document.querySelector("#title");
   title.innerHTML = "Hi! From JS";
   title.style.color= "red";
   document.title = "I own you now"; */

   /*click하면 색이 바뀜
   const title = document.querySelector("#title");
    function handleClick() {
       title.style.color = "blue";
    }
    title.addEventListener("click",handleClick)  */

   /* if-else   if는 언제나 참이여야함.
   if("10" === 10) {
     console.log ("hi");
   } else if ("10" === "10") {
     console.log("lalala");
   } */
   /* &&는 AND 의미. ㅣㅣ은 OR표 의미*/

   /*const age = prompt("How old are you");
   console.log(age);*/

   /* css가 하는일 JS도 할 수 있음
      근데 이거 작동 안됨.... 뭐가 문제일까...?
   const title = document.querySelector("#title");

   const BASE_COLOR = "#3498db";
   const OTHER_COLOR= "#ecf0f1";

    function handleClick() {
       const currnetColor = title.style.color;
       if (currentColor === BASE_COLOR) {
         title.style.color= OTHER_COLOR;
       }
       else {
         title.style.color = BASE_COLOR;
       }
    }

    function init(){
      title.style.color = BASE_COLOR;
       title.addEventListener("click",handleClick);
    }
   init(); */
