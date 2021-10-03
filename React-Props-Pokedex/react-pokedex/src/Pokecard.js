import react from "react";
import "./Pokecard.css";

const POKE_API =
  "https://raw.githubusercontent.com/" +
  "PokeAPI/sprites/master/sprites/pokemon/";

// Single Pokemon card

function Pokecard(props) {
  let imgSrc = `${POKE_API}${props.id}.png`;

  return (
    <div className="Pokecard">
      <div className="Pokecard-title">{props.name}</div>
      <img className="Pokecard-image" src={imgSrc} />
      <div className="Pokecard-data">{props.type}</div>
      <div className="Pokecard-data">{props.exp}</div>
    </div>
  );
}

export default Pokecard;
