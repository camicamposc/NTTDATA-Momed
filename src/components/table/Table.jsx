//import React, { useRef } from "react";
import "./style.css";
// import { useReactToPrint, PrintContextConsumer, ReactToPrint } from "react-to-print";
// import ComponentToPrint from '../PDF/ComponentToPrint'
import { saveAs } from "file-saver";

const Table = ({ infoTable, infoProfessional }) => {
  // const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //     content: () => componentRef.current,
  // });

  const blob = new Blob([JSON.stringify(infoTable)], {
    type: "text/plain;charset=utf-8",
  });
  saveAs(blob, "hello world.txt");
  console.log(blob);
  const handleModal = () => {
    console.log(1);
  };
  // const validation = (string) => {
  //     // switch (string){
  //     //     case "Facturado":
  //     //         break
  // }

  // }
  if (infoTable) {
    return (
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
            {infoTable.map((val) => {
              // let changeText = val.estado.toLowerCase().replace(" ", "");
              return (
                <tr onClick={handleModal}>
                  <td>{val.date.slice(0, 10)}</td>
                  <td>{val.ambit}</td>
                  <td>{val.doc_hm}</td>
                  <td>{val.factor}</td>
                  <td>
                    <div className="estatus">
                      {val.state} <span></span>
                    </div>
                  </td>
                  <td>{val.amount_contribution}</td>
                  <td>{val.amount_gross}</td>
                  <td>
                    <div className="actions">
                      <button>
                        {" "}
                        {/*onClick={handlePrint}*/}
                        <span class="material-symbols-outlined">
                          description
                        </span>
                      </button>
                      <button>
                        <a
                          href={`mailto:${infoProfessional[0].email}?subject=Holi%20Maca%20Paredes`}
                        >
                          mail
                        </a>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
};
export default Table;
// < a href = "mailto:maka.paredes@gmail.com?subject=Holi%20Maca%20Paredes" > ENVIAR</a >
// let changeText = val.estado.toLowerCase().replace(" ", "");
// < span class={ `circle ${setStatus}` }></span >
