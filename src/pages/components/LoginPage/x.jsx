import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

class LoginForm {
  constructor() {
    const [formData, setFormData] = useState({
      email: "",
      pass: "",
    });
    this.formData = formData;
    this.setFormData = setFormData;
    this.dispatch = useDispatch();
    this.user = useSelector((state) => state.auth.userData);
  }

  handleChange = (e) => {
    this.setFormData({ ...this.formData, [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.dispatch(login(this.formData));
  };
}

// Usage:
const LoginFormComponent = () => {
  const loginForm = new LoginForm();

  return (
    <form onSubmit={loginForm.handleSubmit}>
      <input
        type="email"
        name="email"
        value={loginForm.formData.email}
        onChange={loginForm.handleChange}
      />
      <input
        type="password"
        name="pass"
        value={loginForm.formData.pass}
        onChange={loginForm.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
