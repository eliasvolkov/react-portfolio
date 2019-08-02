import React from "react";
import styles from "./Card.module.scss";

const Card = ({ techologies, links }) => {
  return (
    <div className={styles.card}>
      <div className={styles.links}>
        <a href={links[0]}>
          <i className="fa fa-desktop" aria-hidden="true" />
          <strong>Live preview</strong>
        </a>
        <a href={links[1]}>
          <i className="fa fa-code-fork" aria-hidden="true" />
          <strong>Sourse code</strong>
        </a>
      </div>

      <div className={styles.technologies}>
        <h5>Technologies Used</h5>
        <ul className={styles.list}>
          {techologies.map((item, index) => {
            return (
              <li className={styles.item} key={index}>
                <i className="fa fa-check-circle-o" aria-hidden="true" />
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
