import { useState, useEffect } from "react";
import "./lifebox.css";

export default function LifeBox() {
  const [birthDate, setBirthDate] = useState<string>("");
  const [boxes, setBoxes] = useState<{ day: number; lived: boolean }[]>([]);
  const [stats, setStats] = useState({ total: 0, lived: 0 });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(e.target.value);
  };

  useEffect(() => {
    if (!birthDate) return;

    // Defer calculation with setTimeout (proper async pattern - no React warnings)
    const timer = setTimeout(() => {
      const birth = new Date(birthDate);
      const today = new Date();

      const age88Date = new Date(
        birth.getFullYear() + 88,
        birth.getMonth(),
        birth.getDate(),
      );

      const oneDay = 1000 * 60 * 60 * 24;
      const totalDays = Math.ceil(
        Math.abs(age88Date.getTime() - birth.getTime()) / oneDay,
      );

      const daysLived = Math.floor(
        Math.abs(today.getTime() - birth.getTime()) / oneDay,
      );

      // Create box data efficiently
      const boxData = Array.from({ length: totalDays }, (_, i) => ({
        day: i + 1,
        lived: i < daysLived,
      }));

      setBoxes(boxData);
      setStats({ total: totalDays, lived: daysLived });
    }, 0);

    return () => clearTimeout(timer);
  }, [birthDate]);

  return (
    <div className="container">
      <h1>Life Calendar</h1>
      <p>Track your life as boxes: one for each day until age 88</p>

      <div className="input-group">
        <label htmlFor="birthDate">Enter your birth date:</label>
        <input
          id="birthDate"
          type="date"
          value={birthDate}
          onChange={handleDateChange}
        />
      </div>

      {stats.total > 0 && (
        <div className="stats">
          <p>
            Total days: <strong>{stats.total}</strong>
          </p>
          <p>
            Days lived: <strong>{stats.lived}</strong>
          </p>
          <p>
            Days remaining: <strong>{stats.total - stats.lived}</strong>
          </p>
        </div>
      )}

      {birthDate && boxes.length === 0 && (
        <p style={{ color: "white", textAlign: "center", fontSize: "1.1rem" }}>
          Generating boxes...
        </p>
      )}

      {boxes.length > 0 && (
        <div className="boxes-container">
          {boxes.map((box) => (
            <div
              key={box.day}
              className={`box ${box.lived ? "lived" : "remaining"}`}
              title={`Day ${box.day}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
