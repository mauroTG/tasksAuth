import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: loginErrors, isAuth } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <div className="mt-24">
      <form
        onSubmit={onSubmit}
        className="bg-gray-100 shadow-2xl w-[26rem] max-w-[32rem] rounded-xl p-8 mt-5 mx-auto">
        <h1 className="text-2xl font-bold mb-2">Login</h1>
        {loginErrors.map((error, i) => (
          <div
            key={i}
            className="bg-red-600 p-1 text-white rounded mb-1 text-center">
            {error}
          </div>
        ))}
        <input
          type="email"
          {...register("email", { required: true })}
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-red-500 invalid:text-red-600
      focus:invalid:border-red-500 focus:invalid:ring-red-500"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-sm text-red-600">Email is required</p>
        )}
        <input
          type="password"
          {...register("password", { required: true })}
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-red-500 invalid:text-red-600
      focus:invalid:border-red-500 focus:invalid:ring-red-500"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-sm text-red-600">Password is required</p>
        )}
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-300 py-2 px-3 w-full my-3 rounded-md text-white shadow-sm font-semibold transition duration-300  ease-out">
          Login
        </button>
        <p className="flex flex-row justify-between">
          Don&apos;t have an account?
          <Link
            to="/register"
            className="text-teal-500 transition duration-300  ease-out hover:text-teal-600 font-bold">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
