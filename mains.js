

let spans_container=document.querySelector(".radios")
let  question_area=document.querySelector(".question-area")
let  suggestions_area=document.querySelector(".suggestions-area")
let btn_Next=document.querySelector(".btn")
let res_area=document.querySelector(".reselt_area")
let footer=document.querySelector(".footer")
let count_down_element=document.querySelector(".taiming")
let progress_bar=document.querySelector(".child")
let container_bar=document.querySelector(".container")
let radios=document.getElementsByName("rbtn")
let counter
let current_question
let array=[]


let name_txt=document.createElement("h2")

let cookie_name=document.cookie.split("=")
name_txt=document.createTextNode("Welcome "+cookie_name[1])
document.getElementById("txt_val").appendChild(name_txt)




let current_index=0
let right_questions_count=0
let right_answer_q
let r_q=[]


// const xhr = new XMLHttpRequest();
// xhr.open('POST', 'rightAnswers.php', true);
// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// xhr.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       right_answer_q=JSON.parse(this.responseText)

//          console.log( "this is right answers"+right_answer_q[9])
//        // finalRes(q_count, this.responseText);
//     }
// }
// xhr.send(`array=${encodeURIComponent(JSON.stringify(answers_chosen))}`);




function getQuestions()
{


  let  myrequest=new XMLHttpRequest()
  myrequest.onreadystatechange=function()
  {
    if(this.readyState===4 && this.status===200)
    {
        let question_object=JSON.parse(this.responseText)
        console.log(question_object)

        let nb_questions=question_object.length

        //let all_questions = question_object.sort(()=>Math.random() - 0.5);
  
        createBullets(nb_questions)
        addQuestion(question_object[current_index],nb_questions)
        countDown(30,nb_questions)
        btn_Next.style.display="none"

       for(let i=0;i<radios.length;i++)
       {
        document.addEventListener('change',()=>{
          if(radios[i].checked)
         btn_Next.style.display="block"

         })
       }



       const xhr = new XMLHttpRequest();
       xhr.open('POST', 'rightAnswers.php', true);
       xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
       xhr.onreadystatechange = function () {
           if (this.readyState == 4 && this.status == 200) {
             r_q=JSON.parse(this.responseText)
       
                console.log( "this is right answers"+r_q[current_index])
              // finalRes(q_count, this.responseText);
  
             //  right_answer_q=r_q[current_index];
             
  
           }
       }
      xhr.send();


    

        btn_Next.onclick=()=>{

          right_answer_q=r_q[current_index];

                console.log( "this is right answer  "+r_q[current_index])
                console.log(current_index)



         //console.log( "this is right answers"+right_answer_q[0])

          btn_Next.style.display="none"
         // let right_answer_q=question_object[current_index]
   
          // current_index++
          clearInterval(counter)
          countDown(30,nb_questions)
           current_question=question_object[current_index].title
           console.log("this is the cq:::: "+current_question)
       
     checkAnswer(right_answer_q,nb_questions,current_question)

              current_index++

          if(current_index<nb_questions)
          {
            question_area.innerHTML=""
            suggestions_area.innerHTML=""
          }
         


         addQuestion(question_object[current_index],nb_questions)
          handleBullets()
          // finalRes(nb_questions)
          progress_bar.remove()
          let progress_bar2=document.createElement("div")
          container_bar.appendChild(progress_bar2)
          progress_bar2.setAttribute("class","child")
          //progress_bar.setAttribute("id","play_animation")

          //console.log(question_object[current_index].right_answer)
          showCorrectAnswers(nb_questions);
        }

    }
  }


  myrequest.open('GET','operations.php',true)
  myrequest.send()

}

function createBullets(num)
{
    for(let i=0;i<num;i++)
    {
        let span=document.createElement("span")
        span.className="span"
        spans_container.appendChild(span)
        if(i===0)
        span.classList.add("on")


    }

}

 function addQuestion(obj,q_count)
{
  res_area.style.display="none"

//  console.log(obj.title)
if(current_index<q_count)
{
 let question_title=document.createElement("h3")
 question_title.setAttribute("class","child")
 let question_text=document.createTextNode(obj['title'])
 //console.log(question_text)
   question_title.appendChild(question_text)
  question_area.appendChild(question_title)

   for(let i=1;i<=4;i++)
   {
    let div_suggestion=document.createElement("div")
    //div_suggestion.className="suggestion"
    div_suggestion.classList.add("suggestion","rlt-effect")
    let radio=document.createElement("input")
    let label=document.createElement("label")

    radio.name="rbtn"
    radio.type="radio"
    radio.id="answer_"+i
    radio.setAttribute("data",obj[`answer_${i}`])

    label.setAttribute("for",`answer_${i}`)
    let label_text=document.createTextNode(obj[`answer_${i}`])
    label.appendChild(label_text)
    div_suggestion.appendChild(radio)
    div_suggestion.appendChild(label)
    suggestions_area.appendChild(div_suggestion)

   }
  }
}

