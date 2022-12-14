import "./menu.scss"

const Menu = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={"menu "+(menuOpen && "active")} onClick={()=>setMenuOpen(false)}>
        <ul>
            <li>
                <a href="#intro">Home</a>
            </li>
            <li>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li>
                <a href="#works">Works</a>
            </li>
            <li>
                <a href="#testimonials">Testimonials</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu