import Navbar from "../Navbar"
import Hero from "./hero"

const Header : React.FC = () => {
    return (
        <header>
            <Navbar/>
            <Hero/>
        </header>   
    )
}

export default Header