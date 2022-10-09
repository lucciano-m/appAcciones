import React, {useEffect, useState} from "react";
import Header from "../../components/header/Header";
import getActions from "../../helpers/getActions";
import getMoreActions from "../../helpers/getMoreActions";
import { MultiSelect } from "react-multi-select-component";

function Acciones()
{
    const [acciones, setAcciones] = useState();
    const [masAcciones, setMasAcciones] = useState();
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        updateMoreActions();
        updateActions();
    }, [])
    
    const updateActions = () => {
        getActions() 
            .then((newActions) =>{
                setAcciones(newActions);
        })
    }

    const updateMoreActions = () => {
        getMoreActions() 
            .then((newMoreActions) =>{
                setMasAcciones(newMoreActions);
        })
    }

    

    return(
        <>
        <Header title='Mis acciones' nameUser='Prueba'/>
        <div className="container p-0">
            <div className="col-12 pb-4 d-flex px-0 justify-content-between align-items-center">
                <div className="col-6 d-flex align-items-center">
                    <label htmlFor="symbol" className="mb-0 mr-3">Simbolo</label>
                    {
                        masAcciones &&
                            <MultiSelect className="w-100" options={masAcciones} value={selected} onChange={setSelected} label="Agregar acción"/> 
                    }
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <button className="btn btn-secondary">Agregar Símbolo</button>
                </div>
            </div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Simbolo</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Moneda</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        acciones &&
                        acciones.data.map((item) => {
                            return <tr key={item.country}>
                                        <th scope="row">{item.symbol}</th>
                                        <td>{item.name}</td>
                                        <td>{item.currency}</td>
                                        <td><button className="btn btn-danger">Eliminar</button></td>
                                   </tr>
                    })
                    }
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Acciones