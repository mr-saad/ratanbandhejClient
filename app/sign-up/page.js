export default function SignUp() {
  return (
    <div className="Container">
      <h1 className="heading text-center">Create an Account</h1>
      <form className="flex flex-col gap-8 mt-10 max-w-lg mx-auto">
        <div className="relative">
          <input
            placeholder=" "
            required
            className="input peer"
            id="name"
            type="text"
            minLength={3}
            maxLength={20}
          />
          <label className="floating-label" htmlFor="name">
            Name
          </label>
        </div>
        <div className="relative">
          <input
            placeholder=" "
            required
            className="input peer"
            id="email"
            type="email"
          />
          <label className="floating-label" htmlFor="email">
            E-Mail
          </label>
        </div>
        <div className="relative">
          <input
            pattern="[0-9]{10}"
            minLength={10}
            maxLength={10}
            placeholder=" "
            required
            className="input peer"
            id="phone"
            type="tel"
          />
          <label className="floating-label" htmlFor="phone">
            Phone
          </label>
        </div>
        <div>
          Example
          <p className="ml-4">
            Email: sk@dev.com <br />
            Phone: 0-9
          </p>
        </div>
        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>
    </div>
  )
}
