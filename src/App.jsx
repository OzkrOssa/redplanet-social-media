import Logo from "./assets/logo_redplanet.png";
import { SocialIcon } from "react-social-icons";

function App() {
  return (
    <div className="min-h-screen p-5 grid place-items-center font-[Poppins]">
      <div className="text-center">
        <img src={Logo} alt="logo" />
        <h1 className="text-[#7c2e82] text-3xl font-bold mb-10 mt-10">
          ¡Bienvenido!
        </h1>
        <div className="flex justify-center space-x-6 mt-5">
          <SocialIcon
            network="whatsapp"
            bgColor="#25d366"
            style={{ height: 50, width: 50 }}
            url="https://wa.me/+573185533874?text=Hola,%20estoy%20interesado%20en%20tu%20producto."
            className="hover:opacity-80"
          />
          <SocialIcon
            network="facebook"
            bgColor="#3b5998"
            className="hover:opacity-80"
            style={{ height: 50, width: 50 }}
            url="https://www.facebook.com/people/Red-Planet/100041521789739/?mibextid=WC7FNe&rdid=d1oa7HkyCr58fpX7"
          />
          <SocialIcon
            network="instagram"
            bgColor="#e4405f"
            style={{ height: 50, width: 50 }}
            url="https://www.instagram.com/internet_red_planet/"
            className="hover:opacity-80"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
