
import { Button, Col, Form, Input, Row, Spin } from "antd";
import { closeModal } from "../../../../redux/features/ModalState/modalSlice";
import { useAppDispatch, useAppSelector, } from "../../../../redux/hooks";
import PHForm from "../../../../components/form/PHForm";
import PHInput from "../../../../components/form/PHInput";
import { Controller, FieldValues, SubmitHandler, } from "react-hook-form";
import { toast } from "sonner";
import ModalProvider from "../../../../components/Modal/ModalProvider";
import { useGetSingleCategoyQuery, useUpdateCategoyMutation } from "../../../../redux/features/categories/categorieApi";
import TextArea from "antd/es/input/TextArea";
import { uploadImage } from "../../../../utils/imageUploader";






const UpdatedCategory = () => {
    const disPatch = useAppDispatch();
    const [updateCategory] = useUpdateCategoyMutation();
    const id = useAppSelector((state) => state.modal.id);
    const { data: category, isLoading, error } = useGetSingleCategoyQuery(id, { skip: !id });


    if (isLoading) {
        return <Spin></Spin>;
    }

    if (error) {
        return toast.error('Error loading Category')
    }

    if (!category?.data) {
        return toast.error('Category not found');
    }



    const onSubmit:SubmitHandler<FieldValues> = async (data) => {
     
        // image uploader
        let images;

        if (data?.image && typeof data.image !== "string") {
            images = await uploadImage(data?.image)

        } else {
            images = undefined;
        }

        try {
            const categoryData = { ...data, image: images }
            const res = await updateCategory({ id, data: categoryData }).unwrap();
            if (res.success) {
                toast.success(res.message)
            }
            disPatch(closeModal())
        } catch (error) {
            console.log(error);
            toast.error('Category updated faild')
        }


    }

    return (
        <ModalProvider title={"Update Category"}>
            <Row>
                <Col span={24} >

                    <PHForm onSubmit={onSubmit} defaultValues={category?.data}  >
                        <Row gutter={8} >
                            <Col span={24} xl={12} md={12} lg={8} >
                                <PHInput name="name" type="text" label="Name"></PHInput>
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
                        <Button htmlType="submit"  > Update </Button>
                    </PHForm>
                </Col>
            </Row>
        </ModalProvider>
    );
};

export default UpdatedCategory;