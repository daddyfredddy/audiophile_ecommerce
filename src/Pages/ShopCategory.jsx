import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Footer from "../Components/Footer";

const ShopCategory = ({ category }) => {
  const { ShopData } = useContext(ShopContext);
  console.log(ShopData);

  return (
    <div>
      <div className="h-60 bg-kalas1 uppercase text-kalas5 flex justify-center items-center font-fonty font-bold tracking-small2 text-4xl">
        <h1>{category}</h1>
      </div>
      <div className="flex justify-between">
        <div className="h-big w-big1">
          <div></div>
          <img src="" alt="" className="" />
        </div>
        <div className="h-big w-big1"></div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopCategory;
