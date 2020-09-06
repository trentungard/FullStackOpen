import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, newVote] = useState(
    Array(props.anecdotes.length).fill(0)
  );

  function randomNumber(ceiling){
    return Math.floor(Math.random() * ceiling);
  }
  const votesCopy = [...votes];

  function findMaxIndex(array) {
    let maxIndex = 0;
    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            maxIndex = i;
            max = array[i];
        }
    }
    return maxIndex;
  }

  let maxIndex = findMaxIndex(votes);

  return (
    <div>
    <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <br/>
      <p>has {votes[selected]} votes</p>
      <Button text="next antectode" onClick={function(){
        let number = randomNumber(props.anecdotes.length);
        setSelected(number);
        }}/>
      <Button text="vote" onClick={function(){
        votesCopy[selected] += 1;
        newVote(votesCopy);
      }}/>
      <h2>Anecdote with the most votes</h2>
      {props.anecdotes[maxIndex]}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
