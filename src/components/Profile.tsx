import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/thaliaberger.png" alt="Thalía" />
      <div>
        <strong>Thalía Berger</strong>
        <p>Level {level}</p>
      </div>
    </div>
  );
}
