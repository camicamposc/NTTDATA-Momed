import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import "./style.css";
import Pagination from "@mui/material/Pagination";
import { alertTitleClasses, Grid } from "@mui/material";

const Table = ({
  setInfoTableTemp,
  infoTable,
  infoProfessional,
  searchProfessional,
}) => {
  const [modal, setModal] = useState(false);
  const [infoModal, setInfoModal] = useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    if (searchProfessional.length > 0) {
      setPage(1);
    }
  }, [searchProfessional]);

  const sortedTable = () => {
    let sortInfoTable = [...infoTable].sort((a, b) => {
      if (a.state < b.state) {
        return -1;
      }
      if (a.state > b.state) {
        return 1;
      }
      return 0;
    });

    console.log(sortInfoTable);
    setInfoTableTemp(sortInfoTable);
  };

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

  const handleChangePage = (event, newPage) => {
    // console.log("buenas noches", newPage)
    setPage(newPage);
  };

  const count = Object.keys(infoTable).length;

  return (
    <>
      <div className="content">
        <section className="cont-table">
          <table>
            <thead>
              <tr>
                <th onClick={sortedTable}>
                  <p>Fecha </p>
                  <span className="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </th>
                <th>
                  <p>Ámbito </p>
                </th>
                <th>
                  <p>Doc. HM </p>
                </th>
                <th>
                  <p>Factor </p>
                </th>
                <th>
                  <p>Estado </p>
                </th>
                <th>
                  <p>Monto Aporte </p>
                </th>
                <th>
                  <p>Monto Bruto </p>
                </th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {infoTable &&
                infoTable
                  .slice(
                    page * rowsPerPage - rowsPerPage,
                    page * rowsPerPage + rowsPerPage - rowsPerPage
                  )
                  .map((val, index) => {
                    let changeText = val.state.toLowerCase().replace(" ", "");
                    return (
                      <tr
                        key={index}
                        onClick={(e) => {
                          handleModal(e, val);
                        }}
                      >
                        <td>
                          {val.date.slice(0, 10).split("-").reverse().join("/")}
                        </td>
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
                              <span className="material-symbols-outlined">
                                description
                              </span>
                            </button>
                            <button>
                              <a
                                href={`mailto:${infoProfessional[0].email}?subject=Resumen%20Profesional%20Prueba`}
                              >
                                <span className="material-symbols-outlined">
                                  mail
                                </span>
                              </a>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              {infoTable.length === 0 && (
                <tr>
                  <td colSpan="7">
                    No has realizado una búsqueda de arriendos aún.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

        {modal && (
          <>
            <div className="backgroundModal">
              <button className="closeW" onClick={handleCloseModal}>
                X
              </button>
              <h2 class="title-modal"> ANEXO APORTE POR ACCESO CLC</h2>
              <ul className="modalAttributes">
                <li className="fileModal">
                  <span className="key"> Nombre:</span>{" "}
                  <span className="value">{infoProfessional[0].name}</span>
                </li>
                <li className="fileModal">
                  <span className="key"> Nº Identidad:</span>{" "}
                  <span className="value">
                    {infoProfessional[0].nmro_ident}
                  </span>
                </li>
                <li className="fileModal">
                  <span className="key"> ID:</span>{" "}
                  <span className="value">
                    {infoProfessional[0].id_pers_correl}
                  </span>
                </li>
                <li className="fileModal">
                  <span className="key"> Mail:</span>{" "}
                  <span className="value">{infoProfessional[0].email}</span>
                </li>
                <li className="fileModal">
                  <span className="key"> Departamento:</span>{" "}
                  <span className="value">
                    {infoProfessional[0].department}
                  </span>
                </li>
                <li className="fileModal">
                  <span className="key"> Estado:</span>{" "}
                  <span className="value">{infoProfessional[0].state}</span>
                </li>
              </ul>
              <ul className="modalAttributes">
                <li className="fileModal">
                  <span className="key"> Fecha Ingreso:</span>{" "}
                  <span className="value">
                    {infoProfessional[0].date_admission
                      .slice(0, 10)
                      .split("-")
                      .reverse()
                      .join("/")}
                  </span>
                </li>

                <li className="fileModal">
                  <span className="key"> Trayectoria:</span>{" "}
                  <span className="value">
                    {infoProfessional[0].time_elapsed}
                  </span>
                </li>

                <li className="fileModal">
                  <span className="key"> Tipo de Contrato:</span>{" "}
                  <span className="value">
                    {infoProfessional[0].contract_type}
                  </span>
                </li>
                <li className="fileModal">
                  <span className="key"> Cantidad de Boletas:</span>{" "}
                  <span className="value">{infoTable.length}</span>
                </li>
                <li className="fileModal">
                  <span className="key"> Monto Total Aportes:</span>{" "}
                  <span className="value">
                    {infoProfessional[0].amount_tickets}
                  </span>
                </li>
              </ul>
              <div>
                {/* {JSON.stringify(infoModal)} */}

                {/* {infoModal.date.slice(0, 10)} */}

                {/* {infoModal.ambit}
          {infoModal.doc_hm}
          {infoModal.state}
          {infoModal.factor}
          {infoModal.amount_contribution}
          {infoModal.amount_gross} */}
              </div>
            </div>
          </>
        )}
      </div>
      <Grid
        className="mt-3 mb-3 mr-3"
        container
        justify="flex-end"
        alignItems="flex-end"
        style={{ justifyContent: "end", margin: "20px 0" }}
      >
        <Pagination
          variant="outlined"
          count={Math.ceil(count / rowsPerPage)}
          rowsperpage={rowsPerPage}
          color="primary"
          shape="rounded"
          page={page}
          onChange={handleChangePage}
        />
      </Grid>
    </>
  );
};

export default Table;
