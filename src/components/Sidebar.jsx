import { AiOutlinePlus } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";

import { NavLink } from "react-router-dom";

const Sidebar = () => {

  

  return (
    <div className="w-[300px] min-h-screen fixed bg-slate-50 text-slate-900 -translate-x-[100%] lg:translate-x-0">
      <ul className="flex flex-col gap-5 mt-4">
        <NavLink to={"/create"} className="ml-2">
          <div className=" w-fit px-6 py-3 rounded-full outline-none flex items-center gap-4 bg-white text-black shadow-lg transition-all hover:shadow-xl hover:text-blue-500">
            <AiOutlinePlus size={20} />
            Create Contact
          </div>
        </NavLink>
        <NavLink to={"/"} className="">
          <div className=" w-[250px]  flex justify-between items-center py-2 px-8 rounded-r-full transition-all hover:bg-gray-300">
            <div className=" flex items-center gap-x-5">
              <RiContactsLine className="" />
              <span>Contacts</span>
            </div>
            <span className="">8</span>
          </div>
        </NavLink>
        <NavLink to={"/detail"} className="">
          <div className=" w-[250px]  flex justify-between items-center py-2 px-8 rounded-r-full transition-all hover:bg-gray-300">
            <div className=" flex items-center gap-x-5">
              <RiContactsLine className="" />
              <span>Contacts</span>
            </div>
          </div>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
