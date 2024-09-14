
import { Button, Col, Form, Input, Row } from "antd";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";

import { useAppDispatch,  } from "../../../../redux/hooks";
import {  usePostProudctMutation } from "../../../../redux/features/product/productApi";
import { uploadImage } from "../../../../utils/imageUploader";
import { closeModal } from "../../../../redux/features/ModalState/modalSlice";
import { toast } from "sonner";
import ModalProvider from "../../../../components/Modal/ModalProvider";
import PHForm from "../../../../components/form/PHForm";
import PHInput from "../../../../components/form/PHInput";
import TextArea from "antd/es/input/TextArea";
import PHSelect from "../../../../components/form/PHSelect";
import { useGetAllCategoriesQuery } from "../../../../redux/features/categories/categorieApi";
import { ICategory } from "../../../../types/category.type";



const CreateProduct = () => {
    const disPatch = useAppDispatch();
    const [createProduct] = usePostProudctMutation();
    const  {data:categories}=useGetAllCategoriesQuery(undefined);
    
    const categoryOptions = categories?.data?.map((item:ICategory) => ({
        value: item._id,
        label: item.name,
      }));

    const onSubmit:SubmitHandler<FieldValues> = async (data) => {
       
        const price = Number(data.price);
        const quantity = Number(data.quantity);
        const rating = Number(data.rating);

        // image uploader
        const images = await uploadImage(data?.image)

        try {
            const productData = { ...data, price: price, quantity: quantity, rating: rating, image: images }
            const res = await createProduct(productData).unwrap();
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
        <ModalProvider title={ " Create Product"}>
            <Row>
                <Col span={24} >

                    <PHForm onSubmit={onSubmit} >
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
                              
                                <PHSelect name="category" label="Seclect Category" options={categoryOptions}></PHSelect>
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
                        <Button htmlType="submit"  >Submit</Button>
                    </PHForm>
                </Col>
            </Row>
        </ModalProvider>
    );
};

export default CreateProduct;