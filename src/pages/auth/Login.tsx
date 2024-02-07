import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/api";
import { signIn } from "../../redux/user/userSlice";
import { useAppDispatch } from "../../redux/store";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [loginUser, {data, isSuccess, isLoading}] = useLoginMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await loginUser({email, password});
  };

  useEffect(() => {
    if (isSuccess) {
        console.log(data);
      dispatch(
        signIn({
            name: data.user.username,
            id: data.user._id,
            token: data.token
        })
      );
      navigate("/");
    }
  }, [isSuccess]);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="bg-slate-100 p-3 rounded-lg"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="bg-slate-100 p-3 rounded-lg"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {isLoading ? "Loading" : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don&apos;t have an account?</p>
        <Link to="/register">
          <span className="text-blue-500">Sign up</span>
        </Link>
      </div>
    </div>
  );
};
export default Login;
