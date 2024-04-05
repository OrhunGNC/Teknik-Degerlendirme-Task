import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { MdTimer } from "react-icons/md";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [seenQuestions, setSeenQuestions] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userrId, setUserId] = useState(1);
  const [userAnswers, setUserAnswers] = useState({});
  const [timer, setTimer] = useState(30);
  const [showNext, setShowNext] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [buttonClickedA, setButtonClickedA] = useState(false);
  const [buttonClickedB, setButtonClickedB] = useState(false);
  const [buttonClickedC, setButtonClickedC] = useState(false);
  const [buttonClickedD, setButtonClickedD] = useState(false);

  const handleButtonClickA = () => {
    if (buttonClickedB || buttonClickedC || buttonClickedD) {
      setButtonClickedA(true);
      setButtonClickedB(false);
      setButtonClickedC(false);
      setButtonClickedD(false);
    } else if (buttonClickedA) {
      setButtonClickedA(false);
    } else {
      setButtonClickedA(true);
    }
  };
  const handleButtonClickB = () => {
    if (buttonClickedA || buttonClickedC || buttonClickedD) {
      setButtonClickedA(false);
      setButtonClickedB(true);
      setButtonClickedC(false);
      setButtonClickedD(false);
    } else if (buttonClickedB) {
      setButtonClickedB(false);
    } else {
      setButtonClickedB(true);
    }
  };
  const handleButtonClickC = () => {
    if (buttonClickedB || buttonClickedA || buttonClickedD) {
      setButtonClickedA(false);
      setButtonClickedB(false);
      setButtonClickedC(true);
      setButtonClickedD(false);
    } else if (buttonClickedC) {
      setButtonClickedC(false);
    } else {
      setButtonClickedC(true);
    }
  };
  const handleButtonClickD = () => {
    if (buttonClickedB || buttonClickedC || buttonClickedA) {
      setButtonClickedA(false);
      setButtonClickedB(false);
      setButtonClickedC(false);
      setButtonClickedD(true);
    } else if (buttonClickedD) {
      setButtonClickedD(false);
    } else {
      setButtonClickedD(true);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
      if (timer == 0 && currentIndex <= 36) {

        setShowNext(false);
        handleNextQuestion();
        
      }
      else if(timer>20 && timer<=32 && currentIndex<=36){
        setShowNext(false);
      }
      else if (timer <= 20 && currentIndex <= 36) {
        setShowNext(true);
      }
    };
  }, [timer]);
  useEffect(()=>{
    setShowNext(false);
  },[currentIndex])

  const handleAnswer = (option, bodyPart) => {
    const updatedQuestions = { ...seenQuestions };
    const updatedAnswers = { ...userAnswers };
    updatedQuestions[currentIndex] = questions[currentIndex];
    if(updatedAnswers[currentIndex]==bodyPart){
      setSeenQuestions(updatedQuestions)
      updatedAnswers[currentIndex]="Not Selected";
      setUserAnswers(updatedAnswers);
    }
    else{
      updatedAnswers[currentIndex] = bodyPart;
      setUserAnswers(updatedAnswers);
      setSeenQuestions(updatedQuestions);
    }
    
  };

  const handleNextQuestion = () => {
    console.log(currentIndex)
    setTimer(30);
    
    if(!buttonClickedA && !buttonClickedB && !buttonClickedC && !buttonClickedD){
      const updatedQuestions={...seenQuestions};
      const updatedAnswers = {...userAnswers};
      updatedQuestions[currentIndex] = questions[currentIndex];
      updatedAnswers[currentIndex]='Not Selected';
      setSeenQuestions(updatedQuestions);
      setUserAnswers(updatedAnswers);
    }
    setCurrentIndex((prevIndex) => prevIndex + 4);
    setUserId((prevIndex) => prevIndex + 1);

    setButtonClickedA(false);
    setButtonClickedB(false);
    setButtonClickedC(false);
    setButtonClickedD(false);
    setShowNext(false);
    setIsClicked(false);
  };


  return (
    <div className="container" style={{marginTop:'5%'}}>
      {currentIndex <= 36 && (
      <Card style={{width:'100%',textAlign:'center'}}>
      <Card.Header><img style={{width:'60px'}} src="/img/quiz.png" alt="Quiz App"></img></Card.Header>
      <Card.Body >
        <Card.Title>Question {currentIndex === 0 ? 1 : Math.floor(currentIndex / 4) + 1}</Card.Title>
        <Card.Text style={{fontWeight:'bold',marginTop:'2%',marginBottom:'3.5%',fontSize:'x-large'}}>
        {questions[currentIndex ===0 ? currentIndex: currentIndex-3]?.title}?
        
        </Card.Text>
        <div className="row">
          <div className="col-12" >
          <button
                className={buttonClickedA ? "btn btn-primary button-clicked" : "btn btn-primary"}
                style={{
                  borderRadius: "15px",
                  border: "1px solid transparent",
                  backgroundColor:'blue',
                  color: "white",
                  marginBottom: "3%",
                  height: "40px",
                  boxShadow:'0px 5px 15px black'
                }}
                disabled={!showNext}
                onClick={() => {
                  handleAnswer("A", questions[currentIndex]?.body.substring(0,60));
                  handleButtonClickA();
                }}
              >
                A - {questions[currentIndex]?.body.substring(0,60)}
              </button>
          </div>
          <div className="col-12">
          <button
                className={buttonClickedB ? "btn btn-primary button-clicked" : "btn btn-primary"}
                style={{
                  borderRadius: "15px",
                  border: "1px solid transparent",
                  backgroundColor: "blue",
                  color: "white",
                  marginBottom: "3%",
                  height: "40px",
                  boxShadow:'0px 5px 15px black'
                }}
                disabled={!showNext}
                onClick={() => {
                  handleAnswer("B", questions[currentIndex + 1]?.body.substring(0,60));
                  handleButtonClickB();
                }}
              >
                B - {questions[currentIndex + 1]?.body.substring(0,60)}
              </button>
          </div>
          <div className="col-12">
          <button
                className={buttonClickedC ? "btn btn-primary button-clicked" : "btn btn-primary"}
                style={{
                  borderRadius: "15px",
                  border: "1px solid transparent",
                  backgroundColor: "blue",
                  color: "white",
                  marginBottom: "3%",
                  height: "40px",
                  boxShadow:'0px 5px 15px black'
                }}
                disabled={!showNext}
                onClick={() => {
                  handleAnswer("C", questions[currentIndex + 2]?.body.substring(0,60));
                  handleButtonClickC();
                }}
              >
                C - {questions[currentIndex + 2]?.body.substring(0,60)}
              </button>
          </div>
          <div className="col-12">
          <button
                className={buttonClickedD ? "btn btn-primary button-clicked" : "btn btn-primary"}
                style={{
                  borderRadius: "15px",
                  border: "1px solid transparent",
                  backgroundColor: "blue",
                  color: "white",
                  marginBottom: "3%",
                  height: "40px",
                  boxShadow:'0px 5px 15px black'
                }}
                disabled={!showNext}
                onClick={() => {
                  handleAnswer("D", questions[currentIndex + 3]?.body.substring(0,60));
                  handleButtonClickD();
                }}
              >
                D - {questions[currentIndex + 3]?.body.substring(0,60)}
              </button>
          </div>

        </div>
        
              
              
              
      </Card.Body>
      {showNext && (
        <div className="row">
          <div className="col-12">
          <button
              style={{
                width: "15%",
                borderRadius: "15px",
                border: "1px solid black",
                backgroundColor: "green",
                color: "white",
                marginBottom: "3%",
                height: "max-content",
                textAlign:'center',
              }}
              onClick={()=>{setIsClicked(true);handleNextQuestion()}}
              disabled={!showNext}
              className="next-button"
            >
              Next Question
            </button>
          </div>

        </div>
            
          )}
          <p style={{fontSize:'x-large',textAlign:'center'}}><MdTimer  style={{marginBottom:'0.3%'}}/> {timer}</p>
    </Card>
      )}
      {currentIndex >= 37 && (
        <div className="row">
          <div className="col-12 col-md-12">
            
          <h2 style={{marginBottom:'3%'}}>Quiz Results</h2>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Question</th>
                <th scope="col">Your Answer</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(seenQuestions).map((index) => (
                <tr key={index}>
                  <th scope="row">{(index/4)+1}</th>
                  <td>{seenQuestions[index]?.title}</td>
                  <td>{userAnswers[index] || "Not Selected"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-success" style={{marginTop:'3%'}} onClick={()=>window.location.reload()}>If you want to take quiz again click here</button>
        </div>
        </div>
        
      )}
      
    </div>
  );
};

export default App;
