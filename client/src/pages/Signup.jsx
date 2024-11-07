import {Link} from "react-router-dom"
const Signup = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Signup</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 rounded-lg p-3"
        />

        <input
          type="emai"
          placeholder="email"
          id="email"
          className="bg-slate-100 rounded-lg p-3"
        />

        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-slate-100 rounded-lg p-3"
        />
        <button  className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign up
          </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
        <span className="text-blue-500">Sign in</span>
        </Link>
        
      </div>
    </div>
  );
};

export default Signup;
