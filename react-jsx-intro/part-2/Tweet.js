const Tweet = (props) => {
  return (
    <div>
      <li>Name: {props.name}</li>
      <li>Username: {props.username}</li>
      <li>Date: {props.date}</li>
      <li>Message: {props.message}</li>
      <br />
    </div>
  );
};
