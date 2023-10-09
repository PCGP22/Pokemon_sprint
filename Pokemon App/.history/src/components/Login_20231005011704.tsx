import NavBar from "./NavBar";

function Login() {
  function onSignIn(googleUser: any) {
    console.log("in");
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  function handleCredentialResponse(response: any) {
    /* your code here for handling response.credential */
    console.log(response);
  }

  return (
    <main>
      <NavBar />
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      <meta
        name="google-signin-client_id"
        content="435454517185-mteumdmd34v0rtn854fph4npai3a3lvd.apps.googleusercontent.com"
      />

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
            id="g_id_onload"
            data-client_id="435454517185-mteumdmd34v0rtn854fph4npai3a3lvd.apps.googleusercontent.com"
            data-context="signin"
            data-ux_mode="popup"
            data-callback={handleCredentialResponse}
            data-auto_prompt="false"
          />
          <div
            className="g_id_signin"
            data-type="standard"
            data-shape="rectangular"
            data-theme="outline"
            data-text="signin_with"
            data-size="large"
            data-logo_alignment="left"></div>
          <a href="/register">Don't have any account?</a>
        </fieldset>
      </form>
    </main>
  );
}

export default Login;
