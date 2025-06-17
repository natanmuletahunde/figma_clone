export default async function Register() {
  return (
    <div>
      <h1>Register</h1>
      <p>Please fill out the form below to create a new account.</p>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}