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
      <meta
        name="google-signin-client_id"
        content="435454517185-8n2v5h5gs6gol9d8ilgsm81vm6jou52o.apps.googleusercontent.com"
      />
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
          <a href="/register">Don't have any account?</a>
        </fieldset>
      </form>
    </main>
  );
}

export default Login;
