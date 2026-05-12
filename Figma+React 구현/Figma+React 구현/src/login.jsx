//login.jsx

import React, { useState } from "react";
import "./login.css";

export default function Login() {
    const [FIRSTNAME, setFIRSTNAME] = useState("");
    const [LASTNAME, setLASTNAME] = useState("");
    const [PHONENUMBER, setPHONENUMBER] = useState("");
    const [ID, setID] = useState("");
    const [PASSWORD, setPASSWORD] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("FIRSTNAME", FIRSTNAME,"LASTNAME", LASTNAME, "PHONENUMBER", PHONENUMBER, "ID", ID, "PASSWORD", PASSWORD);
    };
  return (
    <div className="login-wrapper">
        <div className="login-page">
            <div className="login-card">
            <h1 className="login-title">SIGN UP</h1>
            <form className="login-form-warpper" onSubmit={handleSubmit}>
                <div className="login-form">
                    <div className="name-row">
                        <input
                         type="text"
                         placeholder="FIRST NAME"
                         className="login-input-right"
                         value={FIRSTNAME}
                         onChange={(e) => setFIRSTNAME(e.target.value)}
                         />
                         <input
                         type="text"
                         placeholder="LAST NAME"
                         className="login-input-left"
                         value={LASTNAME}
                         onChange={(e) => setLASTNAME(e.target.value)}
                         />
                   </div>
                         <input
                         type="tel"
                         placeholder="PHONE NUMBER"
                         className="login-input full"
                         value={PHONENUMBER}
                         onChange={(e) => setPHONENUMBER(e.target.value)}
                         />
                         <input
                         type="text"
                         placeholder="ID"
                         className="login-input full"
                         value={ID}
                         onChange={(e) => setID(e.target.value)}
                         />
                         <input
                         type="password"
                         placeholder="PASSWORD"
                         className="login-input full"
                         value={PASSWORD}
                         onChange={(e) => setPASSWORD(e.target.value)}
                         />
                         <button type="submit" className="create-button">
                            CREATE ACCOUNT
                         </button>

                    
                  
                </div>
                </form>
            </div>
        </div>

    </div>
  );
}