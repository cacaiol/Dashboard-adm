import "./Widgetlarg.css";

export default function WidgetLarg() {

        const Button = ({type}) => {
            return <button className={"widgetlargButton " + type}>{type}</button>
        };

  return (
    <div className="widgetlarg">
        <h3 className="widgetlargTitle">Últimas Transações</h3>
        <table className="widgetlargTable">
            <tr className="widgetlargTr">
                <th className="widgetlargTh">Rafael</th>
                <th className="widgetlargTh">Data</th>
                <th className="widgetlargTh">Valor</th>
                <th className="widgetlargTh">Status</th>
            </tr>
            <tr className="widgetlargTr">
                <td className="widgetlargUser">
                    <img src="./src/assets/dog.jpg" alt="" className="widgetlargImg" />
                </td>
                <td className="widgetlargDate">02 junho 2021</td>
                <td className="widgetlargAmount">R$122,00</td>
                <td className="widgetlargStatus">
                    <Button type="Aprovado" />
                </td>
            </tr>
            <tr className="widgetlargTr">
                <th className="widgetlargTh">Carla</th>
                <th className="widgetlargTh">Data</th>
                <th className="widgetlargTh">Valor</th>
                <th className="widgetlargTh">Status</th>
            </tr>
            <tr className="widgetlargTr">
                <td className="widgetlargUser">
                    <img src="./src/assets/dog.jpg" alt="" className="widgetlargImg" />
                </td>
                <td className="widgetlargDate">06 abril 2021</td>
                <td className="widgetlargAmount"> R$800,00</td>
                <td className="widgetlargStatus">
                    <Button type="Recusado" />
                </td>
            </tr>
            <tr className="widgetlargTr">
                <th className="widgetlargTh">Pedro</th>
                <th className="widgetlargTh">Data</th>
                <th className="widgetlargTh">Valor</th>
                <th className="widgetlargTh">Status</th>
            </tr>
            <tr className="widgetlargTr">
                <td className="widgetlargUser">
                    <img src="./src/assets/dog.jpg" alt="" className="widgetlargImg" />
                </td>
                <td className="widgetlargDate">05 novembro 2021</td>
                <td className="widgetlargAmount"> R$300,00</td>
                <td className="widgetlargStatus">
                    <Button type="Aprovado" />
                </td>
            </tr>
            <tr className="widgetlargTr">
                <th className="widgetlargTh">Douglas</th>
                <th className="widgetlargTh">Data</th>
                <th className="widgetlargTh">Valor</th>
                <th className="widgetlargTh">Status</th>
            </tr>
            <tr className="widgetlargTr">
                <td className="widgetlargUser">
                    <img src="./src/assets/dog.jpg" alt="" className="widgetlargImg" />
                </td>
                <td className="widgetlargDate">17 fevereiro 2021</td>
                <td className="widgetlargAmount"> R$600,00</td>
                <td className="widgetlargStatus">
                    <Button type="Pendente" />
                </td>
            </tr>
        </table>
    </div>
  );
}
