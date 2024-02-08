import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';
import { IoLogoDiscord } from 'react-icons/io5';
import { IoTennisballSharp } from 'react-icons/io5';

export default function Login() {
  return (
    <div className="bg-slate-50 h-screen overflow-hidden">
      <div className="hidden md:absolute md:top-[3%] md:left-[3%] md:block md:z-30">
        <IoTennisballSharp
          style={{
            height: '60px',
            width: '60px',
            color: 'white',
          }}
        />
      </div>
      <h2 className="hidden md:block md:absolute md:top-[40%] md:left-[12%] md:uppercase md:font-bold md:text-8xl md:text-white md:z-40 md:tracking-widest ">
        Base
      </h2>
      <div className="md:mt-[-150px] md:w-[55%] md:ml-[-100px] md:bg-indigo-500 md:h-[1000px] md:rotate-12"></div>
      <div className="navbar bg-indigo-500 md:hidden">
        <div className="flex justify-center items-center gap-x-1">
          <div>
            <IoTennisballSharp
              style={{
                height: '24px',
                width: '24',
                color: 'white',
              }}
            />
          </div>
          <a className="btn btn-ghost text-xl text-slate-100">Base</a>
        </div>
      </div>

      <div className="md:absolute md:top-16 md:right-[15%]">
        <div className="flex flex-col gap-y-1 text-black ml-6 mt-8">
          <h3 className="text-xl font-bold">Sign in</h3>
          <p className="text-xs">Sign in to your account</p>
        </div>

        <div className="flex flex-row gap-x-8 justify-center mt-8">
          <Link href="/dashboard">
            <button className="text-xs px-4 py-2 bg-white text-slate-400 rounded-md">
              Sign in with google
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="text-xs px-4 py-2 bg-white text-slate-400 rounded-md">
              Sign in with apple
            </button>
          </Link>
        </div>

        <form
          action=""
          className="flex flex-col items-center py-7 px-5 max-w-80 bg-white mt-8 rounded-lg mx-auto"
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm">
              Email address
            </label>
            <input
              type="text"
              id="email"
              className="bg-slate-100 rounded-md mt-2 py-1 px-3"
            />
          </div>

          <div className="flex flex-col mt-6">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-100 rounded-md mt-2 py-1 px-3"
            />
          </div>

          <div className="mt-4 self-start">
            <a href="#" className="text-sm text-blue-600 ">
              Forgot password?
            </a>
          </div>

          <div className="mt-4">
            <Link href="/dashboard">
              <button
                className="bg-indigo-500 hover:bg-indigo-700 text-slate-100 font-bold px-28 py-2 rounded-lg text-sm"
                type="submit"
              >
                Sign in
              </button>
            </Link>
          </div>
        </form>

        <div className="flex flex-col gap-4 items-center mt-4">
          <p className="text-slate-400 text-sm">Do not have an account?</p>
          <div className="">
            <a className="text-blue-600 text-sm">Register here</a>
          </div>
        </div>
      </div>

      <ul className="flex center gap-x-6 justify-center text-slate-500 md:text-white mt-10 items-center md:absolute md:bottom-20 md:left-[10%] md:gap-12">
        <li>
          <a href="#">
            <FaGithub
              style={{
                height: '30px',
                width: '30px',
              }}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <FaSquareTwitter
              style={{
                height: '30px',
                width: '30px',
              }}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <FaLinkedin
              style={{
                height: '30px',
                width: '30px',
              }}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <IoLogoDiscord
              style={{
                height: '30px',
                width: '30px',
              }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