let answers_chosen=[]

function checkAnswer(r_answer,q_count,question)
{
   let chosen_answer
   

  for(let i=0;i<radios.length;i++)
  {
   
     if(radios[i].checked)
        {
        chosen_answer=radios[i].getAttribute("data")
        answers_chosen.push(chosen_answer);
        nb_answers_chosen++

        }
     
  }
 
  if(chosen_answer === r_answer)
  {
    

    // array.push("r",r_answer)
     console.log("good job")
     //right_questions_count++
      console.log("question"+question)
   
  }
  else if(chosen_answer==undefined)
    {
      
      res_area.innerHTML+=`<span style="display:block;color:blue; background-color:white;padding:10px;width:80%">${current_index+1}-${question}</span>`
      res_area.innerHTML+=`<span style="display:block;color:white; background-color:red; padding:10px;width:80%" >You didn't choose anything</span>`
      res_area.innerHTML+=`<span style="display:block;color:white; background-color:green;padding:10px;width:80% ">${r_answer}</span> <br><br>`
    }


    else
    {
      res_area.innerHTML+=`<span style=" display:block;color:blue; background-color:white;padding:10px;width:80%">${current_index+1}-${question}</span>`
      res_area.innerHTML+=`<span style="display:block;color:white; background-color:red;padding:10px;width:80%">${chosen_answer}</span>`
      res_area.innerHTML+=`<span style="display:block;color:white; background-color:green;padding:10px;width:80% ">${r_answer}</span> <br><br>`
    }

   

}

function handleBullets()
{
  let bullets=document.querySelectorAll(".radios span")
  let arrayOfBullets=Array.from(bullets)
  arrayOfBullets.forEach((span,index)=>{
    if(current_index===index)
        {
          span.classList.add("on")
        }
  })

}

function finalRes(q_count,right_questions_count)
{

 
  if(current_index===q_count)
  {
      //console.log( "the answers chosen are: "+answers_chosen)
    res_area.style.display="block"
    container_bar.remove()
    question_area.remove()
    suggestions_area.remove()
    btn_Next.remove()
    footer.remove()
    let h2=document.createElement("h2")
    h2.style.color="green"
    let txt=document.createTextNode("Quizz Finished")
    h2.appendChild(txt)
    h2.style.marginBottom="30px"
    res_area.prepend(h2)

    

    if(right_questions_count>5 && right_questions_count<q_count)
    {
      let div=document.createElement("div")
      let txt=`<span style="color:blue; font-size:20px;font-weight:bold;">Good Result</span> , your result is ${right_questions_count} from ${q_count}`
      div.innerHTML=txt
      res_area.appendChild(div)

    }
    else if(right_questions_count===q_count)
    {
      let div=document.createElement("div")
      div.style.backgroundColor="grey"
      let txt=`<span style="color:green; font-size:20px;font-weight:bold;">Perfect</span> , All answers are true`
      div.innerHTML=txt
      res_area.appendChild(div)

    }
    else
    {   
      let div=document.createElement("div")
      div.style.backgroundColor="grey"
      let txt=`<span style="color:red; font-size:20px;font-weight:bold;">Bad</span> , you got ${right_questions_count} from ${q_count}` 
      div.innerHTML=txt
      res_area.appendChild(div)

    }

    for(let i=0;i<array.length;i++)
    {
      let h3=document.createElement("h3")
      h3.style.color="red"
      h3.innerText+=array[i]
      res_area.appendChild(h3)
    }


  }
}

function countDown(duration,q_count)
{
  if(current_index<q_count)
  {
     counter=setInterval(()=>{
      duration=duration<10 ?`0${duration}`:`${duration}`
      count_down_element.innerHTML=duration<10?duration+ " Second":duration+ " Seconds"



      if(--duration<0)
      {
        clearInterval(counter)
        btn_Next.click()

      }



    },1000)

  }


}



function showCorrectAnswers(q_count){
  if (current_index == q_count) {
       const xhr = new XMLHttpRequest();
    xhr.open('POST', 'checkAnswers.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText)
            finalRes(q_count, this.responseText);
        }
    }
    xhr.send(`array=${encodeURIComponent(JSON.stringify(answers_chosen))}`);
    // xhr.send(`nb_answers=${encodeURIComponent(JSON.stringify(nb_answers_chosen))}`);

    }
  }

  getQuestions()


  