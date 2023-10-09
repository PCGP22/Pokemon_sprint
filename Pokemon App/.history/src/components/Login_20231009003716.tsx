import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useAppDispatch } from "../redux/hooks";
import { setCurrentUser } from "../redux/slices/data";

type loginProps = {
  handleVisible: any;
  visible: boolean;
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

  if (props.visible === false) return;
  return (
    <main className="login__main">
      <div className="login__cover" onClick={props.handleVisible} />
      <form>
        <fieldset>
          <h1>Log in</h1>
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" />
          <button type="button" onClick={props.handleVisible}>
            Log in
          </button>
          <div className="hr__or">
            <div />
            or
          </div>
          <div>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          </div>
          <br />
          <a href="/register">Don't have any account?</a>
        </fieldset>
      </form>
    </main>
  );
}

export default Login;
