import { Button } from "antd";
import { FaCartShopping } from "react-icons/fa6";
import { useGetProuctQuery } from "../../../redux/features/product/productApi";
import { useParams } from "react-router-dom";
import Container from "../../../components/ui/Container";

const ProductDetails = () => {
    const { productId } = useParams();

    const { data } = useGetProuctQuery(productId);
    console.log(data);
    return (
        <Container>
            <div className=" md:flex  justify-center m-4 md:m-[60px] ">

                <div className="md:w-[520px] md:h-[520px] md:w-1/2 lg:mr-8 ">
                    <img className="w-full h-full" src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-118143566.jpg" />
                </div>
                <div className="md:w-1/2  space-y-2" >
                    <div className="space-y-4" >
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold text-2xl">title</h1>
                            <p>ratting</p>

                        </div>
                        <p className="text-xl font-bold "> $ price</p>
                        <p>in Stock -Redy to ship</p>
                    </div>
                    <hr />
                    <div className=" space-y-4 " >
                        <h4>SELECT QUANTITY</h4>
                        <div className="flex  items-center space-x-4">
                            <Button className="font-semibold" >-</Button>
                            <p className="font-semibold" >0</p>
                            <Button className="font-semibold" >+</Button>

                        </div>
                        <hr />
                        <button className="btn  text-white   bg-[#0f172a] hover:bg-[#0f172a] hover:text-white"> <FaCartShopping className="size-5 mr-1" /> Add To Cart</button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProductDetails;