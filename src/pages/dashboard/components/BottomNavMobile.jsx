import { BiBookOpen } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import PropTypes from "prop-types";
import logo from "../../../assets/logo.avif";
import { home, starting, records } from "../../../constants/app.routes";

function BottomNavMobile() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black border-t border-primary/30 shadow-inner flex justify-around items-center py-2 md:hidden text-gray-300">
      {/* Home Link */}
      <NavLink
        to={home}
        end
        className={({ isActive }) =>
          isActive
            ? "text-green-500 font-bold flex flex-col items-center"
            : "flex flex-col items-center"
        }
      >
        <BiHome className="text-2xl" />
        <p className="text-xs">Home</p>
      </NavLink>

      {/* Starting Link - Elevated Icon */}
      <NavLink
        to={`${home}/${starting}`}
        className={({ isActive }) =>
          isActive
            ? "text-green-500 font-bold flex flex-col items-center relative -top-5"
            : "flex flex-col items-center relative -top-5"
        }
      >
        <div className=" rounded-full p-3 bg-black border border-green-500 shadow-[0_0_18px_rgba(34,197,94,0.22)]">
          <div className="rounded-full w-12 overflow-hidden shadow-lg">
            <img src={logo} alt="Logo" className="w-auto h-auto" />
          </div>
          <p className="text-xs mt-1">Starting</p>
        </div>
      </NavLink>

      {/* Records Link */}
      <NavLink
        to={`${home}/${records}`}
        className={({ isActive }) =>
          isActive
            ? "text-green-500 font-bold flex flex-col items-center"
            : "flex flex-col items-center"
        }
      >
        <BiBookOpen className="text-2xl" />
        <p className="text-xs">Records</p>
      </NavLink>
    </div>
  );
}

BottomNavMobile.propTypes = {
  showside: PropTypes.bool,
  toggle: PropTypes.func,
};

export default BottomNavMobile;
