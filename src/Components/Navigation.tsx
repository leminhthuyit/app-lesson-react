import { Link } from "react-router-dom";
import { dataNav } from "../constants/home";

const Navigation = () => {
  return (
    <div className="bg-gradient-to-r text-white from-blue-500 to-cyan-500 flex justify-between items-center px-20 py-4">
      <p className="font-sans text-3xl font-bold">ARSHA</p>
      <ul className="flex space-x-20 ">
        {dataNav.map((item) => (
          <li key={item.id} className="font-medium">
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <button className="font-medium bg-gradient-to-r from-purple-500 to-pink-500 w-28 h-10 rounded-xl">Login</button>
    </div>
  );
};

export default Navigation;
