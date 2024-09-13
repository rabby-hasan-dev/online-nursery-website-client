import { ICategory } from "../../types/category.type";


const CategoryCard = ({ item }:{item:ICategory}) => {
    return (
        <div className="max-w-sm mx-auto  shadow-xl">
            <div className="relative group">
                <img className="w-full h-64 object-cover" src={item?.image} alt="Card Image" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-35 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="px-4 py-2 bg-white text-black font-semibold rounded-2xl shadow-md hover:bg-gray-200 transition">{item?.productStock} </button>
                    
                </div>
            </div>
        </div>

    );
};

export default CategoryCard;