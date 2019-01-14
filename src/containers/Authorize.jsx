import * as React from "react";
import { connect } from "react-redux";

import LoginComponent from "../components/Authorize";
import Organization from "../components/Organization";

import { logIn } from "../actions/actions";

export class LoginForm extends React.Component {
  state = {
    login: "",
    password: "",
    error: {
      login: false,
      password: false
    },
    isLoading: false
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    this.handlelogIn(this.state.login, this.state.password);
  };
  handlelogIn = (log, pass) => {
    if (log === "admin" && pass === "1") {
      this.setState({
        error: {
          login: false,
          password: false
        }
      });
      this.props.logIn();
    } else {
      this.setState({
        error: {
          login: log === "admin" ? false : true,
          password: pass === "1" ? false : true
        }
      });
    }
    setTimeout(
      function() {
        this.setState({ isLoading: false });
      }.bind(this),
      1500
    );
  };
  render() {
    if (this.state.isLoading) {
      return (
        <h1 className="col-2 vcenter mx-auto" style={{ marginTop: "42vh" }}>
          Loading...
        </h1>
      );
    } else {
      return this.props.admin ? (
        <Organization />
      ) : (
        <LoginComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          logIn={this.props.logIn}
          data={this.state}
        />
      );
    }
  }
}
const mapStateToProps = (state: any) => {
  return { admin: state.loginReducer.isLoggedIn };
};

function mapDispatchToProps(dispatch) {
  return {
    logIn: () => dispatch(logIn())
  };
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
export default Login;
