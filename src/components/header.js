import styles from "../styles/app.module.css";

export const DocsCard = () => {
  return (
    <a
      href="https://docs.near.org/develop/integrate/quickstart-frontend"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        Near Docs <span>-&gt;</span>
      </h2>
      <p>Learn how this application works, and what you can build on Near.</p>
    </a>
  );
};