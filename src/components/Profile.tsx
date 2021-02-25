import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/thaliaberger.png" alt="Thalía" />
      <div>
        <strong>Thalía Berger</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}
