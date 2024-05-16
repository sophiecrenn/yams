import { useState } from 'react';
import "./connexion.css"
import { useLoginMutation} from '../features/authApi/auth'

const ConnexionPage = () => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [login] = useLoginMutation();


    const handleEmailChange = (event) => {
        setemail(event.target.value);
      };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

      const handleLogin = async () => {
        try {
          const response = await login({ email, password });

          if (response.error) {
              setError('Email or password wrong. Please try again.');
          } else {
            localStorage.setItem('token', response.data.token);
            window.location.href = '/dashboard';
          }
      } catch (error) {
          console.error('Error :', error);
          setError('Error, no connexion possible');
      }
  };

    return(
<div className="connexionContainer">
      <h2>LOGIN</h2>
      <div>
        <label htmlFor="email">Email :</label>
        <br/>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password :</label>
        <br/>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button className="loginButton" onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
      <div className="loginPastries">
      </div>
    </div>
    )
}

export default ConnexionPage