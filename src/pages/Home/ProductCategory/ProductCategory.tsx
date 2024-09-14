import CategoryCard from "../../../components/ui/CategoryCard";
import Container from "../../../components/ui/Container";
import { useGetAllCategoriesQuery } from "../../../redux/features/categories/categorieApi";
import { ICategory } from "../../../types/category.type";



const ProductCategory = () => {
    const {data:category}=useGetAllCategoriesQuery(undefined);

    
    return (
        <Container>
            <h1 className=" text-4xl font-bold uppercase my-[60px] text-center ">Top Category</h1>
            <div className="grid  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  xxl:grid-cols-4 gap-4">
                {category?.data.map((item:ICategory) => <CategoryCard key={item._id} item={item}></CategoryCard>)}
            </div>
        </Container>
    );
};

export default ProductCategory;
