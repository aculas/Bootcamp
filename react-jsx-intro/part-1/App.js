const App = () => (
  <div>
    <FirstComponent component="My very first component" />
    <NamedComponent name="Jason" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
