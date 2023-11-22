import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./../components/navbar/NavBar";
import PageTitle from "../components/page-title/PageTitle";
import SubmitButton from "../components/submit-button/SubmitButton";
import FormError from "./../components/form-error/FormError";
import TextInput from "../components/text-input/TextInput";
import { postFetcher } from "../utils";
import useSWR, { mutate } from "swr";
import { useAuth } from "../context/AuthContext";

const LOGIN_URL = "http://localhost:8080/user/login";

type FormState = {
  email: string;
  password: string;
};

type LoginResponse = {
  success: boolean;
  user?: {
    id: number;
    token: string;
  };
  message?: string;
};

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const [formData, setFormData] = useState<FormState>({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData);
    e.preventDefault();
    setFormErrors("");
    setIsLoading(true);

    const endpoint = LOGIN_URL;
    try {
      const response = (await mutate(
        endpoint,
        postFetcher(endpoint, formData)
      )) as LoginResponse;

      if (response && !response.success) {
        console.log(response.message);
        setFormErrors(response.message || "An unknown error occurred");
      }

      if (response && response.success) {
        if (response.user) {
          const userId = response.user.id;
          const token = response.user.token;

          localStorage.setItem("scores_id", userId.toString());
          localStorage.setItem("scores_token", token);

          login(userId.toString(), token);
          navigate("/leagues");
          //setShouldRedirect(true);
        } else {
          console.error("User data is missing in the response");
          setFormErrors("Login failed due to missing user data.");
        }
      }
    } catch (error) {
      console.error(error);
      setFormErrors("An error occurred while processing your request.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (shouldRedirect) {
      console.log("navigate");
      navigate("/leagues");
    }
  }, [shouldRedirect]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <PageTitle title={"Login to your account"} isCentered={true} />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <TextInput
                label="Email"
                id="email"
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <div>
                <TextInput
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />

                {formErrors && (
                  <div className="mt-4">
                    <FormError text={formErrors} />
                  </div>
                )}
              </div>
            </div>

            <div>
              <SubmitButton label={"Join"} isLoading={isLoading} />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Forgot your password? <Link to="/about">About Page</Link>
            <Link
              to="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Click here to reset it
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
