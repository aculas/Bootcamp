const App = () => {
  return (
    <div>
      <Person
        name="John"
        age={50}
        hobbies={["Music", "Video Games", "Watching TV"]}
      />
      <Person
        name="Michelle"
        age={50}
        hobbies={["Reading", "Nutrition", "Fitness"]}
      />
      <Alert>
        <Person
          name="Maddie"
          age={11}
          hobbies={["Watching youtube", "My Little Pony", "Crafting"]}
        />
      </Alert>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
