import React from "react";
import styles from "./ContactIcons.module.scss";
const ContactIcons = () => {
  return (
    <div className={styles.icons}>
      <a href="">
        <i className="fa fa-linkedin" />
        <strong>LinkedIn</strong>
      </a>
      <a href="">
        <i className="fa fa-github" />
        <strong>GitHub</strong>
      </a>
      <a href="">
        <i className="fa fa-at" />
        <strong>Email</strong>
      </a>
      <a
        href="https://res.cloudinary.com/dksocxl5g/image/upload/v1564653263/cv_ejrmxu.pdf"
        target="_blank"
      >
        <i className="fa fa-newspaper-o" />
        <strong>Resume</strong>
      </a>
    </div>
  );
};

export default ContactIcons;
