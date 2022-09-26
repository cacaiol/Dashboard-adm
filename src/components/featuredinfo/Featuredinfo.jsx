import "./Featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function Featuredinfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Receita</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">R$ 20.896,00</span>
                <span className="featuredMoneyRate">
                -11.4<ArrowDownward className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">Comparado ao mês anterior</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Vendas</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">R$ 10.100,00</span>
                <span className="featuredMoneyRate">
                +7.6<ArrowUpward className="featuredIcon"/></span>
            </div>
            <span className="featuredSub">Comparado ao mês anterior</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Custos</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">R$ 1.200,00</span>
                <span className="featuredMoneyRate">
                +2.4<ArrowUpward className="featuredIcon"/></span>
            </div>
            <span className="featuredSub">Comparado ao mês anterior</span>
        </div>
    </div>
  )
}

