import { useState, useContext } from "react";
import { DataContext } from '../../context/DataContext';
import Table from '../table/Table'
import "./style.css";

const Summary = () => {

  const { professionals, process } = useContext(DataContext);
  const [searchProfessional, setSearchProfessional] = useState([]);
  const [listNames, setListNames] = useState([]);
  const [infoTable, setInfoTable] = useState();
  const [infoProfessional, setInfoProfessional] = useState();

  const handleSearch = (event) => {
    if (event === "") {
      setListNames([]);
      setInfoTable([]);
      setSearchProfessional([]);
    } else {
      const queryMatch = professionals.filter((pro) => pro.name.toLowerCase().includes(event))
      setListNames(queryMatch)
    }
  };

  const displayDetails = (name) => {
    const newPro = [...professionals];
    const detail = newPro.filter((profesional) => { return profesional.name === name })
    setSearchProfessional(detail)
    setListNames([])
  }

  const displayTable = (name) => {
    const newPro = [...professionals];
    const detail = newPro.filter((profesional) => { return profesional.name === name })
    setInfoProfessional(detail)
    // console.log(detail[0].id)// CAMBIAR
    const newInfo = [...process];
    const aportes = newInfo.filter((profesional) => { return profesional.id === detail[0].id })
    // console.log(aportes[0].detail) // CAMBIAR
    setInfoTable(aportes[0].detail)
  }


  return (
    <>
      <h5>Resumen del profesional</h5>
      <input type="search" placeholder="Buscador" name="search" onChange={(e) => { handleSearch(e.target.value) }} />
      <ul style={{ listStyleType: "none", zIndex: "10", position: "absolute", backgroundColor: "red" }}>
        {listNames.map((professional) => {
          return <li className="sug" onClick={(e) => { displayDetails(e.target.outerText); displayTable(e.target.outerText) }}>
            {professional.name}
          </li>
        })}</ul>
      {searchProfessional.map((data) => (
        <ul >
          <div>
            <li>Nombre: {data.name}</li>
            <li>Nº Identidad:{data.state}</li>
            <li>ID {data.id_pers_correl}</li>
            <li>Mail {data.email}</li>
            <li>Departamento {data.department}</li>
            <li>Estado {data.state}</li>
          </div>
          <div>
            <li>Fecha Ingreso {data.date_admission}</li>
            <li>Trayectoria {data.time_elapsed}</li>
            <li>Tipo de Contrato {data.contract_type}</li>
            <li>CANTIDAD DE BOLETAS {infoTable.length} </li>
            <li>Monto Total Aportes {data.amount_tickets}</li>
          </div>
          <div>
          </div>
        </ul>
      ))}
      <Table infoTable={infoTable} infoProfessional={infoProfessional} />
    </>
  );
};
export default Summary;

// const filterCustom = (toSearch) => {
//   let result = data.filter(
//     (o) => o.idProfesional.includes(toSearch) || o.nombre.includes(toSearch)
//   );
//   return result;
// };
// let toSearch = event.target.value.split(",");
// let dataSearch = []
// toSearch.map((val) => {
//   if (val.trim() != '') {
//     dataSearch = dataSearch.concat(filterCustom(val.trim()));
//   }
// });
{/* <input type="text" placeholder="busqueda" onChange={(e) => { query(e.target.value); }} /> */ }
// onClick = {(e) => { displayDetails(e.target.outerText); displayTable(e.target.outerText) }}

{/* <div className="row">
        <div className="col">
          <ul>
            <li>
              <span className="key">Nombre:</span>
              <span className="value">Pedro</span>
            </li>
            <li>
              <span className="key">N° Ident:</span>
              <span className="value">1899939</span>
            </li>
            <li>
              <span className="key">ID:</span>
              <span className="value">129219</span>
            </li>
            <li>
              <span className="key">Mail:</span>
              <span className="value">pepi@gmail.com</span>
            </li>
            <li>
              <span className="key">Departamento:</span>
              <span className="value">Mi casa</span>
            </li>
            <li>
              <span className="key">Estado:</span>
              <span className="value">Acreditado</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>
              <span className="key">Nombre:</span>
              <span className="value">Pedro</span>
            </li>
            <li>
              <span className="key">N° Ident:</span>
              <span className="value">1899939</span>
            </li>
            <li>
              <span className="key">ID:</span>
              <span className="value">129219</span>
            </li>
            <li>
              <span className="key">Mail:</span>
              <span className="value">pepi@gmail.com</span>
            </li>
            <li>
              <span className="key">Departamento:</span>
              <span className="value">Mi casa</span>
            </li>
            <li>
              <span className="key">Estado:</span>
              <span className="value">Acreditado</span>
            </li>
          </ul>
        </div>
      </div> */}