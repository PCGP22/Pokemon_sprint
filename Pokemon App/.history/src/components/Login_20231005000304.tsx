import NavBar from "./NavBar";

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
          <div
            className="g-signin2"
            data-onsuccess="onSignIn"
            onClick={onSignIn}>
            Google?
          </div>
          <div
            id="g_id_onload"
            data-client_id="YOUR_GOOGLE_CLIENT_ID"
            data-login_uri="https://your.domain/your_login_endpoint"
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
          <a href="/register">Don't have any account?</a>
        </fieldset>
      </form>
    </main>
  );
}

export default Login;