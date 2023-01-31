import React, { useState, useEffect } from 'react'
import db from '../../services'
import { collection, getDocs } from 'firebase/firestore';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Categorias = () => {

    const [cat, setCat] = useState([]);
    const [buscador, setBuscador] = useState("");
    const navigate = useNavigate();

    useEffect(() => {

        const getData = async () => {
          const data = collection(db, "categorias");
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
          setCat(resultado)
        })
        .catch((err) => console.log(err))
    
      return () => {
          
      }
    }, [])

  return (
    <div>
        <div className='containerCategorias'>
          <div className='navCategorias'>
            <h1>CATEGORIAS</h1>
            <form className='containerBuscadorCategorias' onSubmit={ev => {
              ev.preventDefault()
              setBuscador(`/search/${ev.target.search.value}/tidy/mayor`)
              navigate(buscador)
            }}>
              <input type="text" placeholder='Buscar' className='buscadorCategorias' name='search'/>
              <button className='btnBuscadorCategorias'><box-icon size='sm' name='search' color='grey' ></box-icon></button>
            </form>
          </div>
          <div className='containerLinkCategoria'>
            {cat.map((item, index) => (
              <Link className='linkCategoria' to={`/category/${item.categoria}/destination/all/tidy/mayor`}>
                <div className='containerCategoria' >
                  <img src={item.img} alt=""/>
                  <div className='nombreCategoria'>
                    <h5>{item.nombre.toUpperCase()}</h5>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Categorias