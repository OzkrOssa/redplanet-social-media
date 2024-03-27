import Logo from "./assets/logo_redplanet.png";
import { SocialIcon } from "react-social-icons";

function App() {
  return (
    <div className="min-h-screen p-5 grid place-items-center">
      <div className="text-center">
        <img src={Logo} alt="logo" />
        <h1 className="text-[#7c2e82] text-3xl font-bold mb-10 mt-10">
          ¡Bienvenido!
        </h1>
        <div className="flex justify-center space-x-6 mt-5">
          <button
            onClick={() => console.log("click")}
            className="rounded-full p-2 bg-white"
          >
            <SocialIcon
              network="whatsapp"
              bgColor="#25d366"
              style={{ height: 50, width: 50 }}
            />
          </button>
          <button
            onClick={() => console.log("click")}
            className="rounded-full p-2 bg-white"
          >
            <SocialIcon
              network="facebook"
              bgColor="#3b5998"
              style={{ height: 50, width: 50 }}
            />
          </button>
          <button
            onClick={() => console.log("click")}
            className="rounded-full p-2 bg-white"
          >
            <SocialIcon
              network="instagram"
              bgColor="#e4405f"
              style={{ height: 50, width: 50 }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
