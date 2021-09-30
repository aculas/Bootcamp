const Alert = (props) => {
  console.log(props);
  return (
    <div>
      <h3>This person loves My Little Pony</h3>
      <p>{props.children}</p>
    </div>
  );
};
