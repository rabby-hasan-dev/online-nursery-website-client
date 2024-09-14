
import Container from "../../../components/ui/Container";
import { useGetProuctQuery } from "../../../redux/features/product/productApi";
import ProductCard from "../../../components/ui/ProductCard";
import { IProduct } from "../../../types/prduct.type";


const Product = () => {
    const { data } = useGetProuctQuery(undefined);

    return (
        <Container>
            <h1 className="text-4xl font-bold uppercase my-[60px] text-center ">popular products</h1>
            <div className="grid lg:grid-cols-3 gap-4 mx-auto">
                {data?.data.map((item:IProduct) => <ProductCard key={item._id} item={item}  ></ProductCard>)}
            </div>

        </Container>
    );
};

export default Product;