export default function UserInput({userInput, handleChange1}) {


    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input 
                    type="number" 
                    required 
                    value={userInput.initialInvestment}
                    onChange={(event) => handleChange1('initialInvestment', event.target.value)}>
                </input>
            </p>
            <p>
                <label>Annual Investment</label>
                <input 
                    type="number" 
                    required 
                    value={userInput.annualInvestment}
                    onChange={(event) => handleChange1('annualInvestment', event.target.value)}>
                </input>
            </p>
            <p>
                <label>Expected Return</label>
                <input 
                    type="number" 
                    required 
                    value={userInput.expectedReturn}
                    onChange={(event) => handleChange1('expectedReturn', event.target.value)}>
                </input>
            </p>
            <p>
                <label>Duration</label>
                <input 
                    type="number" 
                    required 
                    value={userInput.duration}
                    onChange={(event) => handleChange1('duration', event.target.value)}>
                </input>
            </p>
        </div>
        
    </section>
}