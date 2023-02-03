import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import db from '../../services'
import { collection, getDocs } from 'firebase/firestore';
import Footer from '../Footer/Footer.jsx';
import Facebook from '../../img/facebook.svg';
import Instagram from '../../img/instagram.svg';
import Whatsapp from '../../img/whatsapp.svg';

const Viajes = () => {

  const [viajes, setViajes] = useState([]);
  const [banners, setBanners] = useState([]);
  const params = useParams();
  const Banner = params ? banners.filter((item) => item.categoria === params.id) : banners
  const Categoria = params ? viajes.filter((item) => item.categoria === params.id) : viajes

  const [ordenar, setOrdenar] = useState([]);

  function aparecerOrdenar (ordenar) {
    if (ordenar){
      setOrdenar(false)
    }else{
      setOrdenar(true)
    }
  }

  if (params.ti == "mayor") {
    Categoria.sort(function(a, b) {
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
    Categoria.sort(function(a, b) {
      if (a.precio > b.precio) {
        return 1;
      }
      if (a.precio < b.precio) {
        return -1;
      }
      return 0;
    });
  }

  
  
  const filtradoProvincia = params ? Categoria.filter((item) => item.provincia === params.dest) : viajes
  const filtradoPlayas = params ? Categoria.filter((item) => item.playa === params.dest) : viajes
  const filtradoEuropa = params ? Categoria.filter((item) => item.pais === params.dest) : viajes
  const filtradoLatam = params ? Categoria.filter((item) => item.pais === params.dest) : viajes
  const filtradoIslas = params ? Categoria.filter((item) => item.pais === params.dest) : viajes

  
  const [provincias, setProvincias] = useState([]);

  function aparecerProvincias (provincias) {
    if (provincias){
      setProvincias(false)
    }else{
      setProvincias(true)
    }
  }

  const arrayProvincias = [{id: "all" ,nombre: "Todos"},{id: "bsas" ,nombre: "Buenos Aires"},{id: "fe" ,nombre: "Santa Fe"},{id: "cordoba" ,nombre: "Cordoba"},{id: "rios" ,nombre: "Entre Rios"},{id: "corrientes" ,nombre: "Corrientes"},{id: "misiones" ,nombre: "Misiones"},{id: "mendoza" ,nombre: "Mendoza"},{id: "jujuy" ,nombre: "Jujuy"},{id: "salta" ,nombre: "Salta"},{id: "tucuman" ,nombre: "Tucuman"},{id: "estero" ,nombre: "Santiago Del Estero"},{id: "chaco" ,nombre: "Chaco"},{id: "formosa" ,nombre: "Formosa"},{id: "negro" ,nombre: "Rio Negro"},{id: "pampa" ,nombre: "La Pampa"},{id: "fuego" ,nombre: "Tierra Del Fuego"},{id: "neuquen" ,nombre: "Neuquen"},{id: "juan" ,nombre: "San Juan"},{id: "cruz" ,nombre: "Santa Cruz"},{id: "chubut" ,nombre: "Chubut"}, {id: "luis" ,nombre: "San Luis"}, {id: "rioja" ,nombre: "La Rioja"}, {id: "catamarca" ,nombre: "Catamarca"}];



  const [playas, setPlayas] = useState([]);

  function aparecerPlayas (playas) {
    if (playas){
      setPlayas(false)
    }else{
      setPlayas(true)
    }
  }

  const arrayPlayas = [{id: "all" ,nombre: "Todos"},{id: "bahia" ,nombre: "Salvador de Bahía"},{id: "recife" ,nombre: "Recife"},{id: "olinda" ,nombre: "Olinda"},{id: "rio" ,nombre: "Río de Janeiro"},{id: "buzios" ,nombre: "Buzios"},{id: "iguazu" ,nombre: "Parque Nacional de Iguazú"},{id: "ruinas" ,nombre: "Ruinas de San Miguel de las Misiones"},{id: "ouropreto" ,nombre: "OuroPreto"},{id: "brasilia" ,nombre: "Brasilia"},{id: "manaos" ,nombre: "Manaos"}];


  const [islas, setIslas] = useState([]);

  function aparecerIslas (islas) {
    if (islas){
      setIslas(false)
    }else{
      setIslas(true)
    }
  }

  const arrayIslas = [{id: "all" ,nombre: "Todos"},{id: "barbuda" ,nombre: "Antigua y Barbuda"},{id: "bahamas" ,nombre: "Bahamas"},{id: "barbados" ,nombre: "Barbados"},{id: "cuba" ,nombre: "Cuba"},{id: "dominica" ,nombre: "Dominica"},{id: "granada" ,nombre: "Granada"},{id: "haiti" ,nombre: "Haití"},{id: "jamaica" ,nombre: "Jamaica"},{id: "dominicana" ,nombre: "República Dominicana"},{id: "cristobal" ,nombre: "San Cristóbal y Nieves"},{id: "granadinas" ,nombre: "San Vicente y las Granadinas"},{id: "lucia" ,nombre: "Santa Lucía"},{id: "trinidad" ,nombre: "Trinidad y Tobago"},{id: "mexico" ,nombre: "México"},{id: "belice" ,nombre: "Belice"},{id: "costarica" ,nombre: "Costa Rica"},{id: "panama" ,nombre: "Panamá"},{id: "nicaragua" ,nombre: "Nicaragua"},{id: "honduras" ,nombre: "Honduras"},{id: "puertorico" ,nombre: "Puerto Rico"}];

  const [europa, setEuropa] = useState([]);

  function aparecerEuropa (europa) {
    if (europa){
      setEuropa(false)
    }else{
      setEuropa(true)
    }
  }

  const arrayEuropa = [{id: "all" ,nombre: "Todos"},{id: "alemania" ,nombre: "Alemania"},{id: "reino" ,nombre: "Reino Unido"},{id: "italia" ,nombre: "Italia"},{id: "francia" ,nombre: "Francia"},{id: "ucrania" ,nombre: "Ucrania"},{id: "bajos" ,nombre: "Paises Bajos"},{id: "suiza" ,nombre: "Suiza"},{id: "grecia" ,nombre: "Grecia"},{id: "polonia" ,nombre: "Polonia"},{id: "austria" ,nombre: "Austria"},{id: "suecia" ,nombre: "Suecia"},{id: "belgica" ,nombre: "Belgica"},{id: "noruega" ,nombre: "Noruega"},{id: "irlanda" ,nombre: "Irlanda"},{id: "dinamarca" ,nombre: "Dinamarca"},{id: "croacia" ,nombre: "Croacia"},{id: "checa" ,nombre: "Republica Checa"},{id: "islandia" ,nombre: "Islandia"},{id: "finlandia" ,nombre: "Finlandia"},{id: "serbia" ,nombre: "Serbia"}, {id: "hungria" ,nombre: "Hungria"}, {id: "luxemburgo" ,nombre: "Luxemburgo"}, {id: "4slovenia" ,nombre: "Eslovenia"}, {id: "bosnia" ,nombre: "Bosnia"}, {id: "monaco" ,nombre: "Monaco"}, {id: "andorra" ,nombre: "Andorra"}];


  const [latam, setLatam] = useState([]);

  function aparecerLatam (latam) {
    if (latam){
      setLatam(false)
    }else{
      setLatam(true)
    }
  }

  const arrayLatam = [{id: "all" ,nombre: "Todos"},{id: "argentina" ,nombre: "Argentina"},{id: "bolivia" ,nombre: "Bolivia"},{id: "brasil" ,nombre: "Brasil"},{id: "chile" ,nombre: "Chile"},{id: "colombia" ,nombre: "Colombia"},{id: "costarica" ,nombre: "Costa Rica"},{id: "cuba" ,nombre: "Cuba"},{id: "ecuador" ,nombre: "Ecuador"},{id: "salvador" ,nombre: "El Salvador"},{id: "guatemala" ,nombre: "Guatemala"},{id: "guyana" ,nombre: "Guyana"},{id: "haiti" ,nombre: "Haiti"},{id: "honduras" ,nombre: "Honduras"},{id: "jamaica" ,nombre: "Jamaica"},{id: "mexico" ,nombre: "Mexico"},{id: "nicaragua" ,nombre: "Nicaragua"},{id: "panama" ,nombre: "Panama"},{id: "paraguay" ,nombre: "Paraguay"},{id: "peru" ,nombre: "Peru"},{id: "dominicana" ,nombre: "Republica Dominicana"}, {id: "surinam" ,nombre: "Surinam"}, {id: "uruguay" ,nombre: "Uruguay"}, {id: "venezuela" ,nombre: "Venezuela"}];


  useEffect(() => {

    const getData = async () => {
      const data = collection(db, "banners");
      const col = await getDocs(data);
      const res = col.docs.map((doc) => doc={id:doc.id, ...doc.data()} );
      return res;
  }
  
  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getData())
      
    }, 500);
  })

  task
    .then((resultado) => {
      setBanners(resultado)
    })
    .catch((err) => console.log(err))

  return () => {
      
  }
}, [])

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
      
    }, 1000);
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
        {Banner.map((item, index) => (
          <img src={item.img} alt="" />
        ))}
        <div className='gradientBanner'></div>
        <h1>Viajes</h1>
        <div className='ordenarContainer'>
          {ordenar == true &&<div className='ordenar'>
            <Link to={`/category/${params.id}/destination/all/tidy/mayor`}><p><b>Precio: </b>De mayor a menor</p></Link>
            <Link to={`/category/${params.id}/destination/all/tidy/menor`}><p><b>Precio: </b>De menor a mayor</p></Link>
          </div>}
          <p onClick={() => aparecerOrdenar(ordenar)} className='textoOrdenar'>Ordenar ↓</p>
        </div>
      </div>
      <div className='filtrosYcategorias'>
        <div className='viajesFiltros'>
          {params.id == "busarg" && <div className='btnProvincias' onClick={() => aparecerProvincias(provincias)}>Ver provincias</div>}
          {params.id == "argavion" && <div className='btnProvincias' onClick={() => aparecerProvincias(provincias)}>Ver provincias</div>}
          {provincias == true && <div className='provincias'>
            <ul>
              {arrayProvincias.map((item, index) => (
                <li>
                  <Link to={`/category/${params.id}/destination/${item.id}/tidy/mayor`}>{item.nombre}</Link>
                </li>
              ))}
            </ul>
          </div>}
          {params.id == "brasil" && <div className='btnProvincias' onClick={() => aparecerPlayas(playas)}>Ver playas</div>}
          {playas == true && <div className='provincias'>
            <ul>
              {arrayPlayas.map((item, index) => (
                <li>
                  <Link to={`/category/${params.id}/destination/${item.id}/tidy/mayor`}>{item.nombre}</Link>
                </li>
              ))}
            </ul>
          </div>}
          {params.id == "caribe" && <div className='btnProvincias' onClick={() => aparecerIslas(islas)}>Ver islas</div>}
          {islas == true && <div className='provincias'>
            <ul>
              {arrayIslas.map((item, index) => (
                <li>
                  <Link to={`/category/${params.id}/destination/${item.id}/tidy/mayor`}>{item.nombre}</Link>
                </li>
              ))}
            </ul>
          </div>}
          {params.id == "europa" && <div className='btnProvincias' onClick={() => aparecerEuropa(europa)}>Ver paises</div>}
          {europa == true &&<div className='provincias'>
            <ul>
              {arrayEuropa.map((item, index) => (
                <li>
                  <Link to={`/category/${params.id}/destination/${item.id}/tidy/mayor`}>{item.nombre}</Link>
                </li>
              ))}
            </ul>
          </div>}
          {params.id == "latinoamerica" && <div className='btnProvincias' onClick={() => aparecerLatam(latam)}>Ver paises</div>}
          {latam == true &&<div className='provincias'>
            <ul>
              {arrayLatam.map((item, index) => (
                <li>
                  <Link to={`/category/${params.id}/destination/${item.id}/tidy/mayor`}>{item.nombre}</Link>
                </li>
              ))}
            </ul>
          </div>}
        </div>
        {params.dest == "all" && <div className='containerLinkCategoriaViajes'>
          {Categoria.map((item, index) => (
              <Link className='linkCategoria' to={`/travel-detail/${item.id}`}>
                <div className='containerCategoria' >
                  <img src={item.img} alt=""/>
                  <div className='nombreCategoria'>
                    <h5 className='gradientViajes'>{item.nombre.toUpperCase()}<p className='precioCategoria'>${item.precio}</p></h5>
                  </div>
                </div>
              </Link>
          ))}
        </div>}
        {params.dest != "all" && params.id == "busarg" && <div className='containerLinkCategoriaViajes'>
          {filtradoProvincia.map((item, index) => (
              <Link className='linkCategoria' to={`/travel-detail/${item.id}`}>
                <div className='containerCategoria' >
                  <img src={item.img} alt=""/>
                  <div className='nombreCategoria'>
                    <h5>{item.nombre.toUpperCase()}<p className='precioCategoria'>${item.precio}</p></h5>
                  </div>
                </div>
              </Link>
          ))}
        </div>}
        {params.dest != "all" && params.id == "brasil" && <div className='containerLinkCategoriaViajes'>
          {filtradoPlayas.map((item, index) => (
              <Link className='linkCategoria' to={`/travel-detail/${item.id}`}>
                <div className='containerCategoria' >
                  <img src={item.img} alt=""/>
                  <div className='nombreCategoria'>
                    <h5>{item.nombre.toUpperCase()}<p className='precioCategoria'>${item.precio}</p></h5>
                  </div>
                </div>
              </Link>
          ))}
        </div>}
        {params.dest != "all" && params.id == "europa" && <div className='containerLinkCategoriaViajes'>
          {filtradoEuropa.map((item, index) => (
              <Link className='linkCategoria' to={`/travel-detail/${item.id}`}>
                <div className='containerCategoria' >
                  <img src={item.img} alt=""/>
                  <div className='nombreCategoria'>
                    <h5>{item.nombre.toUpperCase()}<p className='precioCategoria'>${item.precio}</p></h5>
                  </div>
                </div>
              </Link>
          ))}
        </div>}
        {params.dest != "all" && params.id == "latinoamerica" && <div className='containerLinkCategoriaViajes'>
          {filtradoLatam.map((item, index) => (
              <Link className='linkCategoria' to={`/travel-detail/${item.id}`}>
                <div className='containerCategoria' >
                  <img src={item.img} alt=""/>
                  <div className='nombreCategoria'>
                    <h5>{item.nombre.toUpperCase()}<p className='precioCategoria'>${item.precio}</p></h5>
                  </div>
                </div>
              </Link>
          ))}
        </div>}
        {params.dest != "all" && params.id == "caribe" && <div className='containerLinkCategoriaViajes'>
          {filtradoIslas.map((item, index) => (
              <Link className='linkCategoria' to={`/travel-detail/${item.id}`}>
                <div className='containerCategoria' >
                  <img src={item.img} alt=""/>
                  <div className='nombreCategoria'>
                    <h5>{item.nombre.toUpperCase()}<p className='precioCategoria'>${item.precio}</p></h5>
                  </div>
                </div>
              </Link>
          ))}
        </div>}
      </div>
      <Footer key="Footer" Facebook={Facebook} Instagram={Instagram} Whatsapp={Whatsapp}/>
    </div>
  )
}

export default Viajes