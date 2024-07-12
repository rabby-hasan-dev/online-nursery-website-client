import Card from "../../components/ui/Card";
import Container from "../../components/ui/Container";
import { useGetProuctQuery } from "../../redux/features/product/productApi";

const ProductHub = () => {
    const { data } = useGetProuctQuery(undefined);
    return (
        <Container>
            <h1 className=" text-4xl font-bold uppercase my-[60px] text-center ">popular products</h1>
            <div className="grid grid-cols-3 gap-4">
                {data?.data.map((item) => <Card key={item._id} images={item.images} title={item.title} price={item.price} rating={item.rating} ></Card>)}
            </div>
            {/* <Card></Card> */}
        </Container>
    );

};

export default ProductHub;