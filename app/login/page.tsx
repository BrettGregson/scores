import React from "react";
import Navbar from "../components/navbar/Navbar";
import Link from "next/link";
import { getNavigationItemByName } from "../navigation";
import SubmitButton from "../components/submit-button/SubmitButton";
import PageTitle from "../components/page-title/PageTitle";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <PageTitle title={"Login to your account"} isCentered={true} />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 "
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 "
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <SubmitButton label={"Login"} />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have a account?{" "}
            <Link
              href={getNavigationItemByName("Join") ?? "#"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Join here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
