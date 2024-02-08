'use client';

import { FaRegBell } from 'react-icons/fa';
import { IoTennisballSharp } from 'react-icons/io5';
import SidebarContent from '../components/sidebar-content';
import { FaUpload } from 'react-icons/fa';
import { FaFileInvoice } from 'react-icons/fa';
import { AiFillSchedule } from 'react-icons/ai';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { IoIosNotifications } from 'react-icons/io';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdSpaceDashboard } from 'react-icons/md';
import Upload from '../components/upload';

function page() {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-white">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <div className="flex items-center justify-center gap-4">
              <div>
                <IoTennisballSharp
                  style={{
                    height: '28px',
                    width: '28',
                    color: '#6366f1',
                  }}
                />
              </div>
              <h2 className="text-xl font-medium">Base</h2>
            </div>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal items-center">
              {/* Navbar menu content here */}
              <li>
                <a>
                  <FaRegBell
                    style={{
                      width: '24px',
                      height: '24px',
                    }}
                  />
                </a>
              </li>
              <li>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <div className="flex">
          <div className="hidden lg:block">
            <SidebarContent />
          </div>
          <Upload />
        </div>
      </div>
      <div className="drawer-side lg:drawer-open">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-slate-500">
          {/* Sidebar content here */}
          <li>
            <a href="">
              <div className="flex justify-center items-center gap-6">
                <div>
                  <MdSpaceDashboard
                    style={{
                      height: '24px',
                      width: '24px',
                    }}
                  />
                </div>
                <p>Dashboard</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="flex justify-center items-center gap-6">
                <div>
                  <FaUpload
                    style={{
                      height: '24px',
                      width: '24px',
                    }}
                  />
                </div>
                <p>Upload</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="flex justify-center items-center gap-6">
                <div>
                  <FaFileInvoice
                    style={{
                      height: '24px',
                      width: '24px',
                    }}
                  />
                </div>
                <p>Invoice</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="flex justify-center items-center gap-6">
                <div>
                  <AiFillSchedule
                    style={{
                      height: '24px',
                      width: '24px',
                    }}
                  />
                </div>
                <p>Schedule</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="flex justify-center items-center gap-6">
                <div>
                  <BsCalendar2DateFill
                    style={{
                      height: '24px',
                      width: '24px',
                    }}
                  />
                </div>
                <p>Calender</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="flex justify-center items-center gap-6">
                <div>
                  <IoIosNotifications
                    style={{
                      height: '24px',
                      width: '24px',
                    }}
                  />
                </div>
                <p>Dashboard</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div className="flex justify-center items-center gap-6">
                <div>
                  <IoSettingsSharp
                    style={{
                      height: '24px',
                      width: '24px',
                    }}
                  />
                </div>
                <p>Dashboard</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default page;
