import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUp, login, mode, setMode } = useAuth();

  function onSubmit(data) {
    setError(null);
    let result;
    if (mode === "signup") {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }
    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }
  }
  return (
    <div className="flex-[1] py-8 px-0">
      <div className="max-w-[1200px] my-0 mx-auto py-0 px-8">
        <div className="max-w-[400px] my-0 mx-auto bg-[#fff] py-8 px-8 rounded-lg  shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
          <h1 className="text-[2rem] mb-8 text-[#333]">
            {mode === "signup" ? "Sign Up" : "Login"}
          </h1>
          <form action="" className="mt-8" onSubmit={handleSubmit(onSubmit)}>
            {error && (
              <div className="bg-[#f8d7da] text-[#721c24] py-3 px-3 rounded-sm mb-4 border border-[#f5c6c6]">
                {error}
              </div>
            )}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-[#333]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email", { required: "Email is required" })}
                className="w-full py-3 px-3  border border-[#ddd]  rounded-sm text-base transition-[border-color] duration-[0.2s] focus:border-[#007bff] focus:outline-none "
              />
              {errors.email && (
                <span className="block text-[#dc3545] text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 font-medium text-[#333]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 12,
                    message: "Password must be less than 12 characters",
                  },
                })}
                className="w-full py-3 px-3  border border-[#ddd] rounded-sm text-base transition-[border-color] duration-[0.2s] focus:border-[#007bff] focus:outline-none "
              />
              {errors.password && (
                <span className="block text-[#dc3545] text-sm mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="py-4 px-8 border-none rounded-sm text-[1.1rem] font-medium cursor-pointer transition- background-color duration-[0.2s] transform-[0.1s] no-underline inline-block  text-center bg-[#007bff] hover:bg-[#0056b3] text-[#fff] "
            >
              {mode === "signup" ? "Sign up" : "Login"}
            </button>
          </form>
          <div className="mt-6 text-center text-[#666]">
            {mode === "signup" ? (
              <p>
                Already have an account?{" "}
                <span
                  className="text-[#007bff] no-underline cursor-pointer hover:decoration-solid"
                  onClick={() => setMode("login")}
                >
                  Login
                </span>
              </p>
            ) : (
              <p>
                Don't have an account?{" "}
                <span
                  className="text-[#007bff] no-underline cursor-pointer hover:decoration-solid"
                  onClick={() => setMode("signup")}
                >
                  Sign Up
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
