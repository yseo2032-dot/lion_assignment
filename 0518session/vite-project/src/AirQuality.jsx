import React, { useState, useEffect } from "react";
import axios from "axios";

function AirQuality() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchAirQuality = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URL, // .env에서 URL 불러오기
          {
            params: {
              serviceKey: import.meta.env.VITE_API_KEY,
              returnType: "json",
              numOfRows: 6,
              pageNo: 1,
              sidoName: "부산", // 원하는 지역으로 변경하세요!
              ver: "1.0",
            },
          }
        );
        console.log(response.data.response.body.items);
        const data = response.data.response.body.items;
        setItems(data);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };

    fetchAirQuality();
  }, []);

  // 미세먼지 등급 색상 반환
  const getGradeColor = (value, type) => {
    const val = Number(value);
    if (isNaN(val) || value === "-") return "text-gray-400";

    if (type === "pm10") {
      if (val <= 30) return "text-blue-500";
      if (val <= 80) return "text-green-500";
      if (val <= 150) return "text-orange-400";
      return "text-red-500";
    }
    if (type === "pm25") {
      if (val <= 15) return "text-blue-500";
      if (val <= 35) return "text-green-500";
      if (val <= 75) return "text-orange-400";
      return "text-red-500";
    }
    return "text-blue-500";
  };

  // 미세먼지 등급 라벨 반환
  const getGradeLabel = (value, type) => {
    const val = Number(value);
    if (isNaN(val) || value === "-") return "정보없음";

    if (type === "pm10") {
      if (val <= 30) return "좋음";
      if (val <= 80) return "보통";
      if (val <= 150) return "나쁨";
      return "매우나쁨";
    }
    if (type === "pm25") {
      if (val <= 15) return "좋음";
      if (val <= 35) return "보통";
      if (val <= 75) return "나쁨";
      return "매우나쁨";
    }
    return "-";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-center mb-2">미세먼지 현황</h2>
      <p className="text-sm text-gray-400 text-center mb-6">
        에어코리아 대기오염정보 · 부산광역시
      </p>

      <div className="flex flex-col items-center gap-4">
        {/* 상단 3개 */}
        <div className="flex gap-4">
          {items.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 w-44 flex flex-col items-center gap-2"
            >
              <p className="text-sm font-semibold text-gray-500">
                {item.stationName}
              </p>

              <div className="flex flex-col items-center">
                <p className="text-xs text-gray-400">PM10</p>
                <p className={`text-xl font-bold ${getGradeColor(item.pm10Value, "pm10")}`}>
                  {item.pm10Value ?? "-"}
                  <span className="text-xs font-normal text-gray-400 ml-1">㎍/㎥</span>
                </p>
                <p className="text-xs text-gray-400">
                  {getGradeLabel(item.pm10Value, "pm10")}
                </p>
              </div>

              <div className="w-full border-t border-gray-100 my-1" />

              <div className="flex flex-col items-center">
                <p className="text-xs text-gray-400">PM2.5</p>
                <p className={`text-xl font-bold ${getGradeColor(item.pm25Value, "pm25")}`}>
                  {item.pm25Value ?? "-"}
                  <span className="text-xs font-normal text-gray-400 ml-1">㎍/㎥</span>
                </p>
                <p className="text-xs text-gray-400">
                  {getGradeLabel(item.pm25Value, "pm25")}
                </p>
              </div>

              <p className="text-xs text-gray-400 mt-1">{item.dataTime}</p>
            </div>
          ))}
        </div>

        {/* 하단 3개 */}
        <div className="flex gap-4">
          {items.slice(3).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 w-44 flex flex-col items-center gap-2"
            >
              <p className="text-sm font-semibold text-gray-500">
                {item.stationName}
              </p>

              <div className="flex flex-col items-center">
                <p className="text-xs text-gray-400">PM10</p>
                <p className={`text-xl font-bold ${getGradeColor(item.pm10Value, "pm10")}`}>
                  {item.pm10Value ?? "-"}
                  <span className="text-xs font-normal text-gray-400 ml-1">㎍/㎥</span>
                </p>
                <p className="text-xs text-gray-400">
                  {getGradeLabel(item.pm10Value, "pm10")}
                </p>
              </div>

              <div className="w-full border-t border-gray-100 my-1" />

              <div className="flex flex-col items-center">
                <p className="text-xs text-gray-400">PM2.5</p>
                <p className={`text-xl font-bold ${getGradeColor(item.pm25Value, "pm25")}`}>
                  {item.pm25Value ?? "-"}
                  <span className="text-xs font-normal text-gray-400 ml-1">㎍/㎥</span>
                </p>
                <p className="text-xs text-gray-400">
                  {getGradeLabel(item.pm25Value, "pm25")}
                </p>
              </div>

              <p className="text-xs text-gray-400 mt-1">{item.dataTime}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AirQuality;
