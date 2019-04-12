import React from "react";
import Input from "./Input";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unameValue: "",
      unameError: "",
      unameInvalid: false,
      pwdValue: "",
      pwdError: "",
      pwdInvalid: false
    };
    this.onUnameChange = this.onUnameChange.bind(this);
    this.onUnameBlur = this.onUnameBlur.bind(this);
    this.onPwdChange = this.onPwdChange.bind(this);
    this.onPwdBlur = this.onPwdBlur.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onUnameChange(e) {
    this.setState({ unameValue: e.target.value });
  }
  onUnameBlur = e => {
    const value = e.target.value;
    this.setState({
      unameError: "",
      unameInvalid: false
    });
    if (value.length === 0) {
      this.setState({
        unameError: "User name field is empty, please enter something",
        unameInvalid: true
      });
    } else if (!value.match("[A-Za-z]+")) {
      this.setState({
        unameError: "User name has wrong format, please enter only letters",
        unameInvalid: true
      });
    }
  };
  onPwdChange(e) {
    this.setState({ pwdValue: e.target.value });
  }
  onPwdBlur = e => {
    const value = e.target.value;
    this.setState({
      pwdError: "",
      pwdInvalid: false
    });
    if (value.length === 0) {
      this.setState({
        pwdError: "Password empty, please enter something",
        pwdInvalid: true
      });
    } else if (!value.match("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{3,}$")) {
      /**
       * At least one upper case english letter, (?=.*?[A-Z])
        At least one lower case english letter, (?=.*?[a-z])
        At least one digit, (?=.*?[0-9])
        At least one special character, (?=.*?[#?!@$%^&*-])
       */
      this.setState({
        pwdError:
          "Password has wrong format. Please have atleast one uppercase letter,one lowercase letter,one number",
        pwdInvalid: true
      });
    }
  };
  onClick = e => {
    e.preventDefault();
    if (
      this.state.unameValue === "level" &&
      this.state.pwdValue === "Access123"
    ) {
      this.setState({
        result: "Sign in successful!"
      });
    } else {
      this.setState({
        result: "Sign in failed! Wrong combination of username/password."
      });
    }
  };
  render() {
    const isEnabled =
      this.state.unameValue.length > 0 && this.state.pwdValue.length > 0;
    return (
      <section>
        <form>
          <fieldset>
            <legend>Sign In Form</legend>
            <Input
              id="uname"
              label="User Name"
              type="text"
              inputValue={this.state.unameValue}
              onChange={this.onUnameChange}
              onBlur={this.onUnameBlur}
              isError={this.state.unameError}
              ariaInvalid={this.state.unameInvalid}
            />
            <Input
              id="pwd"
              label="Password"
              type="text"
              inputValue={this.state.pwdValue}
              onChange={this.onPwdChange}
              onBlur={this.onPwdBlur}
              isError={this.state.pwdError}
              ariaInvalid={this.state.pwdInvalid}
            />
            <button
              type="submit"
              disabled={!isEnabled}
              onClick={this.onClick}
              className={!isEnabled ? "disabled" : ""}
            >
              Sign In
            </button>
          </fieldset>
        </form>

        <div role="alert" className="result">
          {this.state.result}
        </div>
      </section>
    );
  }
}

export default Form;
