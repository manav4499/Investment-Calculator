
// import inputfiled from "./inputfield.jsx";
export default function Calculator({onInput,initialInvestment,annualInvestment,expectedReturn,duration}) {
    
    return (
        <>
            <div id="header">
                <img src="../investment-calculator-logo.png" alt="logo showing a money in the bag" />
                <h1>Investment Calculator</h1>
            </div>
            <div id="user-input" >
                
                <div className="grid-child">
                    <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
                    <input type="number" name="initial-investment" value={initialInvestment} className="input-group" onChange={(event) => {onInput(event.currentTarget.name,event.target.value)}} required/>
                </div>

                <div className="grid-child">
                    <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
                    <input type="number" name="annual-investment" value={annualInvestment} className="input-group" onChange={(event) => {onInput(event.currentTarget.name,event.target.value)}} required />
                </div>
                
                <div className="grid-child">
                    <label htmlFor="expected-return">EXPECTED RETURN</label>
                    <input type="number" name="expected-return" value={expectedReturn} className="input-group" onChange={(event)=> {onInput(event.currentTarget.name,event.target.value)}} required/>
                </div>

                <div className="grid-child">
                    <label htmlFor ="duration">DURATION</label>
                    <input type="number" name="duration" value={duration} className="input-group" onChange={(event)=> {onInput(event.currentTarget.name,event.target.value)}} required/>  
                </div>
            </div>
        </>
    )
}