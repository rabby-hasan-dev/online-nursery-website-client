
import { Link } from "react-router-dom";
import { ICategory } from "../../types/category.type";

const CategoryCard = ({ item }: { item: ICategory }) => {
    return (
        <div className="max-w-sm mx-auto shadow-xl">
            <div className="relative group">
                {/* Card Image */}
                <img className="w-full h-64 object-cover" src={item?.image} alt="Card Image" />

                {/* Default Button (visible) */}
                <div className="absolute inset-0 flex items-center justify-center">

                    <button className="px-4 py-2 bg-white text-black font-semibold rounded-2xl shadow-md transition duration-300 group-hover:opacity-0 uppercase">
                        {item?.name}        {/* Default button text */}
                    </button>

                </div>

                {/* Hover Button (hidden by default, visible on hover) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-35 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link to='/products'>
                        <button className="px-4 py-2 bg-white text-black font-semibold rounded-2xl shadow-md hover:bg-gray-200 transition uppercase">
                            {item?.productStock} Products  {/* Button text on hover */}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
