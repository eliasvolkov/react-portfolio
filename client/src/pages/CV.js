import React, { Component } from "react";
import Header from "../components/Header/Header";
import nprogress from "nprogress";
import "../assets/styles/nprogress.scss";
import styles from "../assets/styles/Cv.module.scss";

export default class CV extends Component {
  componentWillMount() {
    nprogress.start();
  }

  componentDidMount() {
    nprogress.done();
  }

  render() {
    return (
      <div>
        <Header backGround="rgb(52, 52, 52)" />

        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.document}>
              <embed
                src="https://res.cloudinary.com/dksocxl5g/image/upload/v1564653263/cv_ejrmxu.pdf"
                type="application/pdf"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
