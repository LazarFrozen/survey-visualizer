import TriviaDashboard from "../features/TriviaDashboard";
import styles from "./Container.module.css";

function Container() {
  return (
    <section className={styles.layout}>
      <h1 className={styles.heading}>Survey Visualizer</h1>
      <div className={styles.window}>
        <TriviaDashboard />
      </div>
    </section>
  );
}

export default Container;
