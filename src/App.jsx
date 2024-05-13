import Calculator from "./calculator";
import Table from "./table";
import { useState } from "react";


function App() {

    const [initialInvestment, setInitialInvestment] = useState(1000);
    const [annualInvestment, setAnnualInvestment] = useState(1200);
    const [expectedReturn, setExpectedReturn] = useState(6);
    const [duration, setDuration] = useState(10);

    const isInputValid = duration >= 1 ;

    function onChange(inputIdentifier, newValue) {
        switch(inputIdentifier){
            case "initial-investment":
                setInitialInvestment(()=>{return +newValue});
                break;
            case "annual-investment":
                setAnnualInvestment(()=>{return +newValue});
                break;
            case "expected-return":
                setExpectedReturn(()=>{return +newValue});
                break;
            case "duration":
                setDuration(()=>{return +newValue});
                break;
        }
    }

  return (
    <>
      <Calculator onInput = {onChange} initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} duration={duration}/>
      {isInputValid ? <Table initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} duration={duration}/>: <p className="center">Please enter a valid Duration </p>}
    </>
  )
}

export default App
