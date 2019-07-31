import React, { Component } from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "font-awesome/css/font-awesome.css";
import styles from "../assets/styles/Index.module.scss";
import ContactIcons from "../components/ContactIcons/ContactIcons";

export default class Index extends Component {
  render() {
    return (
      <div className={styles.page}>
        <Header />
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.text}>
              <div className={styles.sub}>
                <Typed
                  loop
                  typeSpeed={70}
                  backSpeed={70}
                  strings={[
                    "React.js",
                    "Express.js",
                    "Node.js",
                    "MongoDB",
                    "Next.js"
                  ]}
                  shuffle={false}
                  backDelay={1000}
                  fadeOut={false}
                  fadeOutDelay={100}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />
              </div>

              <h1 className={styles.title}>Junior Software Engineer</h1>
              <p className={styles.subtitle}>
                <i className="fa fa-map-marker" aria-hidden="true" /> Saint
                Petersburg
              </p>
            </div>

            <ContactIcons />
            <div className={styles.btnWrap}>
              <Link to="/portfolio">
                <a className={styles.btn}>
                  <strong>portfolio</strong>
                  <i className="fa fa-chevron-right" aria-hidden="true" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
