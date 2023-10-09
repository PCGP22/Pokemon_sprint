import NavBar from "./NavBar";

function Login() {
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
          <div className="g-signin2" data-onsuccess="onSignIn">
            Google?
          </div>
          <a href="/register">Don't have any account?</a>
        </fieldset>
      </form>
    </main>
  );
}

export default Login;
