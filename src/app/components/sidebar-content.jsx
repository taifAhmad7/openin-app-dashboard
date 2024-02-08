import { FaUpload } from 'react-icons/fa';
import { FaFileInvoice } from 'react-icons/fa';
import { AiFillSchedule } from 'react-icons/ai';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { IoIosNotifications } from 'react-icons/io';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdSpaceDashboard } from 'react-icons/md';

function SidebarContent() {
  return (
    <ul className="flex flex-col pl-12 items-start gap-y-8 pt-8 text-md font-semibold h-screen w-64 bg-slate-100 text-slate-500">
      <li className="flex justify-center items-center gap-6">
        <div>
          <MdSpaceDashboard
            style={{
              height: '24px',
              width: '24px',
            }}
          />
        </div>
        <p>Dashboard</p>
      </li>
      <li className="flex justify-center items-center gap-6">
        <div>
          <FaUpload
            style={{
              height: '24px',
              width: '24px',
            }}
          />
        </div>
        <p>Upload</p>
      </li>
      <li className="flex justify-center items-center gap-6">
        <div>
          <FaFileInvoice
            style={{
              height: '24px',
              width: '24px',
            }}
          />
        </div>
        <p>Incoice</p>
      </li>
      <li className="flex justify-center items-center gap-6">
        <div>
          <AiFillSchedule
            style={{
              height: '24px',
              width: '24px',
            }}
          />
        </div>
        <p>Schedule</p>
      </li>
      <li className="flex justify-center items-center gap-6">
        <div>
          <BsCalendar2DateFill
            style={{
              height: '24px',
              width: '24px',
            }}
          />
        </div>
        <p>Calender</p>
      </li>
      <li className="flex justify-center items-center gap-6">
        <div>
          <IoIosNotifications
            style={{
              height: '24px',
              width: '24px',
            }}
          />
        </div>
        <p>Notification</p>
      </li>
      <li className="flex justify-center items-center gap-6">
        <div>
          <IoSettingsSharp
            style={{
              height: '24px',
              width: '24px',
            }}
          />
        </div>
        <p>Settings</p>
      </li>
    </ul>
  );
}

export default SidebarContent;
