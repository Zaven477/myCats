import "./styles.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useProfitRetails } from "./useProfitRetails";

export const ChartProfitRetail = () => {
  const { profitsRetails } = useProfitRetails();

  return (
    <div>
      <h2 className="titleProfits">
        Показатели прибыли торговых сетей Магнит и Глобус
      </h2>
      <div className="containerProfitDashboard">
        <ResponsiveContainer width="95%" height="95%">
          <BarChart data={profitsRetails}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload.length) {
                  const currentDate = payload[0].payload.date;
                  const profitMagnet = payload[0].payload.profitMagnet;
                  const profitGlobe = payload[0].payload.profitGlobe;

                  return (
                    <div className="wrapperRetails">
                      <span>{currentDate}</span>
                      <span className="magnet">Магнит: {profitMagnet}</span>
                      <span className="globe">Глобус: {profitGlobe}</span>
                    </div>
                  );
                }
              }}
            />
            <Bar dataKey="profitMagnet" fill="#800080" />
            <Bar dataKey="profitGlobe" fill="#008000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
