import React, { Component } from "react";
import Header from "../Components/Header";
import Newsletter from "../Components/Newsletter-Panel";
import "../Assets/styles.css";
import Footer from "../Components/Footer";
import ReactNotifications from "react-notifications-component";
import Notif from "../Components/Notification-Top";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import "font-awesome/css/font-awesome.min.css";

export default class Home extends Component {
  handleButton() {
    store.addNotification({
      message:
        "By accessing and using this website, you acknowledge that you have read and understand our Cookie Policy, Privacy Policy, and our Terms of Service",
      type: "default", // 'default', 'success', 'info', 'warning'
      container: "top-center", // where to position the notifications
      animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
      animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
      dismiss: {
        duration: 2000
      }
    });
  }
  handleEmail() {
    store.addNotification({
      message: "Login Success, Welcome to My Website!",
      type: "success", // 'default', 'success', 'info', 'warning'
      container: "top-center", // where to position the notifications
      animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
      animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
      dismiss: {
        duration: 2000
      }
    });
  }
  render() {
    return (
      <div>
        <div>
          <ReactNotifications />
          <Header handleButton={this.handleButton} />
        </div>
        <div className="content">
          {/* <div>
            <Notif />
          </div> */}
          <div className="container-fluid ">
            <div className="title-content">How Can I Help You?</div>
            <div className="text-desc-content">
              Our work then targeted, best practices outcomes social innovation
              synergy.
              <br /> Venture philanthrophy, revolutionary inclusive policymarker
              relief. User-centered <br /> program areas scale.
            </div>
            <div className="row view-card">
              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="card border-dark m-2">
                  <div className="card-body body-card">
                    <h5 className="card-title">Consult</h5>
                    <div className="view-icon">
                      <i className="fa fa-comments" />
                    </div>
                    <p className="card-text">
                      Co-create, design thinking; strengthen infrastructure
                      resist granular. Revolution circular, movements or
                      framework social impact low-hanging fruit. Save the world
                      compelling revolutionary progress.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="card border-dark m-2">
                  <div className="card-body body-card ">
                    <h5 className="card-title">Design</h5>
                    <div className="view-icon">
                      <i className="fa fa-paint-brush" />
                    </div>
                    <p className="card-text">
                      Policymarker collaborates collective impact humanitarian
                      shared value vocabulary inspire issue outcomes agile.
                      Overcome injustice deep drive agile issue outcomes vibrant
                      boots on the ground sustainable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="card border-dark m-2">
                  <div className="card-body body-card ">
                    <h5 className="card-title">Develop</h5>
                    <div className="view-icon">
                      <i className="fa fa-cubes" />
                    </div>
                    <p className="card-text">
                      Revolutionary circular, movements a or impact framework
                      social impact low-hanging. Save the compelling
                      revolutionary inspire progress. Collective impacts and
                      challenges for opportunities of thought provoking.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="card border-dark m-2">
                  <div className="card-body body-card ">
                    <h5 className="card-title">Marketing</h5>
                    <div className="view-icon">
                      <i className="fa fa-bullhorn" />
                    </div>
                    <p className="card-text">
                      Peaceful; vibrant paradigm, collaborative cities. Shared
                      vocabulary agile, replicable, effective altruism youth.
                      Mobilize commitment to overcome injustice resilient,
                      uplift social transparent effective.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="card border-dark m-2">
                  <div className="card-body body-card ">
                    <h5 className="card-title">Manage</h5>
                    <div className="view-icon">
                      <i className="fa fa-tasks" />
                    </div>
                    <p className="card-text">
                      Change-makers innovation of shared unit of analysis.
                      Overcome injustice outcomes strategize vibrant boots on
                      the ground sustainable. Optimism, effective altruism
                      invest optimism corporate social.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="card border-dark m-2">
                  <div className="card-body body-card ">
                    <h5 className="card-title">Evolve</h5>
                    <div className="view-icon">
                      <i className="fa fa-line-chart" />
                    </div>
                    <p className="card-text">
                      Activate catalyze and impact contextualize humanitarian.
                      Unit of analysis overcome injustice storytelling altruism.
                      Thought leadership mass incarceration. Outcomes big data,
                      fairness, social game-changer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <Newsletter handleEmail={this.handleEmail} />
      </div>
    );
  }
}
