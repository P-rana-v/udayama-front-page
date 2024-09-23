import { useEffect,useState } from "react"

function Navbar() {
    const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false); 
    } else { 
      setShow(true);  
    }
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);
    return (
        <nav className={`navbar ${!show && 'hidden'}`}>
            <label>logo</label>
            <div className="nav-flex">
                <label>Home</label>
                <label>Events</label>
                <label>Downloads</label>
                <label>Leadership</label>
                <label>Contact Us</label>
                <button className="button login-button">Log In</button>
            </div>
        </nav>
    )
}

export default Navbar