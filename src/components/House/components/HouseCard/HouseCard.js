import React from "react";
import styles from "./HouseCard.module.css";

const HouseCard = ({ house }) => {
  const { name, animal, founder, houseColours } = house || {};
  const colors = houseColours.split(" ") || [];
  const gradient = `linear-gradient(to right, ${
    colors[0]?.toLowerCase() || "#fff"
  }, ${colors[colors?.length - 1] || "#000"})`;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <h3>{name}</h3>
        <p>{animal}</p>
      </div>
      <div
        style={{
          background: gradient,
        }}
        className={styles.gradientLine}
      />
      <div className={styles.cardFooter}>
        <p>
          Founder : <span className={styles.founderName}>{founder}</span>
        </p>
      </div>
    </div>
  );
};

export default HouseCard;
