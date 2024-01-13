import React, { useState } from "react";
import styles from "../styles/Singup.module.css";
import NavBar from "./NavBar.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      email,
      password,
    };

    console.log(obj);
    setPassword("");
    setEmail("");
  };

  return (
    <div>
      <div className={styles.container}>
        <h2>Login</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </div>
          <button className={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
