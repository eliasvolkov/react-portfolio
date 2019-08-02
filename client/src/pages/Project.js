import React, { Component, Fragment } from "react";
import Header from "../components/Header/Header";
import { withRouter, Link } from "react-router-dom";
import { getProjectById } from "../api/projectsApi";
import nprogress from "nprogress";
import "../assets/styles/nprogress.scss";
import styles from "../assets/styles/Project.module.scss";
import Card from "../components/Card/Card";

class Project extends Component {
  state = {
    project: []
  };

  componentWillMount() {
    nprogress.start();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    getProjectById(id).then(data => {
      this.setState({ project: data });
      nprogress.done();
    });
  }
  render() {
    const { project } = this.state;
    return (
      <div>
        <Header backGround="rgb(51, 51, 51)" />
        <div className={styles.container}>
          <Link to="/portfolio">
            <a className={styles.btn}>Back to portfolio</a>
          </Link>
          <div className={styles.row}>
            {project.length !== 0 && (
              <Fragment>
                <div className={styles.card}>
                  <h4 className={styles.title}>{project.title}</h4>
                  <div className={styles.img}>
                    <img src={project.img} alt="" />
                    <Card {...project} />
                  </div>
                </div>

                <div className={styles.description}>
                  <div className={styles.descr}>
                    <div className={styles.topic}>
                      <h5>Overview</h5>
                      <p className={styles.topicDescr}>{project.overview}</p>
                    </div>
                    <div className={styles.topic}>
                      <h5>Project Difficulties</h5>
                      <p className={styles.topicDescr}>
                        {project.difficulties}
                      </p>
                    </div>

                    <div className={styles.topic}>
                      <h5>Features</h5>
                      <ul className={styles.list}>
                        {project.features.map((feature, index) => {
                          return (
                            <li className={styles.item} key={index}>
                              <i
                                className="fa fa-check-circle-o"
                                aria-hidden="true"
                              />
                              {feature}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Project);
