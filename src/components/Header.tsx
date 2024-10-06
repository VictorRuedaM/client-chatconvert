import logo from "../assets/telegram.png";
export const Header = () => {
  return (
    <header className=" w-screen flex  items-start bg-teal-300 p-3 mb-auto">
      <img className="w-20 h-20" src={logo} alt="Logo" />
      <h1 className="text-white font-extrabold text-[50px] italic ml-2">
        Telecovert
      </h1>
    </header>
  );
};
