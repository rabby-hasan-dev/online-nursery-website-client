
import Container from "../../components/ui/Container";
import { useGetProuctQuery } from "../../redux/features/product/productApi";
import ProductCard from "../../components/ui/ProductCard";
import { IProduct } from "../../types/prduct.type";


const ProductHub = () => {
  const { data } = useGetProuctQuery(undefined);
  return (
    <Container>
      <h1 className=" text-4xl font-bold uppercase my-[60px] text-center ">products list</h1>
      <div className="grid grid-cols-3 gap-4">
        {data?.data.map((item:IProduct) => <ProductCard key={item._id} id={item._id} image={item?.image} title={item.title} price={item.price} rating={item.rating} ></ProductCard>)}
      </div>

    </Container>
  );

};

export default ProductHub;



