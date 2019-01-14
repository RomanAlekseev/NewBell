import * as React from "react";

function LoginComponent(props) {
  return (
    <div
      className="container col-md-3 col-sm-5 col-9"
      style={{ marginTop: "25vh" }}
    >
      <h2 className="text-center mb-3">Welcome</h2>
      <form className="border px-3" onSubmit={props.handleSubmit}>
        <div className="form-group mt-2 ">
          <label
            htmlFor="login"
            className={props.data.error.login ? "text-danger" : null}
          >
            Login
          </label>
          <input
            name="login"
            type="text"
            className={
              props.data.error.login
                ? "form-control is-invalid"
                : "form-control"
            }
            id="login"
            aria-describedby="emailHelp"
            placeholder="login"
            onChange={props.handleChange}
            value={props.data.login}
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="password"
            className={props.data.error.password ? "text-danger" : null}
          >
            Password
          </label>
          <input
            name="password"
            type="password"
            className={
              props.data.error.password
                ? "form-control is-invalid"
                : "form-control"
            }
            id="password"
            placeholder="Password"
            onChange={props.handleChange}
            value={props.data.password}
          />
        </div>
        <button type="submit" className="btn btn-success col-12 mb-3">
          Submit
        </button>
      </form>
      <div id="info" className="container">
        <div className="row">
          <p className="mx-auto mt-3 mb-2 text-danger text-center col-12">
            {props.data.error.login ? "Login is invalid" : null}
          </p>
          <p className="mx-auto text-danger text-center">
            {props.data.error.password ? "Password is invalid" : null}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
