import { useParams } from "react-router";
import fakeData from "../../fakeData/localDatabase.json";
import Details from "../Details/Details";

const ProductDetails = () => {
  const { details } = useParams();

  const productDetails = fakeData.find((e) => e.key === details);
  //console.log(productDetails);

  return (
    <>
      <h1 className="text-center">EASY65</h1>
      <Details details={productDetails}></Details>
    </>
  );
};

export default ProductDetails;
