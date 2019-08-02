import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { getProjects } from "../api/projectsApi";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import Header from "../components/Header/Header";
import "font-awesome/css/font-awesome.css";
import styles from "../assets/styles/Portfolio.module.scss";
import Card from "../components/Card/Card";

class Portfolio extends Component {
  state = {
    projects: []
  };

  componentWillMount() {
    nprogress.start();
  }
  componentDidMount() {
    getProjects().then(data => {
      this.setState({ projects: data });
      nprogress.done();
    });
  }
  render() {
    return (
      <div>
        <Header backGround="rgb(51, 51, 51)" />
        <div className={styles.container}>
          <h3>Projects</h3>
          <div className={styles.row}>
            {this.state.projects.map(project => {
              return (
                <div className={styles.card} key={project._id}>
                  <h4 className={styles.title}>{project.title}</h4>
                  <Link to={`/portfolio/${project._id}`}>
                    <div className={styles.img}>
                      <p>More info...</p>
                      <img
                        src={project.img}
                        alt=""
                        className="styles cardImg"
                      />
                    </div>
                  </Link>

                  <Card {...project} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Portfolio);
