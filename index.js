"use strict"
let questionIndex = 0;
let score = 0;

function renderLandingPage(){
    $("#root").html(`<header role="banner">
    <div class="col-4">
      <a href="index.html">
        <img class="logo" src=" disneyIcon.png" alt="disney icon"/>
      </a>
    </div>
    <div class="col-8">
      <ul>
        <li>Question: <span class="questionNumber">0</span>/10</li>
        <li>Score: <span class="score">0</span></li>
      </ul>
    </div>
  </header>
  <main role="main">
    <div class="beginQuiz">
      <h1>Are you a Disney Master?</h1>
      <button type="button" class="startButton">Let the Magic Begin!</button>
    </div>
    <div class="questionAnswerForm"></div>
  </main>`)
}


function setUpQuiz (){
    renderLandingPage ()
    handleLandingPage()
}
$(setUpQuiz)

function renderQuestionPage(){
    $("#root").html(`<header role="banner">
    <div class="col-4">
      <a href="index.html">
        <img class="logo" src=" disneyIcon.png" alt="disney icon"/>
      </a>
    </div>
    <div class="col-8">
      <ul>
        <li>Question: <span class="questionNumber">0</span>/10</li>
        <li>Score: <span class="score">0</span></li>
      </ul>
    </div>
  </header>
  <main role="main">
      <div class="beginQuiz">
        <h1>${STORE [questionIndex].question} </h1>
      </div>
      <form class="questionAnswerForm">
          <label for= "input1" >Disney Answer Selections</label>
          <input id= "input1" type= "radio" name= "answer" ></input>

          <label for= "input2" >Disney Answer Selections</label>
          <input id= "input2" type= "radio" name= "answer" ></input>

          <label for= "input3" >Disney Answer Selections</label>
          <input id= "input3" type= "radio" name= "answer" ></input>

          <label for= "input4" >Disney Answer Selections</label>
          <input id= "input4" type= "radio" name= "answer" ></input>

          <br>

          <button type= "button"> Next </button>
      </form>
      
    </main>`)
}



function handleFeedbackPage(){
    $('form').unbind('submit')
    $('form').submit(function(){
        questionIndex ++
        renderQuestionPage()
        handleQuestionPage()
    })
}//change CSS to render 

function handleQuestionPage(){
    $('form').submit(function(){
        handleFeedbackPage()
    })

}


function handleLandingPage(){
    $(".startButton").click(function (){
        renderQuestionPage()
        handleQuestionPage()
        
    })
}

function renderFinalPage(){
    $("#root").html(`<header role="banner">
    <div class="col-4">
      <a href="index.html">
        <img class="logo" src=" disneyIcon.png" alt="disney icon"/>
      </a>
    </div>
    <div class="col-8">
      <ul>
        <li>Question: <span class="questionNumber">0</span>/10</li>
        <li>Score: <span class="score">0</span></li>
      </ul>
    </div>
  </header>
  <main role="main">
          <div class="beginQuiz">
            <h1>Finish Page header/Score </h1>
            <h2>Results Message "Betterluck next time/ Great Job!"</h2>
            <button type="button" class="startButton">Reload quiz button</button>
          </div>
        </main>`)
}

//advancing from question to question