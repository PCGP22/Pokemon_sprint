import NavBar from "./NavBar";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useAppDispatch } from "../redux/hooks";
import { setCurrentUser } from "../redux/slices/data";

type loginProps = {
  handleVisible: any;
};

function Login(props: loginProps) {
  const dispatch = useAppDispatch();

  const responseMessage = (response: any) => {
    // console.log(response);
    let credential = response.credential;
    let decoded: any = jwt_decode(credential);
    let user = {
      email: decoded.email,
      password: "",
      name: decoded.name,
      picture: decoded.picture,
      favorites: [],
      created: [],
    };
    dispatch(setCurrentUser(user));
  };
  const errorMessage = (error: void) => {
    console.log(error);
  };

  return (
    <main className="login__cover" onClick={}>
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
