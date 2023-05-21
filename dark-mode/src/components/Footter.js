import { ThemeContext } from "../App"
import { useContext } from "react";

const Footter=()=>{
    const {theme} = useContext(ThemeContext);
    return(
        <footer className={theme==='dark'?'dark':'light'}>
            <p>Copy Right 2022</p>
        </footer>
    )
}

export default Footter