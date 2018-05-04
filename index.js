
'use strict';


const questionSet = [
  { 
    text: `What is the approximate diameter of the Earth?`,
    ans1: `11,627 mi`,
    ans2: `1,917 mi`, 
    ans3: `7,917 mi`, 
    ans4: `3,917 mi`
  }, 
  
  {
    text: `What amount of matter can be detected in the universe?`,
    ans1: `75%`, 
    ans2: `15%`, 
    ans3: `5%`, 
    ans4: `100%`
  }, 
  
  {
  
    text: `What is the approximate speed of light?`,
    ans1: `186,282 mi per/sec`, 
    ans2: `453,345 mi per/sec`, 
    ans3: `46,282 mi per/sec`, 
    ans4: `251,275 mi per/sec`
  }, 
  
  {
    text: `What is the largest planet in our solar system?`,
    ans1: `Jupiter`,
    ans2: `Mars`,
    ans3: `Earth`,
    ans4: `Sun`
  }, 
  
  {
    text: `What's the name for a chunck of space debris that is still in space?`,
    ans1: `Meteoroid`, 
    ans2: `Meteorite`, 
    ans3: `Meteor`, 
    ans4: `Asteroids`
  }, 
  
  {
  
    text: `What's the term for the point in the orbit of a planet or comet where it is nearest to the sun?`,
    ans1: `Perihelion`, 
    ans2: `Elongation`, 
    ans3: `Aphelion`, 
    ans4: `Occultation`
  },
  
  {
  
    text: `Between which two planets can we find the most asteroids in our solar system?`,
    ans1: `Uranus and Neptune`, 
    ans2: `Mars and Jupiter`, 
    ans3: `Saturn and Uranus`, 
    ans4: `Jupiter and Saturn`
  },
  
  {
  
    text: `Which of these planets does not have a satellite?`,
    ans1: `Neptune`, 
    ans2: `Jupiter`, 
    ans3: `Saturn`, 
    ans4: `Mercury`
  },
  
  {
  
    text: `What's the term for the point in the orbit of a planet or comet where it is farthest from the Earth?`,
    ans1: `Apogee`, 
    ans2: `Perigee`, 
    ans3: `Quadrature`, 
    ans4: `Conjunction`
  }, 
  
  {
  
    text: `Which of these planets is the smallest?`,
    ans1: `Earth`, 
    ans2: `Mercury`, 
    ans3: `Neptune`, 
    ans4: `Venus`
  }
];

const answers = [
  `7,917 mi`,
  `5%`,
  `186,282 miles per second`,
  `Jupiter`,
  `Meteoroid`,
  `Perihelion`,
  `Mars and Jupiter`,
  `Mercury`,
  `Apogee`,
  `Mercury`
];


let questionNum = 0;
let correctAnswerNum = 0;


function renderQuestions(){
  let current = questionSet[questionNum];
  if(questionNum === 10){
  feedBack();
}

else {
  
  
    $('.container').html(
    `
    <section id="questions" role="main">
     
    <h2>${current.text}</h2>
    <form>
      <fieldset>
      <legend>options to questions</legend>
        <ul>
        
          <li>
            <label>
              <input value="${current.ans1}" class="" type="radio" name="choice" role="button" id="${current.ans1}" required>
              <span>${current.ans1}</span>
            </label>
          </li>
          
          <li>
            <label>
              <input value="${current.ans2}" class="" type="radio" name="choice" role="button" id="${current.ans2}" required>
              <span>${current.ans2}</span>
            </label>
          </li>
          
          <li>
            <label>
              <input  value="${current.ans3}" class="" type="radio" name="choice" role="button" id="${current.ans3}" required>
              <span>${current.ans3}</span>
            </label>
          </li>
          
          <li>
            <label>
              <input value="${current.ans4}" class="" type="radio" name="choice" role="button" id="${current.ans4}" required>
              <span>${current.ans4}</span>
            </label>
          </li>
          
          </ul>
        <button id='js-submit' type="submit" class="buttons-style">Submit</button>
        </fieldset>
      </form>
      
      <div class="counters-locations">
        <ul class="center-list">
          <li class="counters">Question number ${questionNum+1}/10 </li>
          <li class="counters">Correct answer ${correctAnswerNum}/10 </li>
        </ul>
    
    
    </div>
  </section>
  
  `
  );
  
  runSubmit();
  }


}



function runStart(){
  $('#js-start').click(function(event){
    event.preventDefault();
    console.log('run');
    renderQuestions();
  });
}


function runSubmit() {
  $('form').on('submit', function(event){
    event.preventDefault();
    console.log('submit');
  
    let answer = $('input[name="choice"]:checked').val();
  
    checkAnswer(answer);
  
  
  });
}


function checkAnswer(answer){
  if(answer === answers[questionNum]){
      $('.container').html(`<h2>You got it right!<img src=""<h2>
      <button id='js-next' class="buttons-style">Next</button>
      `);
      correctAnswerNum++;
  }
  else {
    $('.container').html(`<h2>Looks like you got it wrong!<h2>
    <span>The correct answer is ${answers[questionNum]} </span>
    <button id='js-next' class="buttons-style">Next</button>
    `);
  }
  
  handleNextButton();
}

function handleNextButton(){
  $('#js-next').click(function(event){
  event.preventDefault();
  handleNextQuestion();
  
  
  });

}

function handleNextQuestion(){
  questionNum++;
  renderQuestions();

}

function feedBack(){
  $('.container').html(`
  <section id="results">
    <h2>You scored a ${correctAnswerNum}/10 right!</h2>
    <button id="restart" class="buttons-style">Restart</button>
  </section>`);
  console.log("feedBack")
  restart();
}

function restart(){
  $('#restart').click(function(event){
  event.preventDefault();
  console.log("restart");
  
  questionNum = 0;
  correctAnswerNum = 0;
  
  $('.container').html(`<h2>Press start for the fun to begin!</h2>
  <button id='js-start' class="buttons-style" type="button">Start</button>`);
  
  runStart();
  });

}



runStart();




