import React from 'react'

const NavBar = () => {
  const [handleShow, setHandleShow] = React.useState(false)
  React.useEffect(()=>{
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > 200){
        setHandleShow(true)
      } else setHandleShow(false)
    });
    return () => {
      window.removeEventListener("scroll", ()=>{})
    };

  }, [])
  const style= {background: handleShow ? "#141414" : ""} 
  return (
    <div style={style} className='navbar'>
        <img className='netflix-logo' src={require('./images/netflix_logo.png')} />
        <img className='user-logo' src={require('./images/user_logo.png')}/>
    </div>
  )
}

export default NavBar
