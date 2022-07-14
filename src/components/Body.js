import { useState, useEffect } from 'react';
import imagen1 from '../images/imagen-1.jpg';
import imagen2 from '../images/imagen-2.png';
import imagen3 from '../images/imagen-3.png';

function Body() {

    const [cellPhones, setCellPhones] = useState([]);

    useEffect(() => {
        let arraycell = [
            {
                marca: "A50",
                modelo: 1,
                precio: 6000,
                imagen: imagen1
            },
            {
                marca: "A51",
                modelo: 1,
                precio: 8000,
                imagen: imagen2
            },
            {
                marca: "A30",
                modelo: 1,
                precio: 5000,
                imagen: imagen3
            }
        ]

        setCellPhones(arraycell);
    }, [])

    return (
        <main className="main">
            <div>
                <input className="body-input" autoFocus />
            </div>
            <div className="cellphones">
                {
                    cellPhones.map((cell, index) => (
                        <div className="cellphone" key={index}>
                            <img className="image" src={cell.imagen}></img>
                            <h2>Marca: {cell.marca}</h2>
                            <h2>Modelo: {cell.modelo}</h2>
                            <h2>Precio: {cell.precio}</h2>
                            <div className="group-btn">
                                <button className="btn">
                                    +
                                </button>
                                <button className="btn">
                                    -
                                </button>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </main>
    )
}

export default Body; 