import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";
import { questionsFrequency } from "../utilities/helpers";

import styles from "./ChartBar.module.css";

function ChartBar({ questions, clickedCategory }) {
  const CHART_WIDTH = clickedCategory === "all" ? 730 : 120;

  const questionCounter = questionsFrequency(
    questions,
    clickedCategory,
    "category"
  );

  const chartData = Object.entries(questionCounter).map(([name, count]) => ({
    name: name.replaceAll("&amp;", "&"),
    count,
  }));

  return (
    <div className={styles.bar_layout}>
      <div className={styles.text}>
        <h2>
          Bar chart <br /> distribution by questions
        </h2>
        <p className={styles.paragraph}>Tip: hover chart for more info!</p>
      </div>
      <BarChart width={CHART_WIDTH} height={300} data={chartData}>
        <XAxis dataKey="name" tick={false} />
        <YAxis
          tick={{ fontSize: 16, fill: "black" }}
          label={{ fontSize: 24 }}
        />
        <Tooltip contentStyle={{ fontSize: 24 }} />
        <Legend wrapperStyle={{ fontSize: 24 }} />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default ChartBar;
