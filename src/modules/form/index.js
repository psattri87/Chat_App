import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import Input from "../../components/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ isSignInPage = true }) => {
  const [data, setData] = useState({
    ...(!isSignInPage && { fullName: "" }),
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center items-center bg-light">
      <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center ">
        <div className="text-4xl font-bold">
          Welcome {isSignInPage && "Back"}
        </div>
        <div className="text-xl font-light mb-10">
          {isSignInPage
            ? "Sign in to get explored"
            : "Sign up now to get started"}
        </div>
        <form
          className="flex flex-col w-full items-center"
          onSubmit={() => console.log(data)}
        >
          {!isSignInPage && (
            <Input
              label="Full Name"
              placeholder="Enter your name"
              name="fullName"
              className="w-1/2"
              inputClassName="mb-6"
              value={data.fullName}
              onChange={(e) => setData({ ...data, fullName: e.target.value })}
            />
          )}
          <Input
            label="Email address"
            placeholder="Enter your email"
            name="email"
            type="email"
            className="w-1/2"
            inputClassName="mb-6"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Input
            type="password"
            placeholder="Enter your password"
            label="Password"
            name="password"
            className="w-1/2"
            inputClassName="mb-10"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <Button
            label={isSignInPage ? "Sign in" : "Sign up"}
            className="w-1/2 mb-2"
            type="submit"
          />
        </form>

        <div>
          {isSignInPage
            ? "If didn't have an account? "
            : "If already have an account? "}
          <span className="text-primary cursor-pointer underline ">
            <Link to={`/users/${isSignInPage ? "sign_up" : "sign_in"}`}>
              {isSignInPage ? "Sign up" : "Sign in"}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
