import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "font-awesome/css/font-awesome.css";
import styles from "../assets/styles/Portfolio.module.scss";
import Card from "../components/Card/Card";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <Header backGround="rgb(51, 51, 51)" />
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.card}>
              <h4 className={styles.title}>{"title"}</h4>
              <Link>
                <div className={styles.img}>
                  <p>More info...</p>
                  <img
                    src="http://raymond-jay.herokuapp.com/static/media/gekofx_poster.a8535187.jpg"
                    alt=""
                    className="styles cardImg"
                  />
                </div>
              </Link>

              <Card />
            </div>

            <div className={styles.card}>
              <h4 className={styles.title}>{"title"}</h4>
              <Link>
                <div className={styles.img}>
                  <p>More info...</p>
                  <img
                    src="http://raymond-jay.herokuapp.com/static/media/personal_site_poster.18d40346.jpg"
                    alt=""
                    className="styles cardImg"
                  />
                </div>
              </Link>

              <Card />
            </div>

            <div className={styles.card}>
              <h4 className={styles.title}>{"title"}</h4>
              <Link>
                <div className={styles.img}>
                  <p>More info...</p>
                  <img
                    src="http://raymond-jay.herokuapp.com/static/media/personal_site_poster.18d40346.jpg"
                    alt=""
                    className="styles cardImg"
                  />
                </div>
              </Link>

              <Card />
            </div>

            <div className={styles.card}>
              <h4 className={styles.title}>{"title"}</h4>
              <Link>
                <div className={styles.img}>
                  <p>More info...</p>
                  <img
                    src="http://raymond-jay.herokuapp.com/static/media/personal_site_poster.18d40346.jpg"
                    alt=""
                    className="styles cardImg"
                  />
                </div>
              </Link>

              <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
