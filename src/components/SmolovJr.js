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

  const isInputEmpty = maxLift === "" || increment === "";

  return(
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Smolov Jr.</h1>
          </div>
        </div>
        <div className="row" style={{marginTop: 50}}>
          <div className="col text-center">
            <input type="number" value={maxLift} onChange={maxChange}/>
          </div>
          <div className="col text-center">
            <input type="number" value={increment} onChange={incrementChange}/>
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