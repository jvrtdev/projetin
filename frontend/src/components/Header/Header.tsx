import { FaHome, FaVideo, FaBell, FaPaw} from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { Link } from "react-router-dom";

const Header = () => {
 return (
    <>
   <header className="bg-white flex items-center m-4 justify-around p-2">
     <img src="../../../../../public/logo.png" alt="Logo-petConnect" className="w-40 h-auto" />
     <input
       type="text"
       placeholder="O que você está procurando?"
       className="bg-gray-200 text-black p-2 rounded-full w-[30%] placeholder:text-black"
     />
     <div className="flex items-center space-x-5 m-5">
       <Link to=""  className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center hover:text-verde" >
         <FaHome className="text-2xl ml-2"  />
         <span className="text-sm">Home</span>
       </Link>
       <Link to=""  className="mr-2 hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center hover:text-verde" >
         <TiMessages className="text-2xl ml-6" />
         <span className="text-sm mr-2">Mensagens</span>
       </Link>
       <Link to=""  className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center hover:text-verde" >
         <FaVideo className="text-2xl ml-2" />
         <span className="text-sm">Mídia</span>
       </Link>
       <Link to=""  className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center hover:text-verde" >
         <FaBell className="text-2xl ml-6" />
         <span className="text-sm">Notificações</span>
       </Link>
       <Link to=""  className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center hover:text-verde" >
         <FaPaw className="text-2xl ml-2" />
         <span className="text-sm">Adoção</span>
       </Link>
       <Link to="" className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center hover:text-verde" >
         <FaCircleUser  className="text-2xl ml-1" />
         <span className="text-sm">Perfil</span>
       </Link>
     </div>
   </header>
    </>
 );
};

export default Header;
