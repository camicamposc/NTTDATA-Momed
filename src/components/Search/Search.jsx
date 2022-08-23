import { useState } from "react";
import "./style.css";

const Search = () => {
  const data = [
    {
      "process_id": 86409,
      "date": "2021-11-23T23:51:36.586Z",
      "ambit": "Ambulatorio - Q1",
      "doc_hm": 89748,
      "factor": "%20",
      "state": "Facturado",
      "amount_contribution": "$680.000",
      "amount_gross": "$1.200.000",
      "url_dte": "https://spanish-loneliness.org",
      "email_active": true
      },
      {
      "process_id": 74272,
      "date": "2021-11-25T04:09:49.713Z",
      "ambit": "Ambulatorio - Q1",
      "doc_hm": 20966,
      "factor": "%20",
      "state": "Facturado",
      "amount_contribution": "$680.000",
      "amount_gross": "$1.200.000",
      "url_dte": "https://vigilant-Navbar.biz",
      "email_active": false
      },
      {
      "process_id": 95298,
      "date": "2022-07-06T13:47:36.781Z",
      "ambit": "Ambulatorio - Q1",
      "doc_hm": 24540,
      "factor": "%20",
      "state": "Facturado",
      "amount_contribution": "$680.000",
      "amount_gross": "$1.200.000",
      "url_dte": "https://motherly-pence.org",
      "email_active": true
      },
  ];

  const [searchConcat, setSearchConcat] = useState(data);

  const searchChange = (event) => {
    let toSearch = event.target.value.split(",");
    let dataSearch = []
    toSearch.map((val) => {
      if (val.trim() != '') {
        dataSearch = dataSearch.concat(filterCustom(val.trim()));
      }
    });
    setSearchConcat(dataSearch)
  };

  const filterCustom = (toSearch) => {
    let result = data.filter(
      (o) => o.idProfesional.includes(toSearch) || o.nombre.includes(toSearch)
    );
    return result;
  };
  return (
    <>

      <h1>Visor de Aportes</h1>

      <form action="">
        <input type="search" placeholder="Buscador" name="search" onChange={searchChange} />
      </form>
      <section className="cont-table">
        <table>
          <thead>
            <tr>
              <th>
                <p>
                  ID PROFESIONAL{" "}
                </p>
              </th>
              <th>
                <p>
                  NOMBRE{" "}
                </p>
              </th>
              <th>
                <p>
                  APELLIDOS{" "}
                </p>
              </th>
              <th>
                <p>
                  ID PROCESO{" "}
                </p>
              </th>
              <th>
                <p>
                  FECHA{" "}
                </p>
              </th>
              <th>
                <p>
                  ESTADO{" "}
                </p>
              </th>
              <th> DETALLE</th>
            </tr>
          </thead>
          <tbody>
            {searchConcat.map((val, index) => {
              let changeText = val.estado.toLowerCase().replace(" ", "");
              return (
                <tr key={index + 1}>
                  <td>{val.idProfesional}</td>
                  <td>{val.nombre}</td>
                  <td>{val.apellido}</td>
                  <td>{val.idProceso}</td>
                  <td>{val.fecha}</td>
                  <td>
                    <div className="estatus">
                      {val.estado}{" "}
                      <span class={`circle ${changeText}`}></span>
                    </div>
                  </td>
                  <td>
                    <div className="actions">
                      <button>Ver detalle</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};
export default Search;
