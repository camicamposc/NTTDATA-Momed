import Button from "../../Component/Button";
import Template from "../Template";
import "./style.css";
const Visor = () => {
  const data = [
    {
      fecha: "21-01-96",
      estado: "En Proceso",
    },
    {
      fecha: "21-01-96",
      estado: "Facturado",
    },
    {
      fecha: "21-01-96",
      estado: "Completado",
    },
  ];
  return (
    <>
      <Template>
        <h1>Visor de Aportes</h1>

        <h5>Resumen del profesional</h5>
        <div className="row">
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
        </div>
        <Button>Aportes</Button>
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
                        <span class={`circle ${changeText}`}></span>
                      </div>
                    </td>
                    <td>$680.000</td>
                    <td>$690.000</td>
                    <td>
                      <div className="actions">
                        <button>
                          <span class="material-symbols-outlined">
                            description
                          </span>
                        </button>
                        <button>
                          <span class="material-symbols-outlined">mail</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </Template>
    </>
  );
};
export default Visor;