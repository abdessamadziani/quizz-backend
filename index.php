<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">

    <title>Document</title>
</head>
<body >
    <nav >
        <h1 class="logo">quizz</h1>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            
        </ul>
    </nav>
    <div id="particles-js" >
        <div>
            <input class="tt" type="text" placeholder="Enter your Name">
            <a href="#"><button class="start">Get Start</button></a>
        </div>
      
    </div>

    <div class="rules">
        <h2>the Rules</h2>
        <ol>
            <li>1 - You will have only 30 seconds for each question.</li>
            <li>2 - You can't select any option once time goes off.</li>
            <li>3 - You can't exit from the Quiz while you're playing.</li>
            <li>4 - Once you select your answer, you can reselect if the time not finished yet.</li>
            <li>5 - You'll get  your points based of your correct answers. </li>
        </ol>
    </div>
    <a href="home.php"><button class="btn-go">Go</button></a>


 <script>
let btn_start=document.querySelector(".start")
let input=document.querySelector(".tt")
let card=document.querySelector(".rules")
let btn_go=document.querySelector(".btn-go")

    btn_start.onclick=()=>
{
   document.cookie="name="+document.querySelector('.tt').value;
   btn_start.style.display="none"
   input.style.display="none"
   card.style.visibility="visible"
   btn_go.style.display="block"
  
}
 </script>

    <script src="./particles.js"></script>
    <script src="./app.js"></script> 
    <!-- <script src="main.js"></script> -->

</body>
</html>