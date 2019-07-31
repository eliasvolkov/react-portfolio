import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export default class Navigation extends Component {
  state = {
    mobile: false
  };
  render() {
    const menuItems = ["About", "Portfolio", "CV"];
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <a>Home</a>
            </NavLink>
          </li>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={`/${item.toLocaleLowerCase()}`}>
                  <a>{item}</a>
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
          <li>
            <NavLink to="/">
              <a>Home</a>
            </NavLink>
          </li>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={`/${item.toLocaleLowerCase()}`}>
                  <a>{item}</a>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
