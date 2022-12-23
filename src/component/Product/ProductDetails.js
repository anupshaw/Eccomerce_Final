import { useParams } from "react-router-dom";
import productsArr from "../../Data/DummyData";
import Button from "../UI/Button";
import { AiOutlineShoppingCart,AiFillStar } from "react-icons/ai";
import { GiElectric } from "react-icons/gi";
import classes from './ProductDetails.module.css'
import ReactMagnify from "../UI/ReactImageMagnify";

const ProductDetails = () => {
  const params = useParams();

  const paramId = params.id.split(":");



  const filteredItem = productsArr.filter((item) => {
    return item.id === +paramId[1];
  });



  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.img}>
          <ReactMagnify src={filteredItem[0].imageUrl} alt="img2"/>
          {/* <img src={filteredItem[0].imageUrl} alt="img2"></img> */}
        </div>
        <div className={classes.btn}>
          <Button className={classes.btn1}>
            <AiOutlineShoppingCart className={classes.addCartIcon}/>
            Add to cart
          </Button>
          <Button className={classes.btn1}>
            <GiElectric className={classes.buyNowIcon}/>
            Buy Now
          </Button>
        </div>
      </div>
      <div className={classes.right}>
        <p>Rating and Review</p>
        <p>4<AiFillStar ></AiFillStar></p>
      </div>
    </div>
  );
};

export default ProductDetails;
