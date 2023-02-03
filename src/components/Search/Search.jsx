import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import db from '../../services'
import { collection, getDocs } from 'firebase/firestore';
import Footer from '../Footer/Footer.jsx';
import Facebook from '../../img/facebook.svg';
import Instagram from '../../img/instagram.svg';
import Whatsapp from '../../img/whatsapp.svg';
import Banner from '../../img/banner.jpg';

const Search = () => {

  const [viajes, setViajes] = useState([]);
  const params = useParams();
  const objetoBuscar = params ? viajes.filter((item) => item.busqueda.includes(params.id.toLowerCase())) : viajes

  const [ordenar, setOrdenar] = useState([]);

  function aparecerOrdenar (ordenar) {
    if (ordenar){
      setOrdenar(false)
    }else{
      setOrdenar(true)
    }
  }

  if (params.ti == "mayor") {
    objetoBuscar.sort(function(a, b) {
      if (a.precio > b.precio) {
        return -1;
      }
      if (a.precio < b.precio) {
        return 1;
      }
      return 0;
    });
  }

  if (params.ti == "menor") {
    objetoBuscar.sort(function(a, b) {
      if (a.precio > b.precio) {
        return 1;
      }
      if (a.precio < b.precio) {
        return -1;
      }
      return 0;
    });
  }

  useEffect(() => {

    const getData = async () => {
      const data = collection(db, "viajes");
      const col = await getDocs(data);
      const res = col.docs.map((doc) => doc={id:doc.id, ...doc.data()} );
      return res;
  }
  
  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getData())
      
    }, 400);
  })

  task
    .then((resultado) => {
      setViajes(resultado)
    })
    .catch((err) => console.log(err))

  return () => {
      
  }
}, [])

  return (
    <div>
      <div className='bannerViajes'>
        <img src={Banner} alt="" />
        <div className='gradientBanner'></div>
        <h1>Viajes</h1>
        <div className='ordenarContainer'>
          {ordenar == true &&<div className='ordenar'>
            <Link to={`/category/${params.id}/destination/all/tidy/mayor`}><p>de mayor a menor</p></Link>
            <Link to={`/category/${params.id}/destination/all/tidy/menor`}><p>de menor a mayor</p></Link>
          </div>}
          <p onClick={() => aparecerOrdenar(ordenar)} className='textoOrdenar'>Ordenar ↓</p>
        </div>
      </div>
      <div className='filtrosYcategorias'>
        {objetoBuscar.length > 0 && <div className='containerLinkCategoriaViajes'>
          {objetoBuscar.map((item, index) => (
              <Link className='linkCategoria' to={`/travel-detail/${item.id}`}>
                <div className='containerCategoria'>
                  <img src={item.img} alt=""/>
                  <div className='nombreCategoria'>
                    <h5>{item.nombre.toUpperCase()}</h5>
                  </div>
                </div>
              </Link>
          ))}
        </div>}
        {objetoBuscar.length == 0 && <div className='error'><b>No se encontraron resultados...</b></div>}
      </div>
      <Footer key="Footer" Facebook={Facebook} Instagram={Instagram} Whatsapp={Whatsapp}/>
    </div>
  )
}

export default Search