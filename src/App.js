import React from "react";
import "./App.css";
import DailyReading from "./components/dailyReading";

class App extends React.Component {
  state = {
    dailyData: [],
  };

  //   async componentDidMount() {}

  render() {
    return (
      <main>
        <DailyReading />
      </main>
    );
  }
}

export default App;
