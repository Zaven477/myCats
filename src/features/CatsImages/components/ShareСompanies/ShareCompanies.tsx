import "./styles.css";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useShareCompanies } from "./useShareCompanies";

export const ShareCompanies = () => {
  const { firstСompanies, restCompanies } = useShareCompanies();

  return (
    <div>
      <h2 className="titleShare">Доля компаний на международном рынке</h2>
      <div className="containerShare">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip />
            <Pie
              data={firstСompanies}
              dataKey="currentValue"
              cx="50%"
              cy="50%"
              outerRadius="50%"
              fill="#FF8C00"
            />
            <Pie
              data={restCompanies}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              fill="#D2691E"
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
