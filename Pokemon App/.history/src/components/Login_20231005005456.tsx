import NavBar from "./NavBar";

(Window as any).handleCredentialResponse = (response: any) => {
  /* your code here for handling response.credential */
  console.log(response);
};

function Login() {
  function onSignIn(googleUser: any) {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
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
          <div id="google-signin-button" onClick={onSignIn}>
            Google2
          </div>
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
        </fieldset>
      </form>
    </main>
  );
}

export default Login;
