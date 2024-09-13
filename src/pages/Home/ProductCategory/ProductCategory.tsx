import CategoryCard from "../../../components/ui/CategoryCard";
import Container from "../../../components/ui/Container";
import { useGetAllCategoriesQuery } from "../../../redux/features/categories/categorieApi";
import { ICategory } from "../../../types/category.type";



const ProductCategory = () => {
    const {data:category}=useGetAllCategoriesQuery(undefined);

    
    return (
        <Container>
            <h1 className=" text-4xl font-bold uppercase my-[60px] text-center ">Top Category</h1>
            <div className="grid  lg:grid-cols-3 gap-4">
                {category?.data.map((item:ICategory) => <CategoryCard key={item._id} item={item}></CategoryCard>)}
            </div>
        </Container>
    );
};

export default ProductCategory;
