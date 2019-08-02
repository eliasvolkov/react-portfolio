import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export default class Navigation extends Component {
  state = {
    mobile: false
  };
  render() {
    const menuItems = ["Home", "About", "Portfolio", "CV"];
    return (
      <nav>
        <ul className={styles.navList}>
          {menuItems.map((item, index) => {
            return (
              <li key={index} className={styles.navItem}>
                <NavLink
                  exact
                  activeClassName="active"
                  className={styles.navLink}
                  to={item === "Home" ? "/" : `/${item.toLocaleLowerCase()}`}
                >
                  {item}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div
          className={this.state.mobile && styles.mobileActive}
          onClick={() => this.setState({ mobile: !this.state.mobile })}
        >
          <span className={styles.span} />
        </div>

        <ul
          className={
            this.state.mobile
              ? `${styles.responseMenu} ${styles.responseMenu_active}`
              : styles.responseMenu
          }
        >
          {menuItems.map((item, index) => {
            return (
              <li key={index} className={styles.navItem}>
                <NavLink
                  exact
                  activeClassName="active"
                  className={styles.navLink}
                  to={item === "Home" ? "/" : `/${item.toLocaleLowerCase()}`}
                >
                  {item}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
