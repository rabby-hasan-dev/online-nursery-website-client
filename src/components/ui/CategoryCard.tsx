
import { Link } from "react-router-dom";
import { ICategory } from "../../types/category.type";
import { Button } from "antd";

const CategoryCard = ({ item }: { item: ICategory }) => {
    return (
        <div className="max-w-sm mx-auto shadow-xl">
            <div className="relative group">
                {/* Card Image */}
                <img className="w-full h-64 object-cover" src={item?.image} alt="Card Image" />

                {/* Default Button (visible) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="middle" shape="round" type="default">{item?.name}</Button>
                </div>

                {/* Hover Button (hidden by default, visible on hover) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-35 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link to='/products'>
                        <Button size="large" shape="round" type="default">{item?.productStock} Products</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
