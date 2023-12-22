import React, { useState } from "react"

export const SmolovJr = () =>{
  
  const [maxLift, setMaxLift] = useState(0)
  const [increment, setIncrement] = useState(5)
  
  const maxChange = (e) =>{
    setMaxLift(e.target.value)
  }

  const incrementChange = (e) =>{
    setIncrement(e.target.value)
  }

  const customRound = (value, step) => {
    return 2.5 * Math.floor((Math.floor(value) + step / 2) / step);
  };

  const calculateWeight = (percentage) => {
    const baseWeight = maxLift * percentage
    const roundedWeight = customRound(baseWeight, 2.5);
    return roundedWeight;
  }

  return(
    <>
      <div className="container">
        <div className="row" style={{marginTop: 15}}>
          <div className="col">
            <h1>Smolov Jr.</h1>
            <br />
            <p>
              Smolov Jr. is a popular and intense powerlifting program designed to rapidly increase strength, particularly in the 
              bench press, squat, and deadlift. A modified version of the original Smolov program, Smolov Jr. is a condensed and 
              slightly less demanding approach, making it more accessible for athletes looking to boost their one-repetition maximum 
              (1RM) without committing to the full Smolov cycle.
            </p>
            <br />
            <p>
              The program typically spans three weeks, with four intense workouts per week focused on the specific lift of choice. Each 
              week, the intensity and volume increase, challenging lifters to push their limits and break through plateaus. Smolov Jr. is 
              known for its effectiveness in building strength quickly but should be approached with caution due to its high demands on 
              the central nervous system and the potential for overtraining. 
            </p>
            <br />
            <p>
              Before embarking on the Smolov Jr. program, it is advisable to assess your current fitness level and ensure that you have a 
              solid foundation in lifting technique. Additionally, proper warm-up, nutrition, and recovery are crucial to maximize the 
              benefits of this challenging powerlifting regiment.  
            </p>      
          </div>
        </div>
        <div className="row" style={{marginTop: 50}}>
          <div className="col text-center">
            <p style={{fontSize:24}}>One Rep Max (lbs)</p>
            <input className="smolov-text" type="number" value={maxLift} onChange={maxChange}/>
            <br />
            <p style={{fontSize:24,marginTop: 20}}>Increment (lbs)</p>
            <input className="smolov-text" type="number" value={increment} onChange={incrementChange}/>
          </div>
        </div>
        <div className="row">
          <table class="table" style={{marginTop: 50}}>
            <thead>
              <tr>
                <th scope="col">Day</th>
                <th scope="col">Sets</th>
                <th scope="col">Reps</th>
                <th scope="col">Weight (lbs)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Monday</th>
                <td>6</td>
                <td>6</td>
                <td>{calculateWeight(0.7)}</td>
              </tr>
              <tr>
                <th scope="row">Wednesday</th>
                <td>7</td>
                <td>5</td>
                <td>{calculateWeight(0.75)}</td>
              </tr>
              <tr>
                <th scope="row">Friday</th>
                <td>8</td>
                <td>4</td>
                <td>{calculateWeight(0.8)}</td>
              </tr>
              <tr>
                <th scope="row">Saturday</th>
                <td>10</td>
                <td>3</td>
                <td>{calculateWeight(0.85)}</td>
              </tr>
            </tbody>
          </table>

          <table class="table" style={{marginTop: 50}}>
            <thead>
              <tr>
                <th scope="col">Day</th>
                <th scope="col">Sets</th>
                <th scope="col">Reps</th>
                <th scope="col">Weight (lbs)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Monday</th>
                <td>6</td>
                <td>6</td>
                <td>{calculateWeight(0.7) + parseInt(increment * 1)}</td>
              </tr>
              <tr>
                <th scope="row">Wednesday</th>
                <td>7</td>
                <td>5</td>
                <td>{calculateWeight(0.75) + parseInt(increment * 1)}</td>
              </tr>
              <tr>
                <th scope="row">Friday</th>
                <td>8</td>
                <td>4</td>
                <td>{calculateWeight(0.8) + parseInt(increment * 1)}</td>
              </tr>
              <tr>
                <th scope="row">Saturday</th>
                <td>10</td>
                <td>3</td>
                <td>{calculateWeight(0.85) + parseInt(increment * 1)}</td>
              </tr>
            </tbody>
          </table>

          <table class="table" style={{marginTop: 50}}>
            <thead>
              <tr>
                <th scope="col">Day</th>
                <th scope="col">Sets</th>
                <th scope="col">Reps</th>
                <th scope="col">Weight (lbs)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Monday</th>
                <td>6</td>
                <td>6</td>
                <td>{calculateWeight(0.7) + parseInt(increment * 2)}</td>
              </tr>
              <tr>
                <th scope="row">Wednesday</th>
                <td>7</td>
                <td>5</td>
                <td>{calculateWeight(0.75) + parseInt(increment * 2)}</td>
              </tr>
              <tr>
                <th scope="row">Friday</th>
                <td>8</td>
                <td>4</td>
                <td>{calculateWeight(0.8) + parseInt(increment * 2)}</td>
              </tr>
              <tr>
                <th scope="row">Saturday</th>
                <td>10</td>
                <td>3</td>
                <td>{calculateWeight(0.85) + parseInt(increment * 2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}