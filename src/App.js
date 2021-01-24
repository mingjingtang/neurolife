import React from "react";
import "./App.css";
import DailyReading from "./components/dailyReading";
import Form from "./components/Form";

class App extends React.Component {
  state = {
    isLoggedIn: false,
    // dailyData: [],
  };

  //   async componentDidMount() {}

  render() {
    const { isLoggedIn } = this.state;

    return (
      <main>
        {!isLoggedIn ? <Form isSubmmited={isLoggedIn} /> : <DailyReading />}
      </main>
    );
  }
}

export default App;
