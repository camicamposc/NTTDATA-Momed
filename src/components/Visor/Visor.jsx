// import Button from "../../Component/Button";
// import Template from "../Template";
import Summary from "../summary/Summary";
import "./style.css";

const Visor = () => {

  return (
    <>
      
      <Summary />

    </>
  );
};
export default Visor;


{/* <Template> */ }
{/* <Button>Aportes</Button> */ }
{/* <section className="cont-table">
        <table>
          <thead>
            <tr>
              <th>
                <p>
                  Fecha{" "}
                  <span className="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </p>
              </th>
              <th>
                <p>
                  Ámbito{" "}
                  <span className="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </p>
              </th>
              <th>
                <p>
                  Doc. HM{" "}
                  <span className="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </p>
              </th>
              <th>
                <p>
                  Factor{" "}
                  <span className="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </p>
              </th>
              <th>
                <p>
                  Estado{" "}
                  <span className="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </p>
              </th>
              <th>
                <p>
                  Monto Aporte{" "}
                  <span className="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </p>
              </th>
              <th>
                <p>
                  Monto bruto{" "}
                  <span className="material-symbols-outlined">
                    keyboard_arrow_down
                  </span>
                </p>
              </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {data.map((val) => {
                let changeText = val.estado.toLowerCase().replace(" ", "");
                return (
                  <tr>
                    <td>16/08/2021</td>
                    <td>Ambulatorio - Q2</td>
                    <td>3509</td>
                    <td>20%</td>
                    <td>
                      <div className="estatus">
                        {val.estado}{" "}
                        <span className={`circle ${changeText}`}></span>
                      </div>
                    </td>
                    <td>$680.000</td>
                    <td>$690.000</td>
                    <td>
                      <div className="actions">
                        <button>
                          <span className="material-symbols-outlined">
                            description
                          </span>
                        </button>
                        <button>
                          <span className="material-symbols-outlined">mail</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })} 
          </tbody>
        </table>
      </section> */}
{/* </Template> */ }