import { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from '../App'

const Title = () => {

    const {theme, setTheme} = useContext(ThemeContext)

    const toggleSwitch=(checked)=>{
        //ถ้าเป็น light ให้เปลี่ยนเป็น dark
        setTheme(theme==="light" ? "dark":"light"
        )
    }
    return(
        <header className={theme==='dark'?'dark':'light'}>
            <span>Mode [{theme}]</span>
            <Switch
                //การเปลี่ยน
                onChange={toggleSwitch}
                checked = {theme==="dark"}
                onColor='#ffa500'
                offColor='#2099FC'
            />
        </header>
    )
}

export default Title