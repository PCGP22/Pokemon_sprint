import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import jwt_decode from "jwt-decode";

let credential: any;
function Login() {
  const responseMessage = (response: any) => {
    // console.log(response);
    credential = response.credential;
    var decoded: any = jwt_decode(credential);
    console.log(decoded.email);

    console.log(decoded);
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
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${credential}`,
          {
            headers: {
              Authorization: `Bearer ${credential}`,
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
          {profile && (
            <div>
              <img src={profile.picture} alt="user image" />
              <h3>User Logged in</h3>
              <p>Name: {profile.name}</p>
              <p>Email Address: {profile.email}</p>
              <br />
              <br />
              <button onClick={logOut}>Log out</button>
            </div>
          )}
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" />
          <button>Log in</button>

          <a href="/register">Don't have any account?</a>

          <div>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          </div>
        </fieldset>
      </form>
    </main>
  );
}

export default Login;
