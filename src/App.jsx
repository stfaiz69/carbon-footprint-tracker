import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function App() {
  const [vehicle, setVehicle] = useState(0);
  const [electricity, setElectricity] = useState(0);
  const [plastic, setPlastic] = useState(0);

  const carbonScore =
    Number(vehicle) * 2 +
    Number(electricity) * 1.5 +
    Number(plastic) * 3;

  const futureData = [
    { year: "2026", value: carbonScore },
    { year: "2030", value: carbonScore + 20 },
    { year: "2040", value: carbonScore + 40 },
    { year: "2050", value: carbonScore + 60 },
  ];

  const getSuggestion = () => {
    if (carbonScore < 50)
      return "Great job! Your future Earth is greener 🌱";

    if (carbonScore < 100)
      return "Reduce electricity and plastic usage ⚡";

    return "Warning! High carbon footprint detected 🚨";
  };

  return (
    <div className="container">
      <h1>🌍 Eco2050</h1>

      <p className="subtitle">
        Futuristic Carbon Footprint Awareness Platform
      </p>

      <div className="card">
        <label>🚗 Vehicle Usage (hours/week)</label>

        <input
          type="number"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        />

        <label>⚡ Electricity Usage (units/week)</label>

        <input
          type="number"
          value={electricity}
          onChange={(e) => setElectricity(e.target.value)}
        />

        <label>🧴 Plastic Usage (items/week)</label>

        <input
          type="number"
          value={plastic}
          onChange={(e) => setPlastic(e.target.value)}
        />

        <div className="score">
          <h2>Carbon Score: {carbonScore}</h2>
          <p>{getSuggestion()}</p>
        </div>
      </div>

      <div className="chartCard">
        <h2>🌎 Future Impact till 2050</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={futureData}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#00ff99" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <footer>
        Built for PromptWars Hackathon 🚀
      </footer>
    </div>
  );
}
