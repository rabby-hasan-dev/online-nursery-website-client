import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Card = ({ id ,images, title, rating, price }) => {

    const handleAddToCard=(data)=>{
        console.log(data)
    }

    return (
      
       
       <div className="card bg-base-100 w-96 shadow-xl ">
            <figure className="p-8">
         <Link to={`/products/${id}`} >
                <img src={images} alt="product" />
         </Link>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title} </h2>
                <p>  {rating} </p>
                <p>${price} </p>

                <div className="card-actions justify-center ">
                    <button onClick={(e)=>{
                        e.stopPropagation();
                         handleAddToCard('data')
                    }}  className="btn w-full text-white   bg-[#0f172a] hover:bg-[#0f172a] hover:text-white"><FaCartShopping className="size-5 mr-1" /> Add To Cart</button>

                </div>
            </div>
        </div>
       
       
    );
};

export default Card;