var readlineSync = require("readline-sync");

var questions =[{
  question:"What is my name",
  answer:"Vishal"
},
                {
  question:"Where i live",
  answer:"Rajasthan"
},
{
  question:"Where i work",
  answer:"Pune"
},{
  question:"Who is my fav hero",
  answer:"RDJ"
},{
  question:"Who is my fav cricketer",
  answer:"Dhoni"
},
               ]
var finalscore=0
function checkanswer(question,answer){

  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase()==answer.toUpperCase()){
    console.log("Right Answer")
    finalscore+=1
  }
  else{
    console.log("wrong Answer")
  }
  console.log("current Score",finalscore)
}

function mainfunction(){
  console.log("Welcome to how much you know me")
  questions.forEach((item,index)=>{
    checkanswer(item.question,item.answer)
  })
   console.log("YAY! You Scored", finalscore);
}

mainfunction()