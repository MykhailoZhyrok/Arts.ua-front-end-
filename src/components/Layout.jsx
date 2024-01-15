import React, {useState, useEffect} from 'react'
import { Navbar } from './Navbar'
import cl from './layout.module.css'

export const Layout = ({children}) => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <React.Fragment>
        <div className={`${cl.navbar} ${isMobile ? cl.mobile : ''}`}>
        <Navbar isMobile={isMobile} />
        </div>
        {children}
    </React.Fragment>
  )
}
