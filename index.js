"use strict"
let questionIndex = 0;
let score = 0;

function renderLandingPage(){
    $("#root").html(`<header role="banner">
    <div class="col-4">
      <a href="index.html">
        
      </a>
    </div>
    <div class="col-8">
      <ul>
        <li>Question: <span class="questionNumber">${questionIndex}</span>/5</li>
        <li>Score: <span class="score"> ${score}</span></li>
      </ul>
    </div>
  </header>
  <main role="main">
    <div class="beginQuiz">
    <div>
      <h1>Are you a Gentleman?</h1>
    </div>
      <button type="button" class="startButton"> Begin!</button>
    </div>
    <div class="questionAnswerForm"></div>
  </main>`)
}


function setUpQuiz (){
    questionIndex = 0;
    score = 0;
    renderLandingPage ()
    handleLandingPage()
}
$(setUpQuiz)

function renderQuestionPage(){
    $("#root").html(`<header role="banner">
    <div class="col-4">
      <a href="index.html">
        
      </a>
    </div>
    <div class="col-8">
      <ul>
        <li>Question: <span class="questionNumber">${questionIndex + 1}</span>/5</li>
        <li>Score: <span class="score">${score}</span></li>
      </ul>
    </div>
  </header>
  <main role="main">
      <div class="beginQuiz">
        <h1>${STORE [questionIndex].question} </h1>
      </div>
      <form class="questionAnswerForm">
        <div class="questionStyle">
            <label for= "input1" >${STORE [questionIndex].answers [0]}</label>
            <input id= "input1" type= "radio" value = "${STORE [questionIndex].answers [0]}" name= "answer" class=" ${STORE[questionIndex].correctAnswer===STORE[questionIndex].answers[0] ? 'correct-answer' : '' }" required></input> 
        </div>
        <div class="questionStyle">
          <label for= "input2" >${STORE [questionIndex].answers [1]}</label>
          <input id= "input2" type= "radio" value = "${STORE [questionIndex].answers [1]}" name= "answer" class=" ${STORE[questionIndex].correctAnswer===STORE[questionIndex].answers[1] ? 'correct-answer' : '' }" required></input>
        </div>
    
        <div class="questionStyle">
          <label for= "input3" >${STORE [questionIndex].answers [2]}</label>
          <input id= "input3" type= "radio" value = "${STORE [questionIndex].answers [2]}" name= "answer" class=" ${STORE[questionIndex].correctAnswer===STORE[questionIndex].answers[2] ? 'correct-answer' : '' }" required></input>
        </div>

        <div class="questionStyle">
          <label for= "input4" >${STORE [questionIndex].answers [3]}</label>
          <input id= "input4" type= "radio" value = "${STORE [questionIndex].answers [3]}" name= "answer" class=" ${STORE[questionIndex].correctAnswer===STORE[questionIndex].answers[3] ? 'correct-answer' : '' }" required></input>
        </div>

          <br>

          <button type= "submit"> Next </button>
      </form>
      
    </main>`)
}



function handleFeedbackPage(){
    event.preventDefault();
    $('form').unbind('submit')
    $('form').submit(function(){
        console.log (questionIndex);
        if (questionIndex >= STORE.length - 1){
            renderFinalPage();
            //scoreResults();
            console.log('renderFinalPAge');
            handleFinalPage();
        } 
        else{
            questionIndex ++
            renderQuestionPage()
            handleQuestionPage()
        }
    })
}

function handleQuestionPage(){
    event.preventDefault();
    $('form').submit(function(){
        handleFeedbackPage()
        let selected = $('input:checked');
        let answer = selected.val();
        let correctAnswer = `${STORE[questionIndex].correctAnswer}`;
        if (answer === correctAnswer) {
          selected.parent().addClass('correct');
          score++
        } 
        
        else {
          selected.parent().addClass('wrong');
          $('.correct-answer').parent().addClass('correct');
        }
    })

}


function handleLandingPage(){
    $(".startButton").click(function (){
        renderQuestionPage()
        handleQuestionPage()
        
    })
}

function renderFinalPage(){
    if (score >= 5) {
    $("#root").html(`<header role="banner">
    <div class="col-4">
      <a href="index.html">
        
      </a>
    </div>
    <div class="col-8">
      <ul>
        <li>Question: <span class="questionNumber">${questionIndex + 1}</span>/10</li>
        <li>Score: <span class="score">${score}</span></li>
      </ul>
    </div>
  </header>
  <main role="main">
      <div class="beginQuiz">
        <h1>You Are a Gentleman! </h1>
         <p>You got ${score} / 5</p>
         <p>Go on and run the Jungle!</p>
         <button type="button" class="startButton">Revisit the Magic</button>
         </div>
    </main>`);
    }   
    else if (score < 4 && score >= 3) {
    $("#root").html(`<header role="banner">
    <div class="col-4">
      <a href="index.html">
        
      </a>
    </div>
    <div class="col-8">
      <ul>
        <li>Question: <span class="questionNumber">${questionIndex + 1}</span>/10</li>
        <li>Score: <span class="score">${score}</span></li>
      </ul>
    </div>
  </header>
  <main role="main">
      <div class="beginQuiz">
        <h1>You're almost there!</h1>
         <p>You got ${score} / 5</p>
         <p>You might need to work on a few manners!</p>
         <button type="button" class="startButton">Revisit the Magic</button>
         </div>
   </main>`);
    }   
    else {
    $("#root").html(`<header role="banner">
    <div class="col-4">
      <a href="index.html">
        <img class="logo" src=" disneyIcon.png" alt="disney icon"/>
      </a>
    </div>
    <div class="col-8">
      <ul>
        <li>Question: <span class="questionNumber">${questionIndex + 1}</span>/10</li>
        <li>Score: <span class="score">${score}</span></li>
      </ul>
    </div>
  </header>
  <main role="main">
      <div class="beginQuiz">
        <h1>You're....hmmmmm</h1> 
        <p>You got ${score} / 5</p>
        <p>Get out of here</p>
        <button type="button" class="startButton">Revisit the Magic</button>
        </div>
   </main>`);
    }
  }


/*function renderFinalPage(){
    $("#root").html(`<header role="banner">
    <div class="col-4">
      <a href="index.html">
        <img class="logo" src=" disneyIcon.png" alt="disney icon"/>
      </a>
    </div>
    <div class="col-8">
      <ul>
        <li>Question: <span class="questionNumber">${questionIndex + 1}</span>/10</li>
        <li>Score: <span class="score">${score}</span></li>
      </ul>
    </div>
  </header>
  <main role="main">
          <div class="beginQuiz">
            <h1>Finish Page header/Score </h1>
            <h2>Results Message "Better luck next time/ Great Job!"</h2>
            <button type="button" class="startButton">Revisit the Magic</button>
          </div>
        </main>`)

}*/

function handleFinalPage(){
    $(".startButton").click(function (){
        setUpQuiz()
    })
}



//advancing from question to question (update values from store given current question index)
//put score in html. put answer in html
//function for incrementing score (1. if user is correct 2. if user is wrong)
//feedback page (changing CSS to show correct and right/wrong)
//function for restarting quiz OK
//input:checked inside selector .val to get value of answer compared to submitted