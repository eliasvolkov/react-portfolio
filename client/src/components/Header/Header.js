import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.scss";

export default class Header extends Component {
  render() {
    return (
      <header
        className={styles.mainHeader}
        style={{ backgroundColor: this.props.backGround }}
      >
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.logo}>
              <Link to="/">
                <a className={styles.logo}>
                  ilia <strong>volkov</strong>
                </a>
              </Link>
            </div>

            <Navigation />
          </div>
        </div>
      </header>
    );
  }
}
