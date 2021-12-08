import { faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <Link className="navbar-brand" to="/">
              <FontAwesomeIcon icon={faStoreAlt} className="easy65Icon" />
              <span className="shop-easy65">Easy65</span>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse"
              id="navbarSupportedContent"
            ></div>
            <p>Login</p>
          </div>
        </nav>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="text-center">
          <h1 className="blogcomming">WE'RE COMING SOON</h1>
          <hr />
          <p>We're coming soooon! We're working </p>
          <p>hard to give you the best experience!</p>
          <a href="https://easy-65.web.app/" target="_blank">
            Easy65.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
