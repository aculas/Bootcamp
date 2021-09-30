const Person = (props) => {
  let voteText = props.age >= 18 ? "Please Go vote!" : "You must be 18";

  let hobbies = props.hobbies.map((hobby) => <li>{hobby}</li>);

  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {props.name.slice(0, 8)}</li>
        <li>Age: {props.age}</li>
        <ul>
          Hobbies
          {hobbies}
        </ul>
      </ul>
      <h3>{voteText}</h3>
    </div>
  );
};
