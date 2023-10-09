import NavBar from "./NavBar";

function Register() {
  return (
    <main>
      <NavBar />
      <form>
        <fieldset>
          <h1>Create a Poké-account</h1>
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" />
          <label htmlFor="passwordConf">Confirm password</label>
          <input type="text" name="passwordConf" id="passwordConf" />
          <button>Create account</button>
          {/* google register? */}
        </fieldset>
      </form>
    </main>
  );
}

export default Register;
