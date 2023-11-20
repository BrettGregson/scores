"use client";

import React, { useState } from "react";
import Navbar from "./../components/navbar/Navbar";
import SubmitButton from "../components/submit-button/SubmitButton";
import PageTitle from "../components/page-title/PageTitle";
import { getNavigationItemByName } from "../navigation";
import Link from "next/link";

const CreateLeaguePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <PageTitle title={"Create League"} isCentered={true} />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 "
              >
                League Name
              </label>
              <div className="mt-2">
                <input
                  id="text"
                  maxLength={24}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <SubmitButton label={"Create League"} />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            By creating a league you agree to the {}
            <Link
              href={getNavigationItemByName("Join") ?? "#"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              terms and conditions
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default CreateLeaguePage;
