import { FaCartShopping } from "react-icons/fa6";


const Card = ({ title, rating, price }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl ">
            <figure className="p-8">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">title</h2>
                <p>Price</p>
                <p>rating</p>

                <div className="card-actions justify-center ">
                    <button className="btn w-full text-white   bg-[#0f172a] hover:bg-[#0f172a] hover:text-white"><FaCartShopping className="size-5 mr-1" /> Add To Cart</button>

                </div>
            </div>
        </div>
    );
};

export default Card;