import Link from "next/link"
import {ReactNode} from "react"

type NavItemProps = {
    href : string
    children : ReactNode
    onClick? : Function
}

const NavItem : React.FC<NavItemProps> = ({ href, children, onClick}) => {

    const onclick = () => {
        if(onClick != undefined) onClick()
    }

    return <li onClick={onclick}><Link href={href} className="text-white-950 hover:text-white-500 hover:underline hover:underline-offset-8">{children}</Link></li>
}

export default NavItem;