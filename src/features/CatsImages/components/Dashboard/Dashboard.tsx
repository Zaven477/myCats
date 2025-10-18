import { ChartAttendanceUsers } from "../ChartAttendanceUsers/ChartAttendanceUsers";
import { ChartProfitCompanies } from "../ChartProfitCompanies/ChartProfitCompanies";
import { ChartProfitRetail } from "../ChartProfitRetail/ChartProfitRetail";
import { ShareCompanies } from "../ShareСompanies/ShareCompanies";
import "./styles.css";

export const Dashboard = () => {
  return (
    <div className="wrapperCurrent">
      <ChartAttendanceUsers />
      <ChartProfitRetail />
      <ChartProfitCompanies />
      <ShareCompanies />
    </div>
  );
};
