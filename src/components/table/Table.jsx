import React, { useState } from "react";
import { saveAs } from "file-saver";
import "./style.css";

const Table = ({ infoTable, infoProfessional }) => {
  const [modal, setModal] = useState(false);
  const [infoModal, setInfoModal] = useState([]);

  const handleSave = (e, selection) => {
    saveAs(selection.url_dte, `doc_hm_${selection.doc_hm}.pdf`);
  };
  const handleModal = (e, selection) => {
    if (e.target.nodeName != "SPAN") {
      setModal(true);
      setInfoModal(selection);
    }
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      <section className="cont-table">
        <table>
          <thead>
            <tr>
              <th>
                <p>
                  Fecha{" "}
                  <span class="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </p>
              </th>
              <th>
                <p>
                  Ámbito{" "}
                  <span class="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </p>
              </th>
              <th>
                <p>
                  Doc. HM{" "}
                  <span class="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </p>
              </th>
              <th>
                <p>
                  Factor{" "}
                  <span class="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </p>
              </th>
              <th>
                <p>
                  Estado{" "}
                  <span class="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </p>
              </th>
              <th>
                <p>
                  Monto Aporte{" "}
                  <span class="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </p>
              </th>
              <th>
                <p>
                  Monto bruto{" "}
                  <span class="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </p>
              </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {infoTable &&
              infoTable.map((val) => {
                let changeText = val.state.toLowerCase().replace(" ", "");
                return (
                  <tr
                    onClick={(e) => {
                      handleModal(e, val);
                    }}
                  >
                    <td>
                      {val.date.slice(0, 10).split("-").reverse().join("/")}
                    </td>{" "}
                    <td>{val.ambit}</td>
                    <td>{val.doc_hm}</td>
                    <td>{val.factor}</td>
                    <td>
                      <div className="estatus ">
                        {val.state} <span className={changeText}></span>
                      </div>
                    </td>
                    <td>{val.amount_contribution}</td>
                    <td>{val.amount_gross}</td>
                    <td>
                      <div className="actions">
                        <button
                          onClick={(e) => {
                            handleSave(e.target, val);
                          }}
                        >
                          {" "}
                          <span class="material-symbols-outlined">
                            description
                          </span>
                        </button>
                        <button>
                          <a
                            href={`mailto:${infoProfessional[0].email}?subject=Resumen%20Profesional%20Prueba`}
                          >
                            <span class="material-symbols-outlined">mail</span>
                          </a>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            <tr>
              <td colSpan="7">
                No has realizado una búsqueda de arriendos aún.
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      {modal && (
        <>
          <button onClick={handleCloseModal}>X</button>
          <div>
            <li>Nombre: {infoProfessional[0].name}</li>
            <li>Nº Identidad:{infoProfessional[0].nmro_ident}</li>
            <li>ID {infoProfessional[0].id_pers_correl}</li>
            <li>Mail {infoProfessional[0].email}</li>
            <li>Departamento {infoProfessional[0].department}</li>
            <li>Estado {infoProfessional[0].state}</li>
          </div>
          <div>
            <li>Fecha Ingreso {infoProfessional[0].date_admission}</li>
            <li>Trayectoria {infoProfessional[0].time_elapsed}</li>
            <li>Tipo de Contrato {infoProfessional[0].contract_type}</li>
            {/* <li>CANTIDAD DE BOLETAS {infoTable[0].length} </li> */}
            <li>Monto Total Aportes {infoProfessional[0].amount_tickets}</li>
          </div>
          <div>
            {JSON.stringify(infoModal)}
            {/* {infoModal.date.slice(0, 10)} */}

            {/* {infoModal.ambit}
          {infoModal.doc_hm}
          {infoModal.state}
          {infoModal.factor}
          {infoModal.amount_contribution}
          {infoModal.amount_gross} */}
          </div>
        </>
      )}
    </>
  );
};

export default Table;
