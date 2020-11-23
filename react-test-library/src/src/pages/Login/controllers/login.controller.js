/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { LoginModel } from "../model/login.model";

export class LoginController {
  login;
  password;
  loading;
  constructor() {
    [this.login, this.setLogin] = useState("");
    [this.password, this.setPassword] = useState("");
    [this.loading, this.setLoading] = useState(false);
    [this.remember, this.setRemember] = useState(false);
  }

  handleSetLogin(e) {
    this.setLogin(e.target.value);
  }

  handleSetPassword(e) {
    this.setPassword(e.target.value);
  }

  handleCheckRemember(value) {
    this.setRemember(value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setLoading(true);
    const login = new LoginModel(this.login, this.password);

    setTimeout(() => {
      this.setLoading(false);
    }, 2000);

    console.log(login);
  }

  redirectGit() {
    window.open("https://github.com/devluispereira", "_blank");
  }
}
