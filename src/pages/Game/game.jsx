import "./game.css"
import { useState } from 'react';


const GamePage = () => {
  const [dice, setDice] = useState(Array(5).fill(1)); // 5 dés
  const [rollsLeft, setRollsLeft] = useState(3); // Nombre de relances restantes
  const [selectedDice, setSelectedDice] = useState(Array(5).fill(false)); // Dés sélectionnés

  // Fonction pour lancer les dés
  const rollDice = () => {
    if (rollsLeft > 0) {
      const newDice = dice.map((die, index) => (selectedDice[index] ? die : Math.floor(Math.random() * 6) + 1));
      setDice(newDice);
      setRollsLeft(rollsLeft - 1);
    }
  };

  // Fonction pour sélectionner/désélectionner un dé
  const toggleSelected = (index) => {
    if (rollsLeft < 3) {
      const newSelectedDice = [...selectedDice];
      newSelectedDice[index] = !selectedDice[index];
      setSelectedDice(newSelectedDice);
    }
  };

  // Fonction pour détecter les combinaisons gagnantes et retourner le nombre de pâtisseries gagnées
  const checkWin = () => {
    const sum = dice.reduce((acc, die) => acc + die, 0);
    const uniqueDice = [...new Set(dice)];
    const hasYams = uniqueDice.length === 1;
    const hasLargeStraight = uniqueDice.length === 5 && Math.max(...uniqueDice) - Math.min(...uniqueDice) === 4;
    const hasFourOfAKind = dice.some((die) => dice.filter((d) => d === die).length >= 4);

    if (hasYams) return 3; // Yams
    if (hasLargeStraight) return 2; // Grande suite
    if (hasFourOfAKind) return 1; // Carré
    return 0; // Aucune combinaison gagnante
  };

  // Fonction pour recommencer le jeu
  const resetGame = () => {
    setDice(Array(5).fill(1));
    setSelectedDice(Array(5).fill(false));
    setRollsLeft(3);
  };


  return (
    <div className="gameContainer">
    <div className="rules">
    </div>
    <div className="rightContainer">
      <button className="rollButton" onClick={rollDice} disabled={rollsLeft === 0}>Roll the dice</button>
      <button className="resetButton" onClick={resetGame}>Reset</button>
      <div>
        {dice.map((die, index) => (
          <button className="dice" key={index} onClick={() => toggleSelected(index)}>
            {die} {selectedDice[index] ? 'Sélectionné' : ''}
          </button>
        ))}
      </div>
      <p>Pâtisseries gagnées: {checkWin()}</p>
      <p>Relances restantes: {rollsLeft}</p>
    </div>
    </div>
  )
}


export default GamePage