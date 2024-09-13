import { Button, Col, Form, Input, Row } from "antd";
import { closeModal } from "../../../../redux/features/ModalState/modalSlice";
import PHForm from "../../../../components/form/PHForm";
import PHInput from "../../../../components/form/PHInput";
import { Controller, } from "react-hook-form";
import { toast } from "sonner";
import ModalProvider from "../../../../components/Modal/ModalProvider";
import { usePostCategoyMutation } from "../../../../redux/features/categories/categorieApi";
import TextArea from "antd/es/input/TextArea";
import { uploadImage } from "../../../../utils/imageUploader";
import { useAppDispatch } from "../../../../redux/hooks";





const CreateCategory = () => {

    const disPatch = useAppDispatch();
    const [createCategory] = usePostCategoyMutation();

    const onSubmit = async (data: any) => {

        // image uploader
        const images = await uploadImage(data?.image)

        try {
            const categoryData = { ...data, image: images }
              
            const res = await createCategory(categoryData).unwrap();
            if (res.success) {
                toast.success(res.message)
            }
            disPatch(closeModal())
        } catch (error) {
            console.log(error);
            toast.error('Category creation faild')
        }


    }


    return (

        <ModalProvider title={"Create Category"}>
            <Row>
                <Col span={24} >

                    <PHForm onSubmit={onSubmit} >
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
                        <Button htmlType="submit"  >Submit</Button>
                    </PHForm>
                </Col>
            </Row>
        </ModalProvider>
    );
};

export default CreateCategory;