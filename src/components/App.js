import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import Player from './Player.js';
import AddPlayerForm from './AddPlayerForm.js';

const App = () => {
  const [players, setPlayers] = useState([
    {
      name: "Shawn",
      score: 0,
      id: 1
    },
    {
      name: "Trevor",
      score: 0,
      id: 2
    },
    {
      name: "Ashley",
      score: 0,
      id: 3
    },
    {
      name: "Michael",
      score: 0,
      id: 4
    }
  ]);

  const [highScore, setHighScore] = useState();

  useEffect(() => {
    const scores = players.map(player => player.score);
    setHighScore(Math.max(...scores));
  }, [players]);

  const [nextPlayerId, setNextPlayerId] = useState(5);

  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id));
  }

  const handleScoreChange = (id, delta) => {
    setPlayers(prevPlayers => prevPlayers.map(player => {
      if (player.id === id) {
        return {
          name: player.name,
          score: player.score + delta,
          id: player.id
        }
      }
      return player;
    }));
  }

  const handleAddPlayer = (name) => {
    setPlayers(prevPlayers => [
    ...prevPlayers,
      {
        name,
        score: 0,
        id: nextPlayerId,
      }
    ])
    setNextPlayerId(prevId => prevId + 1);
  }

  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        players={players}
      />

      {/* Players list */}
      {players.map(player =>
        <Player
          name={player.name}
          score={player.score}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
          changeScore={handleScoreChange}
          isHighScore={player.score === highScore && player.score !== 0}
        />
      )}

      <AddPlayerForm addPlayer={handleAddPlayer} />
    </div>
  );

}

export default App;
