import { MdShoppingCart } from "react-icons/md";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData/localDatabase.json";
import Details from "../Details/Details";

const ProductDetails = () => {
  const { details } = useParams();
  const productDetails = fakeData.find((e) => e.key === details);
  //console.log(productDetails);

  return (
    <>
      <nav class="container navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/shop">
            EASY65
          </a>
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto"></ul>
            <Link to="/review" className="iconLink">
              <MdShoppingCart className="iconLast" />
            </Link>
          </div>
        </div>
      </nav>
      <Details details={productDetails}></Details>
    </>
  );
};

export default ProductDetails;
