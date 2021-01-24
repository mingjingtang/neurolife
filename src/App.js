import React from "react";
import "./App.css";
import DailyReading from "./components/dailyReading";
import "./components/Form.css";
import FormSignup from "./components/FormSignup";

class App extends React.Component {
  state = {
    isLoggedIn: false,
    dailyData: [],
  };

  async componentDidMount() {
    var myObj = {
      bloodPressure: "Abnormal",
      temperature: "Normal",
      heartRate: "normal",
      pH: "normal",
    };
    this.setState({ dailyData: myObj });
  }

  submitForm() {
    this.setState({ isLoggedIn: true });
  }

  render() {
    const { isLoggedIn, dailyData } = this.state;

    return (
      <main>
        {!isLoggedIn ? (
          <div>
            <div className="form-container">
              <span className="close-btn">×</span>
              <div className="form-content-left">
                <img
                  className="form-img"
                  src="https://www.myhealthtalent.com/getasset/a4fb6627-ce16-4259-acdb-552f4af40c6b/"
                  alt="spaceship"
                />
              </div>
              <FormSignup submitForm={() => this.submitForm()} />
            </div>{" "}
          </div>
        ) : (
          <DailyReading dailyData={dailyData} />
        )}
      </main>
    );
  }
}

export default App;
