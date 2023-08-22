import { CiMenuFries } from "react-icons/ci";

function Header({toggleMenu}) {
  
  
  return (
    <>
      <div dir="rtl" className="flex justify-between border-b-2 border-black py-9 px-40">
        <h1 className="text-6xl">avantgard</h1>
        <button
        onClick={toggleMenu}
        className="hover:bg-gray-100 rounded-full p-5">
          <CiMenuFries size={50} />
        </button>
      </div>
    </>
  );
}

export default Header;
