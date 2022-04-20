import Title from "../components/Title";
import {Link} from "react-router-dom";
import "./Header.css"

export default function Header() {
    return (
        <header>
            <Title />
            <div className={"nav"}>
                <div className={"home"}>
                    <Link to={"/"}>
                        Home
                    </Link>
                </div>
                <div className={"blabla"}>
                    <Link to={"/gallery"}>
                        Gallery
                    </Link>
                </div>


            </div>

        </header>




    )
}