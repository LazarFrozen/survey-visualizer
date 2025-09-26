import { useState, useEffect } from "react";
import { getQuestions } from "../services/apiTrivia.js";

import styles from "./TriviaDashboard.module.css";
import ChartPie from "./ChartPie.jsx";
import ChartBar from "./ChartBar.jsx";
import Spinner from "../ui/Spinner.jsx";
import Error from "../ui/Error.jsx";
import CategoriesBar from "./CategoriesBar.jsx";

function TriviaDashboard() {
  const [questions, setQuestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadQuestions() {
      try {
        const data = await getQuestions();
        setQuestions(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadQuestions();
  }, []);

  if (error) return <Error message={error} />;

  const uniqueCategories = [
    ...new Set(questions.map((question) => question.category)),
  ];

  return loading ? (
    <Spinner />
  ) : (
    <div className={styles.container}>
      <CategoriesBar
        clickedCategory={selectedCategory}
        uniqueCategories={uniqueCategories}
        setSelectedCategory={setSelectedCategory}
      />
      <div className={styles.charts}>
        <ChartPie questions={questions} clickedCategory={selectedCategory} />
        <ChartBar questions={questions} clickedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default TriviaDashboard;
