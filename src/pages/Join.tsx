"use client";

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormError from "./../components/form-error/FormError";
import Navbar from "./../components/navbar/NavBar";
import PageTitle from "../components/page-title/PageTitle";
import SubmitButton from "../components/submit-button/SubmitButton";
import TextInput from "../components/text-input/TextInput";
import { postFetcher } from "../utils";
import useSWR, { mutate } from "swr";

const CREATE_USER_URL = "http://localhost:8080/user/create";
type FormState = {
  teamName: string;
  email: string;
  password: string;
};

type FormErrors = {
  email?: string[];
  teamName?: string[];
  password?: string[];
};

const JoinPage = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const [formData, setFormData] = useState<FormState>({
    teamName: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors({});
    setIsLoading(true);

    const endpoint = CREATE_USER_URL;
    try {
      const response = await mutate(endpoint, postFetcher(endpoint, formData));

      if (response && !response.success) {
        console.log(response.errors);
        setFormErrors(response.errors);
      }

      if (response && response.success) {
        console.log("redirect");
        setShouldRedirect(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (shouldRedirect) {
      navigate("/leagues");
    }
  }, [shouldRedirect]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <PageTitle title={"Create an account"} isCentered={true} />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div>
              <TextInput
                label="Team Name"
                id="teamName"
                name="teamName"
                type="text"
                value={formData.teamName}
                onChange={handleChange}
              />
              {formErrors.teamName ? (
                <FormError text={formErrors.teamName[0]} />
              ) : (
                <div className="no-form-error"></div>
              )}
            </div>

            <div>
              <TextInput
                label="Email address"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              {formErrors.email ? (
                <FormError text={formErrors.email[0]} />
              ) : (
                <div className="no-form-error"></div>
              )}
            </div>

            <div>
              <TextInput
                label="Password"
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />

              {formErrors.password ? (
                <FormError text={formErrors.password[0]} />
              ) : (
                <div className="no-form-error"></div>
              )}
            </div>

            <SubmitButton label={"Join"} isLoading={isLoading} />
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Already have an account? Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default JoinPage;
