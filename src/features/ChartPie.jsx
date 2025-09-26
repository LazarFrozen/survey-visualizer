import { Pie, PieChart, Tooltip, Cell, Legend } from "recharts";
import { questionsFrequency } from "../utilities/helpers";

import styles from "./ChartPie.module.css";

function ChartPie({ questions, clickedCategory }) {
  const DIFFICULTY_COLORS = {
    easy: "#00C49F",
    medium: "#3399FF",
    hard: "#FF8042",
  };

  const difficultyCounter = questionsFrequency(
    questions,
    clickedCategory,
    "difficulty"
  );

  const chartData = Object.entries(difficultyCounter).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className={styles.pie_layout}>
      <h2>
        Pie chart <br /> distribution by difficulty
      </h2>
      <p className={styles.paragraph}>Tip: hover chart for more info!</p>
      <PieChart width={420} height={400}>
        <Pie
          data={chartData}
          label={{
            fontSize: 24,
            fill: "black",
          }}
        >
          {chartData.map((entry, index) => (
            <Cell key={index} fill={DIFFICULTY_COLORS[entry.name]} />
          ))}
        </Pie>
        <Tooltip contentStyle={{ fontSize: 24, color: "black" }} />
        <Legend wrapperStyle={{ fontSize: 24, color: "black" }} />
      </PieChart>
    </div>
  );
}

export default ChartPie;
