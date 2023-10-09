import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

function Login() {
  const responseMessage = (response: any) => {
    console.log(response);
    login();
  };
  const errorMessage = (error: void) => {
    console.log(error);
  };

  const [user, setUser] = useState<any>([]);
  const [profile, setProfile] = useState<any>([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <main>
      <NavBar />
      <form>
        <fieldset>
          <h1>Log in</h1>
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" />
          <button>Log in</button>
          {/* google login */}
          <div className="g_id_signin" data-type="standard">
            <button className="customBtn" type="button">
              Google?
            </button>
          </div>
          <div id="google-signin-button">Google2</div>
          {/* <div
            id="g_id_onload"
            data-client_id="435454517185-8n2v5h5gs6gol9d8ilgsm81vm6jou52o.apps.googleusercontent.com"
            data-login_uri="http://localhost:5173/login"
            data-auto_prompt="false"></div>
          <div
            className="g_id_signin"
            data-type="standard"
            data-size="large"
            data-theme="outline"
            data-text="sign_in_with"
            data-shape="rectangular"
            data-callback="OnSuccess"
            data-logo_alignment="left"></div>
          <div id="name"></div> */}
          <a href="/register">Don't have any account?</a>

          <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            <button onClick={() => login()}>Login</button>
            {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
          </div>
        </fieldset>
      </form>
    </main>
  );
}

export default Login;
