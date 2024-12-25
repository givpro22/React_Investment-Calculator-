import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 12,
    duration: 10,
  })
  

  function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    });
  }

  const inputIsValid = userInput.duration >= 1


  return (
    <>
    <Header />
    <UserInput userInput={userInput} handleChange1={handleChange}/>
    {!inputIsValid && <p className="center">올바른 값 입력 바람람</p>}
    {inputIsValid && <Results userInput={userInput}/>}
    
    </>
  )
}

export default App
