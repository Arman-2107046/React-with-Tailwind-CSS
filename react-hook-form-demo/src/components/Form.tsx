import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  function onSubmit2(data: FormData) {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit2)}>
        {/* name div */}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />

          {errors.name && (
            <div style={{ color: "red" }}>{errors.name.message}</div>
          )}
        </div>

        {/* email div */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />

          {errors.email && (
            <div style={{ color: "red" }}>{errors.email.message}</div>
          )}
        </div>
        {/* password div */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />

          {errors.password && (
            <div style={{ color: "red" }}>{errors.password.message}</div>
          )}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
