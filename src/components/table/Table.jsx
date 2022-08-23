import React from 'react'
import "./style.css";

const Table = ({ infoTable, infoProfessional }) => {


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
                                <tr>

                                    <td>{val.date.slice(0, 10)}</td>
                                    <td>{val.ambit}</td>
                                    <td>{val.doc_hm}</td>
                                    <td>{val.factor}</td>
                                    <td>
                                        <div className="estatus">
                                            {val.state}{" "}
                                            {/* <span class={`circle ${changeText}`}></span> */}
                                        </div>
                                    </td>
                                    <td>{val.amount_contribution}</td>
                                    <td>{val.amount_gross}</td>
                                    <td>
                                        <div className="actions">
                                            <button>
                                                <span class="material-symbols-outlined">
                                                    description
                                                </span>
                                            </button>
                                            <button>
                                                <a href={`mailto:${infoProfessional[0].email}?subject=Holi%20Maca%20Paredes`}>mail</a>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
        )
    }
}
export default Table
    // < a href = "mailto:maka.paredes@gmail.com?subject=Holi%20Maca%20Paredes" > ENVIAR</a >