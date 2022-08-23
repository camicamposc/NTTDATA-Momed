import { useState } from "react";
import "./style.css";

const Search = () => {
  const data = [
    {
      id: 1,
      fecha: "21-01-96",
      estado: "En Proceso",
      idProfesional: "1234",
      nombre: "Ericka",
      apellido: "Cortes",
      idProceso: "123",
      estado: "Facturado",
    },
    {
      id: 4,
      fecha: "21-01-96",
      estado: "En Proceso",
      idProfesional: "908",
      nombre: "Ericka",
      apellido: "Ampli",
      idProceso: "123",
      estado: "Facturado",
    },
    {
      id: 2,
      fecha: "21-01-96",
      estado: "En Proceso",
      idProfesional: "456",
      nombre: "Pedro",
      apellido: "Picapiedra",
      idProceso: "123",
      estado: "Facturado",
    },
    {
      id: 3,
      fecha: "21-01-96",
      estado: "En Proceso",
      idProfesional: "678",
      nombre: "Heike",
      apellido: "Tineo",
      idProceso: "123",
      estado: "En Proceso",
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
