import { Button, Col, Form, Input, Modal, Row } from "antd";
import { closeModal } from "../../redux/features/ModalState/modalSlice";
import { usePostProudctMutation } from "../../redux/features/product/productApi";
import { useAppDispatch, } from "../../redux/hooks";
import PHForm from "../form/PHForm";
import PHInput from "../form/PHInput";
import { Controller } from "react-hook-form";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

type TModalProps = {
    isOpen: boolean;
    id: string | undefined;
    payload: any;
}

// const dummydata = {
//     "title": " test ",
//     "description": "A beautiful flowering tree with stunning pink blooms in spring before leaves emerge. Grows to be 20-30 feet tall.",
//     "price": 20,
//     "category": "66934e8357cfbdaa1f8ca68c",
//     "brand": "amropali",
//     "stock": 15,
//     "rating": 4.3,
//     "images": "redbud_tree.jpg"
// }

let dummydata = {}

const Modals = ({ isOpen, id, payload }: TModalProps) => {
    const disPatch = useAppDispatch();
    const [createProduct] = usePostProudctMutation();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`



    console.log(payload);


    const productData = {
        title: payload?.data?.title,
        description: payload?.data.description,
        price: payload?.data?.price,
        category: payload?.data?.category?._id,
        brand: payload?.data?.brand,
        stock: payload?.data?.stock,
        rating: payload?.data?.rating,
        images: payload?.data?.images,
    }


    const onSubmit = async (data: any) => {
        const price = Number(data.price);
        const stock = Number(data.stock);
        const rating = Number(data.rating);
        let images;

        // image uploader

        const formData = new FormData();
        formData.append('image', data?.image)

        try {
            const res = await fetch(img_hosting_url, {
                method: 'POST',
                body: formData,

            });
            const imgResponse = await res.json();
            if (imgResponse.success) {
                const imgURL = imgResponse.data.display_url;

                images = imgURL;
            }
        } catch (error) {

            console.log(error);
        }

        const productData = { ...data, price: price, stock: stock, rating: rating, images }

        createProduct(productData)
        disPatch(closeModal())




    }



    return (
        <>
            <Modal title={id ? "Update Product" : " Create Product"} open={isOpen} footer={null} onCancel={() => disPatch(closeModal())} >
                <Row>
                    <Col span={24} >

                        <PHForm onSubmit={onSubmit} defaultValues={dummydata}  >
                            <Row gutter={8} >
                                <Col span={24} xl={12} md={12} lg={8} >
                                    <PHInput name="title" type="text" label="title"></PHInput>
                                </Col>
                                <Col span={24} xl={12} md={12} lg={8} >
                                    <PHInput name="description" type="text" label="description"></PHInput>
                                </Col>
                                <Col span={24} xl={12} md={12} lg={8} >
                                    <PHInput name="category" type="text" label="category"></PHInput>
                                </Col>
                                <Col span={24} xl={12} md={12} lg={8} >
                                    <PHInput name="brand" type="text" label="brand"></PHInput>
                                </Col>
                                <Col span={24} xl={12} md={12} lg={8} >
                                    <PHInput name="price" type="number" label="price"></PHInput>
                                </Col>
                                <Col span={24} xl={12} md={12} lg={8} >
                                    <PHInput name="stock" type="number" label="stock"></PHInput>
                                </Col>
                                <Col span={24} xl={12} md={12} lg={8} >
                                    <PHInput name="rating" type="number" label="rating"></PHInput>
                                </Col>
                                {/* <Col span={24} xl={12} md={12} lg={8} >
                                    <PHInput name="images" type="text" label="images"></PHInput>
                                   
                                </Col> */}
                                <Col span={24} xl={12} md={12} lg={8}  >
                                    <Controller
                                        name="image"
                                        render={({ field: { onChange, value, ...field } }) =>

                                        (
                                            <Form.Item label="Picture"  >
                                                <Input
                                                    type="file" {...field}
                                                    onChange={(e) => onChange(e.target.files?.[0])}
                                                    value={value?.fileName}
                                                ></Input>
                                            </Form.Item>
                                        )
                                        }

                                    />
                                </Col>
                            </Row>
                            <Button htmlType="submit"  >{!id ? 'Submit' : "Update"} </Button>
                        </PHForm>
                    </Col>
                </Row>
            </Modal>
        </>
    );
};

export default Modals;