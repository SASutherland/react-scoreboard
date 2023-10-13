import React from 'react';

const Counter = (props) => {
  // const [score, setScore] = React.useState(0);
  const id = props.id;

  // const incrementScore = () => {
  //   setScore(prevScore => prevScore + 1);
  // }

  // const decrementScore = () => {
  //   setScore(prevScore => prevScore - 1);
  // }

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={()=>props.changeScore(id, -1)}> - </button>
      <span className="counter-score">{ props.score }</span>
      <button className="counter-action increment" onClick={()=>props.changeScore(id, 1)}> + </button>
    </div>
  );

}

export default Counter;
