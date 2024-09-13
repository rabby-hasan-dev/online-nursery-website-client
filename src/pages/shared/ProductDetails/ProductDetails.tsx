import { Button, Card, Image } from "antd";
import { FaCartShopping } from "react-icons/fa6";
import { useGetSingleProuctQuery } from "../../../redux/features/product/productApi";
import { useParams } from "react-router-dom";
import Container from "../../../components/ui/Container";
import { useAppDispatch,  } from "../../../redux/hooks";
import { addToCart, } from "../../../redux/features/cart/CartSlice";

const ProductDetails = () => {
    const { productId } = useParams();
    const { data } = useGetSingleProuctQuery(productId, { skip: !productId });
    const productItem = data?.data || {};
    const dispatch=useAppDispatch();
    
   
    const handleAddToCart=(data)=>{
      const addCartData=  {
            productId:data,
            name: productItem.title,
            price: Number(productItem.price) ,
            quantity: 1,
          }

            dispatch(addToCart(addCartData))
    }

    return (
        <Container>
            <div className=" md:flex  justify-center m-4 md:m-[60px] ">

                <Card className=" md:h-[520px] md:w-1/2 lg:mr-8 ">
                  <Image 
                  src={productItem?.image}
                  height={480}
                   ></Image>
                </Card>
                <Card className="md:w-1/2  space-y-2" >
                    <div className="space-y-4" >
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold text-2xl">{productItem.title} </h1>
                            <p>{productItem.rating} </p>

                        </div>
                        <p className="text-xl font-bold "> $ {productItem.price} </p>
                        <p>in Stock -Redy to ship</p>
                    </div>
                    <hr />
                    <div className=" space-y-4 " >
                        <h4>SELECT QUANTITY</h4>
                        <div className="flex  items-center space-x-4">
                            <Button   className="font-semibold" >-</Button>
                            <p className="font-semibold" >0</p>
                            <Button className="font-semibold" >+</Button>

                        </div>
                        <hr />
                        <button onClick={()=>handleAddToCart(productId)} className="btn  text-white   bg-[#0f172a] hover:bg-[#0f172a] hover:text-white"> <FaCartShopping className="size-5 mr-1" /> Add To Cart</button>
                    </div>
                </Card>
            </div>
        </Container>
    );
};

export default ProductDetails;