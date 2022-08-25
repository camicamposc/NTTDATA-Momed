import { useState, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Table from "../table/Table";
import ButtonAportes from "../Button-aportes/button-aportes";
import ButtonArriendos from "../Button-Arriendo";
import "./style.css";

const Summary = () => {
  const { professionals, process } = useContext(DataContext);
  const [searchProfessional, setSearchProfessional] = useState([]);
  const [listNames, setListNames] = useState([]);
  const [infoTable, setInfoTable] = useState();
  const [infoTableTemp, setInfoTableTemp] = useState([]);
  const [infoProfessional, setInfoProfessional] = useState();
  const [input, setInput] = useState();

  const handleSearch = (event) => {
    setInput(event);
    console.log(searchProfessional);
    let sortedProfessionals = [...professionals].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    const inputs = event.split(",");
    let matchNameOrId = sortedProfessionals.filter(
      (pro) =>
        pro.name.toLowerCase().includes(inputs[0]) ||
        pro.name.toUpperCase().includes(inputs[0]) ||
        pro.nmro_ident.replaceAll('.','').includes(inputs[0].replaceAll('.',''))
    );
    const match = matchNameOrId.filter((pro) =>
      pro.id_pers_correl.toString().includes(inputs[1])
    );
    matchNameOrId.length = 6;
    setListNames(matchNameOrId);
    if (match.length > 0) {
      setListNames(match);
    } else {
      setListNames(matchNameOrId);
    }
  };

  const displayDetails = (pro) => {
    const newPro = [...professionals];
    const detail = newPro.filter((profesional) => {
      return profesional.name === pro.name;
    });
    setSearchProfessional(detail);
    setListNames([]);
    setInput([]);
  };
  const displayTable = (pro) => {
    const newPro = [...professionals];
    const detail = newPro.filter((profesional) => {
      return profesional.name === pro.name;
    });
    setInfoProfessional(detail);
    const newInfo = [...process];
    const aportes = newInfo.filter((profesional) => {
      return profesional.id === detail[0].id;
    });
    setInfoTable(aportes[0].detail);
    setInfoTableTemp(aportes[0].detail);
  };

  const searchTable = (value) => {
    const queryMatch = infoTable.filter((pro) =>
      pro.state.toLowerCase().includes(value.toLowerCase())
    );
    setInfoTableTemp(queryMatch);
  };

  return (
    <>
      <div className="align-title-search">
        <h1>Visor de Aportes</h1>
        <div className="group-input-icon">
          <input
            input={input}
            className="input-search"
            type="search"
            placeholder="Buscar"
            name="search"
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        </div>
      </div>

      <h5 className="subtitle">Resumen del profesional</h5>
      {searchProfessional.length === 0 && (
        <p>No has realizado una búsqueda de aportes aún.</p>
      )}
      <ButtonAportes>Aportes</ButtonAportes>
      <ButtonArriendos>Arriendos</ButtonArriendos>
      {listNames.length > 0 && (
        <ul
          className="sugerencia-listado"
          style={{ listStyleType: "none", zIndex: "10", position: "absolute" }}
        >
          {listNames.map((professional, index) => {
            return (
              <li
                key={index}
                className="sug"
                onClick={(e) => {
                  displayDetails(professional);
                  displayTable(professional);
                }}
              >
                {professional.name}
                {" - "}
                {professional.nmro_ident}
              </li>
            );
          })}
        </ul>
      )}
      {searchProfessional.map((data, index) => (
        <div key={index} className="row listado-profesional">
          <div className="col first">
            <ul className="">
              <li>
                <span className="key"> Nombre:</span>{" "}
                <span className="value">{data.name}</span>
              </li>
              <li>
                <span className="key">N° Identidad:</span>
                <span className="value">{data.nmro_ident}</span>
              </li>
              <li>
                <span className="key">ID:</span>{" "}
                <span className="value">{data.id_pers_correl}</span>
              </li>
              <li>
                <span className="key">Mail:</span>{" "}
                <span className="value">{data.email}</span>
              </li>
              <li>
                <span className="key">Departamento:</span>{" "}
                <span className="value">{data.department}</span>
              </li>
              <li>
                <span className="key">Estado:</span>{" "}
                <span className="value green">{data.state}</span>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="">
              <li>
                <span className="key">Fecha Ingreso: </span>
                <span className="value">
                  {data.date_admission
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("/")}
                </span>
              </li>
              <li>
                <span className="key">Trayectoria: </span>
                <span className="value">{data.time_elapsed}</span>
              </li>
              <li>
                <span className="key">Tipo de Contrato: </span>
                <span className="value">{data.contract_type}</span>
              </li>
              <li>
                <span className="key">Cantidad de boletas: </span>
                <span className="value">{infoTable.length} </span>
              </li>
              <li>
                <span className="key"> Monto Total Aportes: </span>
                <span className="value">{data.amount_tickets} </span>
              </li>
            </ul>
          </div>
        </div>
      ))}

      <div className="align-right">
        <div className="group-input-icon">
          <input
            className="input-search"
            type="search"
            placeholder="Buscar"
            name="search"
            onChange={(e) => {
              searchTable(e.target.value);
            }}
          />
        </div>
      </div>

      <Table
        infoTable={infoTableTemp}
        setInfoTableTemp={setInfoTableTemp}
        infoProfessional={infoProfessional}
        searchProfessional={searchProfessional}
      />
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
{
  /* <input type="text" placeholder="busqueda" onChange={(e) => { query(e.target.value); }} /> */
}
// onClick = {(e) => { displayDetails(e.target.outerText); displayTable(e.target.outerText) }}

{
  /* <div className="row">
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
      </div> */
}
