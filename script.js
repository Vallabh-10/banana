const quizDB = [
{
	question : "I am good at clearly communicating my thoughts and feelings.*",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "ans1"
},

{
	question : "I listen carefully when other people talk.*",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "ans1"
},

{
	question : "I take initiative and am highly motivated, even when I don’t feel like doing something.*",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "Usually"
},

{
	question : "When I am under pressure, I am able to think clearly and stay focused",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "Usually"
},

{
	question : "I am generally guided by my goals and values rather than the goals and values of others.*",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "Usually"
},

{
	question : "I recognize when I am feeling stressed, and I have go-to ways to calm myself down.*",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "Usually"
},

{
	question : "I recognize when I am feeling angry, and I am able to avoid losing my temper or lashing out.*",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "Usually"
},

{
	question : "I am good at seeing things from another person's viewpoint.*",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "Usually"
},

{
	question : "I am confident voicing a viewpoint about what is right, even if it is an unpopular opinion.*",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "Usually"
},

{
	question : "I am good at adapting and mixing with a variety of people.*",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "Usually"
},

{
	question : "I can tell if a team of people are not getting along with each other.",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "Usually"
},

{
	question : "When I feel anxious, I usually know the reason(s).*",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "Usually"
},

{
	question : "I am able to avoid letting stressful situations from work/school affect my personal life.*",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "Usually"
},

{
	question : "I am good at reconciling differences with other people.*",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "Usually"
},

{
	question : "I am aware of my personal strengths and limitations.*",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "Usually"
},

{
	question : "If I am not skilled at something yet, I stay positive and work even harder.*",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "Usually"
},

{
	question : "I try to understand how other people feel and think.*",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "Usually"
},

{
	question : "I work very well with a group or team.*",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "Usually"
},

{
	question : "I achieve a healthy balance of getting work/tasks done while also prioritizing relationships.*",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "Usually"
},
{
	question : "I am comfortable owning my mistakes.*",
	a: "Usually",
	b: "sometimes",
	c: "rarely",
	d: "never",
	ans: "Usually"
}
];


const question = document.querySelector('.question');
const option1  = document.querySelector('#option1');
const option2  = document.querySelector('#option2');
const option3  = document.querySelector('#option3');
const option4  = document.querySelector('#option4');
const submit   = document.querySelector('#submit');
const answers  = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
const finalscore =document.querySelector('#finalscore');
const box=      document.querySelector('.box');
const innerdiv=document.querySelectorAll('.inner-div')
let questioncount=0;
let score=0;

const loadQuestion = () => {
	 const questionlist= quizDB[questioncount];

	 question.innerText = questionlist.question;
	 option1.innerText = questionlist.a;
	 option2.innerText = questionlist.b;
	 option3.innerText = questionlist.c;
	 option4.innerText = questionlist.d;

}

loadQuestion();

const getCheckedAnswer = () =>{
	let answer;
	answers.forEach((currAnsElement) =>{
		if(currAnsElement.checked)
		{
			answer=currAnsElement.id;
		}
	});
	return answer;
}

submit.addEventListener('click', () => {
     const checkedAnswer= getCheckedAnswer();
     console.log(checkedAnswer);
     if(checkedAnswer=="ans1")
     {
     	score=score+3;
     }
     if(checkedAnswer=="ans2")
     {
     	score=score+2;
     }
     if(checkedAnswer=="ans3")
     {
     	score=score+1;
     }
     console.log(score);
     questioncount++;

      if(questioncount<quizDB.length)
      {
      	loadQuestion();
      }
      else
      {
      	if(score>40 )
      	{   
             finalscore.innerHTML="You’ve built a Excellent EQ – keep going!";
      		showScore.classList.remove('scoreArea');


         }

         if(score<40 && score>25 )
      	{   
             finalscore.innerHTML="You’ve built a strong EQ – keep going!";
      		showScore.classList.remove('scoreArea');


         }
          if(score<25 )
      	{   
             finalscore.innerHTML="You have a poor EQ , But guess what you can definitely improve.";
      		showScore.classList.remove('scoreArea');
      		


         }
      	
      }



} );










