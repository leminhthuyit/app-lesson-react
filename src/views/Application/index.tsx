import { Link } from "react-router-dom";
import Navigation from "../../Components/Navigation";
import { exercisesList } from "../../constants/applications";
import "./styled.scss";

const Application = () => {
  return (
    <div className="bg-cyan-50">
      <Navigation />
      <div className="font-mono flex flex-col items-center text-center text-white pt-4">
        <h1 className="p-2 text-4xl font-black w-1/4 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-md shadow-lg shadow-sky-700">
          APPS
        </h1>
        <p className="p-2 mt-3 w-2/5 font-bold bg-gradient-to-r from-sky-400 to-indigo-500 rounded-md shadow-lg shadow-sky-700">
          Danh sách các bài tập thực hành kỹ thuật Javascript từ cơ bản đến nâng
          cao
        </p>
      </div>
      <div className="mt-10 p-10 grid grid-cols-3 gap-12">
        {exercisesList.map((item) => (
          <Link key={item.id} to={item.path}>
            <div className="effect-up-down h-64 bg-gray-50 rounded-lg shadow-lg shadow-slate-500 flex flex-col flex-nowrap justify-evenly items-center">
              <h1 className="font-bold text-lg">Bài tập {item.order}</h1>
              <div>
                <img
                  src="https://png2.cleanpng.com/sh/49af544103bbe6c5cb3b5281f1196c00/L0KzQYm3V8E3N5hni5H0aYP2gLBuTf1ifJlqhdN9aXP2Pb7olPhmdZJ5gdVqbD3xf8XolPlwdl54kd9rb3ywfsb0gvVzNZR0Rdtsb36wfbL7iPVuaaVueAU2NXK3c7PshvY1QGpmT6g3NEG0RoO3VcgyPWQ2T6cBMki6QoqAVL5xdpg=/kisspng-mathematics-mathematical-notation-symbol-number-co-icon-mathematics-5b4cbeff489a76.4116205815317562872974.png"
                  alt=""
                  className="w-32 h-32"
                />
              </div>
              <p className="font-bold text-lg">{item.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Application;
