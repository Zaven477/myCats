import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./styles.css";
import { useAttendanceUsers } from "./useChartAttendanceUsers";

export const ChartAttendanceUsers = () => {
  const { countAttendance, attendance, showLastThreeDays, loadAttendanceWeek } =
    useAttendanceUsers();

  return (
    <div>
      <h2 className="title">
        {attendance.length === countAttendance
          ? "Статистика посещаемости пользователей на сайте за текущую неделю"
          : "Статистика посещаемости пользователей на сайте за три дня"}
      </h2>
      <div className="wrapperDashboard">
        <ResponsiveContainer width="95%" height="80%">
          <LineChart data={attendance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis dataKey="users" padding={{ bottom: 20 }} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload.length) {
                  const countUsers = payload[0].payload.users;
                  const currentDate = payload[0].payload.date;
                  return (
                    <div className="tooltipUsers">
                      <span>{currentDate}</span>
                      <span>Пользователей: {countUsers}</span>
                    </div>
                  );
                }
              }}
            />
            <Line
              dataKey="users"
              stroke="#1E90FF"
              strokeWidth={2}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="wrapperBtnWeekMonth">
          <button className="btnWeek" onClick={loadAttendanceWeek}>
            Показать за неделю
          </button>
          <button className="btnMonth" onClick={showLastThreeDays}>
            Показать за три дня
          </button>
        </div>
      </div>
    </div>
  );
};
