
import { Button, Col, Form, Input, Row, Spin } from "antd";
import { Controller } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { useGetSingleProuctQuery, useUpdateProudctMutation } from "../../../../redux/features/product/productApi";
import { uploadImage } from "../../../../utils/imageUploader";
import { closeModal } from "../../../../redux/features/ModalState/modalSlice";
import { toast } from "sonner";
import ModalProvider from "../../../../components/Modal/ModalProvider";
import PHForm from "../../../../components/form/PHForm";
import PHInput from "../../../../components/form/PHInput";
import TextArea from "antd/es/input/TextArea";




const UpdateProduct = () => {
    const disPatch = useAppDispatch();
    const [updateProduct] = useUpdateProudctMutation();
    const id = useAppSelector((state) => state.modal.id);
    const { data: singleProduct, isLoading, error } = useGetSingleProuctQuery(id, { skip: !id });



    if (isLoading) {
        return <Spin></Spin>;
    }

    if (error) {
        return toast.error('Error loading Product')
    }

    if (!singleProduct?.data) {
        return toast.error('Product not found');
    }




    const onSubmit = async (data: any) => {
        console.log(data)
        const price = Number(data.price);
        const quantity = Number(data.quantity);
        const rating = Number(data.rating);

        // image uploader
        let images;

        if (data?.image && typeof data.image !== "string") {
            images = await uploadImage(data?.image)

        } else {
            images = undefined;
        }

        try {
            const productData = { ...data, price: price, quantity: quantity, rating: rating, image: images }
            const res = await updateProduct({ id, data: productData }).unwrap();
            if (res.success) {
                toast.success(res.message)
            }
            disPatch(closeModal())
        } catch (error) {
            console.log(error);
            toast.error('Product creation faild')
        }




    }



    return (
        <ModalProvider title={id ? "Update Product" : " Create Product"}>
            <Row>
                <Col span={24} >

                    <PHForm onSubmit={onSubmit} defaultValues={singleProduct?.data}  >
                        <Row gutter={8} >
                            <Col span={24} xl={12} md={12} lg={8} >
                                <PHInput name="title" type="text" label="title"></PHInput>
                            </Col>
                            <Col span={24} xl={12} md={12} lg={8} >
                                <PHInput name="brand" type="text" label="brand"></PHInput>
                            </Col>
                            <Col span={24} xl={12} md={12} lg={8} >
                                <PHInput name="price" type="number" label="price"></PHInput>
                            </Col>

                            <Col span={24} xl={12} md={12} lg={8} >
                                <PHInput name="category" type="text" disabled label="category"></PHInput>
                            </Col>
                            <Col span={24} xl={12} md={12} lg={8} >
                                <PHInput name="quantity" type="number" label="quantity"></PHInput>
                            </Col>
                            <Col span={24} xl={12} md={12} lg={8} >
                                <PHInput name="rating" type="number" label="rating"></PHInput>
                            </Col>
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

                            {/* descriptions */}
                            <Col span={24} xl={12} md={12} lg={8}  >
                                <Controller
                                    name="description"
                                    render={({ field }) =>

                                    (
                                        <Form.Item label="Description"  >
                                            <TextArea  {...field} rows={4} placeholder="Write Description" />
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
        </ModalProvider>
    );
};

export default UpdateProduct;