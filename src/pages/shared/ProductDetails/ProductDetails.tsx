import { Avatar, Card, Descriptions, Image, Spin } from "antd";
import { FaCartShopping } from "react-icons/fa6";
import { useGetSingleProuctQuery } from "../../../redux/features/product/productApi";
import { useParams } from "react-router-dom";
import Container from "../../../components/ui/Container";
import { useAppDispatch, } from "../../../redux/hooks";
import { addToCart, } from "../../../redux/features/cart/CartSlice";
import { StarOutlined } from "@ant-design/icons";
import { ICartItem } from "../../../types/cart.type";
import { toast } from "sonner";


const ProductDetails = () => {

    const { productId } = useParams();
    const dispatch = useAppDispatch();
    const { data, isLoading, isFetching, error } = useGetSingleProuctQuery(productId, { skip: !productId });
    const productItem = data?.data || {};
    const catagoryData = productItem.category || {};

    if (isLoading || isFetching) {
        return <Spin></Spin>
    }
    if (error) {
        return toast.error('API Something problem!')
    }

    const handleAddToCart = (data: string | undefined) => {

        if (productItem.quantity === 0) {
           return toast.error(" Sorry! Out Of Stock. ")
        }
        const addCartData: ICartItem = {
            productId: data,
            name: productItem.title,
            price: Number(productItem.price),
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
                            <h1 className="font-bold text-2xl">{productItem?.title} </h1>
                            <p> <StarOutlined /> {productItem?.rating} </p>

                        </div>
                        <p className="text-xl font-semibold ">$ {productItem?.price} </p>
                        <div className="flex justify-between items-center">
                            <p>Available Stok: {productItem?.quantity} </p>
                            <p>{productItem?.quantity === 0 ? "Stock Out" : 'in Stock -Redy to ship'} </p>
                        </div>
                    </div>
                    <hr />
                    <div className=" space-y-4 " >
                        <p>{productItem.description} </p>
                        <hr />
                        <button onClick={() => handleAddToCart(productId)} className="btn  text-white   bg-[#0f172a] hover:bg-[#0f172a] hover:text-white"> <FaCartShopping className="size-5 mr-1" /> Add To Cart</button>
                    </div>
                </Card>
            </div>

            {/* Category data */}
            <Card className="shadow-lg rounded-lg mb-5">
                <Descriptions
                    title="Category Details"
                    bordered
                    layout="vertical"
                    column={2}
                >
                    <Descriptions.Item label="Picture">{<Avatar size={'large'} shape="square" src={catagoryData?.image} ></Avatar>}</Descriptions.Item>
                    <Descriptions.Item label="Category Name">{catagoryData?.name}</Descriptions.Item>
                    <Descriptions.Item label="Description">{catagoryData?.description}</Descriptions.Item>
                    <Descriptions.Item label="Total Product Stock">{catagoryData?.productStock}</Descriptions.Item>
                </Descriptions>
            </Card>
        </Container>
    );
};

export default ProductDetails;