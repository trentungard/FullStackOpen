import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, name}) => {
  return(
    <button onClick={onClick}>{name}</button>
  )
}

const Statistic = ({statName, stat}) => {
  return(
    <tr>
      <td>{statName}</td>
      <td>{stat}</td>
    </tr>
  )
}
const Good = (props) => {
  return(
    <Button onClick={props.handleClick} name='good'></Button>
  )
}
const Neutral = (props) => {
  return(
    <Button onClick={props.handleClick} name='neutral'></Button>
  )
}
const Bad = (props) => {
  return(
    <Button onClick={props.handleClick} name='bad'></Button>
  )
}

const Statistics = ({goodStat, neutralStat, badStat}) => {
  if(goodStat || neutralStat || badStat){
    return(
      <>
        <h2>statistics</h2>
        <table>
          <tbody>
            <Statistic statName='good' stat={goodStat}/>
            <Statistic statName='neutral' stat={neutralStat}/>
            <Statistic statName='bad' stat={badStat}/>
            <Statistic statName='all' stat={goodStat + neutralStat + badStat}/>
            <Statistic statName='average' stat={ (goodStat - badStat) / (goodStat + neutralStat + badStat)} />
            <Statistic statName='posititve' stat={((goodStat) / (goodStat + neutralStat + badStat) * 100)} />
          </tbody>
        </table>
      </>
    )
  }
  return(
    <p>No feedback given</p>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  console.log(neutral)
  return (
    <div>
      give feedback
      <br />
      <Good handleClick={() => setGood(good + 1)}/>
      <Neutral handleClick={() => setNeutral(neutral + 1)}/>
      <Bad handleClick={() => setBad(bad + 1)}/>
      <Statistics goodStat={good} neutralStat={neutral} badStat={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)