const App = () => {
  return (
    <div>
      <Tweet
        name="Jason Hull"
        username="jhull97212"
        date={new Date().toDateString()}
        message="Great job today!"
      />
      <Tweet
        name="Ricky Bobby"
        username="RickRocks2006"
        date={new Date().toDateString()}
        message="If you ain't first, you're last."
      />
      <Tweet
        name="Napolean Dynomite"
        username="ligershavetalons"
        date={new Date().toDateString()}
        message="Heck yes! I'd vote for you."
      />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
