import Chart from "../../components/Chart/Chart";
import Featuredinfo from "../../components/featuredinfo/Featuredinfo";
import "./Home.css";
import { userData } from "../../DummyData";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarg from "../../components/widgetLarg/WidgetLarg";

export default function Home() {
  return (
    <div className="home">
        <Featuredinfo />
        <Chart data={userData} title="Análise de Usuários" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetSmall />
          <WidgetLarg />
        </div>
    </div>
  );
}
