import styles from "./CategoriesBar.module.css";

function CategoriesBar({
  clickedCategory,
  uniqueCategories,
  setSelectedCategory,
}) {
  return (
    <div className={styles.layout}>
      <label className={styles.font} htmlFor="categories">
        Choose category:
      </label>
      <select
        className={styles.font}
        name="categories"
        value={clickedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All categories</option>
        {uniqueCategories.map((question, index) => (
          <option key={index} value={question}>
            {question.replaceAll("&amp;", "&")}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoriesBar;
