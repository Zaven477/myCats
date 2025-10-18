import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./styles.css";
import { useProfitCompanies } from "./useProfitCompanies";

export const ChartProfitCompanies = () => {
  const { profitCompanies } = useProfitCompanies();

  return (
    <div>
      <h2 className="titleCompanies">
        Прибыль компаний Brain и Luxoft с 2018 по 2024 годы
      </h2>
      <div className="containerCompany">
        <ResponsiveContainer width="90%" height="90%">
          <AreaChart data={profitCompanies}>
            <XAxis dataKey="year" />
            <YAxis padding={{ bottom: 20 }} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload.length) {
                  const currentYear = payload[0].payload.year;
                  const currentProfitBrain = payload[0].payload.profitBrain;
                  const currentProfitLuxoft = payload[0].payload.profitLuxoft;

                  return (
                    <div className="containerCompanies">
                      <span>{currentYear} год</span>
                      <span className="titleBrain">
                        Brain: {currentProfitBrain}
                      </span>
                      <span className="titleLuxoft">
                        Luxoft: {currentProfitLuxoft}
                      </span>
                    </div>
                  );
                }
              }}
            />
            <Area
              type="monotone"
              dataKey="profitBrain"
              stroke="#1f77b4"
              fill="#1f77b4"
              fillOpacity={0.5}
            />
            <Area
              type="monotone"
              dataKey="profitLuxoft"
              stroke="#ffbb78"
              fill="#ffbb78"
              fillOpacity={0.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
