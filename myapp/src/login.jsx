import React, {useState} from "react";
//the useState is a React hook that can be directly updated
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
//this prevents the page from reloading without saving the state of the page
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
//this lets you input your info into the login form
    return  (
        <div className="auth-form-container">
            <h3>Login</h3>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@email.com" id="email" name="email"/>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>                                    {/*this button allows you to switch between forms*/}
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>
    )
}