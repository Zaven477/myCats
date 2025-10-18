import { useEffect, useState } from "react";
import type { UsersAttendanceWeek } from "./types";
import { getAttendanceUsers } from "../../api/dataDashboard/getAttendanceUsers";

export const useAttendanceUsers = () => {
  const [attendance, setAttendance] = useState<UsersAttendanceWeek[]>([]);
  const countAttendance = 7;
  const initialValue = 4;
  const attendanceUsersThreeDays = attendance.slice(
    initialValue,
    attendance.length
  );

  const loadAttendanceWeek = () => {
    getAttendanceUsers().then((data) => setAttendance(data));
  };

  const showLastThreeDays = () => {
    setAttendance(attendanceUsersThreeDays);
  };

  useEffect(() => {
    let mounted = true;
    
    getAttendanceUsers().then((data) => {
      if(mounted) {
        setAttendance(data)
      }
    });

    return () => {
      mounted = false;
    }
  }, []);

  return {
    countAttendance,
    attendance,
    showLastThreeDays,
    loadAttendanceWeek,
  };
};
