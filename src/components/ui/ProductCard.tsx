import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cart/CartSlice";
import { ICartItem } from "../../types/cart.type";
import { IProduct } from "../../types/prduct.type";

import { Rate } from "antd";
import { toast } from "sonner";


const ProductCard = ({ item }: { item: IProduct }) => {
    const dispatch = useAppDispatch();

    const handleAddToCart = (data: string) => {
        if (item.quantity === 0) {
            return toast.error(" Sorry! Out Of Stock. ")
        }
        const addCartData: ICartItem = {
            productId: data,
            name: item?.title,
            price: Number(item?.price),
            quantity: 1,
        }

        dispatch(addToCart(addCartData))
    }

    return (

        <Link to={`/products/${item?._id}`} className="block" >
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                    className="hover:scale-125 transition duration-500 cursor-pointer"
                        src={item?.image}
                        alt="card image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item?.title} </h2>
                    {/* <p> <StarOutlined/>  {item?.rating} </p> */}
                    <Rate disabled defaultValue={item?.rating} />
                    <p>${item?.price} </p>
                    <div className="card-actions justify-center">
                        <button onClick={(e) => {
                            e.stopPropagation();// Stop navigation on button click
                            e.preventDefault();
                            handleAddToCart(item?._id)
                        }} className="btn w-full text-white   bg-[#0f172a] hover:bg-[#0f172a] hover:text-white"><FaCartShopping className="size-5 mr-1" /> Add To Cart</button>
                    </div>
                </div>
            </div>
        </Link>


    );
};

export default ProductCard;