import React, { memo } from 'react';
import Counter from './Counter.js';
import Icon from './Icon.js';

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
        <Icon isHighScore={props.isHighScore} />
        {props.name}
      </span>

      <Counter
      score={props.score}
      id={props.id}
      changeScore={props.changeScore}
      />
    </div>
  );
}

const playerPropsAreEqual = (prevProps, nextProps) => {
  return prevProps.score === nextProps.score && prevProps.isHighScore === nextProps.isHighScore;
};

export default memo(Player, playerPropsAreEqual);
