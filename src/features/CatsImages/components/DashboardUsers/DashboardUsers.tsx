import { useEffect, useState } from "react";
import { getStatistics } from "../../api/statistics/getStatistics";
import type { TUsersStatistics } from "./types";
import "./styles.css";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export const DashboardUsers = () => {
  const [data, setData] = useState<TUsersStatistics[]>([]);

  useEffect(() => {
    let mounted = true;

    getStatistics().then((currentData) => {
      if (mounted) {
        setData(currentData);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="containerDashboard">
      <h1 className="title">Статистика посещаемости пользователей на сайтe</h1>
      <div className="shadowContainer">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis dataKey="users" />
            <Tooltip />
            <Line
              dataKey="users"
              stroke="#00BFFF"
              strokeWidth={2}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
