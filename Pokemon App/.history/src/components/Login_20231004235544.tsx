import NavBar from "./NavBar";

function Login() {
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
