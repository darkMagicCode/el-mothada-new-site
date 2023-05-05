import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Logingimg from "../../../assets/imgs/Group 1264.png";
import { classNames } from "primereact/utils";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../reduxtoolkit/loginReducer";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userData);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };
  const navgate = useNavigate()
  useEffect(() => {
    console.log(user);
    if (user) {
      navgate(`/CourseList/${user.id}`);
    }
  }, [user]);

  return (
    <div className=" w-9 mx-auto shadow-1">
      <div className="grid">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="grid">
              <div className=" col-8">
                <h1> تسجيل الدخول</h1>
                <h4>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Obcaecati, natus?
                </h4>
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                  </span>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Username"
                    className=" p-mb-3 w-full"
                  />
                </div>
                <br />
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-lock"></i>
                  </span>
                  <input
                    name="pass"
                    type="password"
                    value={formData.pass}
                    onChange={handleChange}
                    placeholder="Password"
                    className=" p-mb-3 w-full"
                  />
                </div>
                <br />
                <button className="w-full">Login</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-6">
          <img src={Logingimg} alt="Login Image" className="w-9 " />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
