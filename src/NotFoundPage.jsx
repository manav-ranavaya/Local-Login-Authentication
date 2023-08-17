import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "./assets/images/PageNotFound.png";
import "./NotFoundPage.css";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="not-found-container">
        <img
          className="not-found-image"
          src={PageNotFound}
          alt="Page Not Found"
        />
        <p className="not-found-button-container">
          <Link className="not-found-button" to="/dashboard">
            Go to Home
          </Link>
        </p>
      </div>
    );
  }
}

export default NotFoundPage;
