import React, { Component } from "react";
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
            <a className={styles.logo}>
              ilia <strong>volkov</strong>
            </a>
            <Navigation />
          </div>
        </div>
      </header>
    );
  }
}
