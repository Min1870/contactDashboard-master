import {AiOutlinePlus} from "react-icons/ai"
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <>
    <Link to={'/create'}>
      <div className="absolute bottom-6 right-6 lg:hidden">
        <div className="flex justify-center items-center transition w-14 h-14 rounded-full shadow-lg bg-slate-200/60  hover:bg-slate-300/50 ">
          <AiOutlinePlus size={30} className=" text-blue-500" />
        </div>
      </div>
    </Link>
    </>
  );
};

export default Contacts;
