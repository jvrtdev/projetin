import { Link } from "react-router-dom"

interface iconProps{
    icon: any;
    title: string;
    href: string

}

export default function Icon({ icon, title, href } :iconProps) {
    return(
        <Link to={href}
        className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center hover:text-verde"
        >
        <div className="flex flex-col items-center">
            <div className="text-2xl">
                {icon}
            </div>
            <span className="text-sm mt-1">
                {title}
            </span>
        </div>   
        </Link>
    )
}