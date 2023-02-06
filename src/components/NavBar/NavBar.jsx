import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import 'boxicons'

const NavBar = (props) => {

  const [buscador, setBuscador] = useState("");
  const navigate = useNavigate();

  const {logo} = props;

  const [estado, setEstado] = useState(false);
  const [searchResponsive, setSearchResponsive] = useState(false);

  function aparecerSearch (valor) {
    if (valor){
      setSearchResponsive(false);
    }else{
      setSearchResponsive(true);
    }
  }

  function aparecerMenu (valor) {
    if (valor){
      setEstado(false);
    }else{
      setEstado(true);
    }
  }

  return (
    <div>
      <div className='space'></div>
      <nav>
        <div className='logo'>
          <Link to={`/`}><img src={logo} alt="logo" /></Link>
        </div>
        <form className='containerBuscador' onSubmit={ev => {
          ev.preventDefault()
          setBuscador(`/search/${ev.target.search.value}/tidy/mayor`)
          navigate(buscador)
        }}>
          <input type="text" placeholder='Buscar' className='buscador' name='search'/>
          <button className='btnBuscador'><box-icon size='sm' name='search' color='grey' ></box-icon></button>
        </form>
        <ul className='ul-desktop'>
          <li><Link to={`/`}>Inicio</Link></li>
          <li><Link to={`/contacto`}>Contacto</Link></li>
          <li><Link to={`/nosotros`}>Nosotros</Link></li>
        </ul>
        <div className="btn-menu">
          <box-icon size='md' name='search' color='grey' onClick={() => aparecerSearch(searchResponsive)}></box-icon>
          <box-icon size='md' name='menu' color='grey' onClick={() => aparecerMenu(estado)}></box-icon>
        </div>
        {estado == true && <div className='burguer-menu'><ul className='menu'><li><Link to={`/`}>Inicio</Link></li><li><Link to={`/contacto`}>Contacto</Link></li><li><Link to={`/nosotros`}>Nosotros</Link></li></ul></div>}
        
        {searchResponsive == true && <div className='containerBuscadorResponsive'>
          <button className='btnBuscadorResponsive' onClick={() => aparecerSearch(searchResponsive)}><box-icon name='arrow-back' color='grey'></box-icon></button>
          <form className='formBuscadorResponsive' onSubmit={ev => {
            ev.preventDefault()
            setBuscador(`/search/${ev.target.search.value}/tidy/mayor`)
            navigate(buscador)
          }}>
            <input type="text" placeholder='Buscar' className='buscador' name='search'/>
            <button className='btnBuscador'><box-icon size='sm' name='search' color='grey' ></box-icon></button>
          </form>
        </div>}

        

        
        
      </nav>
    </div>
    
  )
}

export default NavBar