import { ReactNode } from "react";
import { FaHome, FaVideo, FaBell, FaPaw } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { Link } from "react-router-dom"

interface iconProps{
    icon: ReactNode;
    title: string;
    href: string

}

const iconsData :iconProps[] = [
    {
      title: 'Home',
      icon: <FaHome />,
      href: '/',
    },
    {
      title: 'Mensagens',
      icon: <TiMessages />,
      href: '/',
    },
    {
      title: 'Mídia',
      icon: <FaVideo />,
      href: '/',
    },
    {
      title: 'Notificações',
      icon: <FaBell />,
      href: '/',
    },
    {
      title: 'Adoção',
      icon: <FaPaw />,
      href: '/',
    },
    {
      title: 'Perfil',
      icon: <FaCircleUser />,
      href: '/',
    },
  ];
export default function Icon() {
    return(
        <>
        {iconsData.map((item, index) => (
            <Link to={item.href}
            className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center hover:text-verde text-black"
            key={index}
            >
            <div className="flex flex-col items-center">
                <div className="text-2xl">
                    {item.icon}
                </div>
                <span className="text-sm mt-1">
                    {item.title}
                </span>
            </div>   
            </Link>
        ))}
            
        </>
    )
}