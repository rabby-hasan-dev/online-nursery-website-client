import Card from "../../../components/ui/Card";
import { useGetProuctQuery } from "../../../redux/features/product/productApi";

const Product = () => {
    const { data } = useGetProuctQuery(undefined);
    console.log(data);
    return (
        <div>
            <h1 className=" text-4xl font-bold uppercase my-[60px] text-center ">popular products</h1>
            {data?.data.map((item) => <Card image={item.image} title={item.title} price={item.price} rating={item.rating} ></Card>)}
            {/* <Card></Card> */}
        </div>
    );
};

export default Product;