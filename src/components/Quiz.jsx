import { useState } from 'react'
import { quiz } from '../questionfile'



let countP = 0
let countN = 0

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [result, setResult] = useState({
    //score: 0,
   
    correctAnswers: 0,
    wrongAnswers: 0,
  })

  const { questions } = quiz
  const { question, choices, correctAnswer } = questions[activeQuestion]
 
  const onClickNext = () => {
   
   
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
           // score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== questions.length - 1) {
    
     
      setActiveQuestion((prev) => prev + 1)
    } else {
      
      setActiveQuestion(0)
      setShowResult(true)
    }
  }

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)


    countP++
    console.log(countP)
  
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }

   /*
    
    if ( countP <= 1 &&  answer === correctAnswer && questions[0] ) {
     
    
      setSelectedAnswer(true)
      x++
      console.log('nbreClick::' + x)
      document.getElementById(answer).setAttribute('style','background-color:green;color:white;')
      // In this place i create icon(i) tag
      let icontrue = document.createElement('i')
      icontrue.classList.add('material-icons')
      icontrue.innerHTML='check_circle'

      document.getElementById(answer).appendChild(icontrue)

    } else if ( countP <= 1 && answer !== correctAnswer && questions[0]   ) {
      
      setSelectedAnswer(false)
      x++
      console.log('nbreClick::' + x)
      let Trueresult = correctAnswer
      document.getElementById(answer).setAttribute('style','background-color:red;color:white;')
               document.getElementById(Trueresult).setAttribute('style','background-color:green;color:white')
              
               let iconfalse = document.createElement('i')
               iconfalse.classList.add('material-icons')
               iconfalse.innerHTML='clear'
               document.getElementById(answer).appendChild(iconfalse)

               let icontrue = document.createElement('i')
               icontrue.classList.add('material-icons')
               icontrue.innerHTML='check_circle'
               document.getElementById(Trueresult).appendChild(icontrue)
              
                        
    }else if ( x === 1 && answer === correctAnswer &&  questions[1]) {
      
      x++
       console.log('nbreClick::' + x)
       setSelectedAnswer(true)
       document.getElementById(answer).setAttribute('style','background-color:green;color:white;')
       // In this place i create icon(i) tag
       let icontrue = document.createElement('i')
       icontrue.classList.add('material-icons')
       icontrue.innerHTML='check_circle'
 
       document.getElementById(answer).appendChild(icontrue)

    }else if ( x === 2 && answer === correctAnswer &&  questions[2]) {
      
      x++
       console.log('nbreClick::' + x)
       setSelectedAnswer(true)
       document.getElementById(answer).setAttribute('style','background-color:green;color:white;')
       // In this place i create icon(i) tag
       let icontrue = document.createElement('i')
       icontrue.classList.add('material-icons')
       icontrue.innerHTML='check_circle'
 
       document.getElementById(answer).appendChild(icontrue)

    }else if ( x === 3 && answer === correctAnswer &&  questions[3]) {
      
      x++
       console.log('nbreClick::' + x)
       setSelectedAnswer(true)
       document.getElementById(answer).setAttribute('style','background-color:green;color:white;')
       // In this place i create icon(i) tag
       let icontrue = document.createElement('i')
       icontrue.classList.add('material-icons')
       icontrue.innerHTML='check_circle'
 
       document.getElementById(answer).appendChild(icontrue)

       
}else if ( x === 1 && answer !== correctAnswer && question === questions[1] ) {
    
      x++
      console.log('nbreClick::' + x)
      setSelectedAnswer(false)
      let Trueresult = correctAnswer
      console.log(document.getElementById(answer))
      document.getElementById(answer).setAttribute('style','background-color:red;color:white;')
               document.getElementById(Trueresult).setAttribute('style','background-color:green;color:white')
              
               let iconfalse = document.createElement('i')
               iconfalse.classList.add('material-icons')
               iconfalse.innerHTML='clear'
               document.getElementById(answer).appendChild(iconfalse)

               let icontrue = document.createElement('i')
               icontrue.classList.add('material-icons')
               icontrue.innerHTML='check_circle'
               document.getElementById(Trueresult).appendChild(icontrue)
      
    } else {
      //setSelectedAnswer(false)
    }*/
    
  }

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <div>
          <img style={{marginTop:'-100px'}} alt='logo' className='Logo' src="https://raw.githubusercontent.com/FranelTOVIDJALE/reactImgs/8d4f0f2d3975634457a49fc9a35469cc4a56c420/LogoImage.svg" />
          </div>
          <h3>{question}</h3>
          <ul className='blocP'>
            {choices.map((answer, index) => (
              < li id={answer}
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index  ? 'red'
                : null
                }
                >
                {answer}
              </ li >
            ))}
          </ul>
          <div className="flex-right">
       {countP >=1 || countN >= 1 ?   <button 
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>:'Future_Dev🤞🤞'  } 
          </div>
        </div>
      ) : (
        <div style={{textAlign:'center',color:'#6066D0'}} className="result">

    <img style={{margin:'auto'}} alt='logo' src='https://raw.githubusercontent.com/FranelTOVIDJALE/reactImgs/8d4f0f2d3975634457a49fc9a35469cc4a56c420/SuccesImage.svg' />
           <br/>
          <h3 style={{fontSize:'30px'}} >Results</h3>
         
          <p >  
          You got <span style={{fontSize:'28px',color:'#6FCF97'}} > {result.correctAnswers}</span> correct(s) answers  
          </p> <br/>
         <button
          style={{background:'white',float:'none',marginLeft:'12%',
             width:'35%',color:'#6066D0',border:'solid 2px #6066D0',
             fontSize:'18px'
        }}
         ><a style={{textDecorationLine:'none'}} href="http://localhost:3000/"> Try again</a></button>
        </div>
      )}
    </div>
  )
}

export default Quiz