import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cart/CartSlice";


const ProductCard = ({ id, image, title, rating, price }) => {

    const dispatch = useAppDispatch();


    const handleAddToCart = (data) => {
        const addCartData = {
            productId: data,
            name: title,
            price: Number(price),
            quantity: 1,
        }

        dispatch(addToCart(addCartData))
    }

    return (

        <Link to={`/products/${id}`} className="block" >
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="card image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title} </h2>
                    <p>  {rating} </p>
                    <p>${price} </p>
                    <div className="card-actions justify-center">
                        <button onClick={(e) => {
                            e.stopPropagation();// Stop navigation on button click
                            e.preventDefault();
                            handleAddToCart(id)
                        }} className="btn w-full text-white   bg-[#0f172a] hover:bg-[#0f172a] hover:text-white"><FaCartShopping className="size-5 mr-1" /> Add To Cart</button>
                    </div>
                </div>
            </div>
        </Link>


    );
};

export default ProductCard;