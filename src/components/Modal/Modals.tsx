import { Button, Modal } from "antd";
import { closeModal } from "../../redux/features/ModalState/modalSlice";
import { usePostProudctMutation } from "../../redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import PHForm from "../form/PHForm";
import PHInput from "../form/PHInput";


const Modals = () => {
    const isOpen = useAppSelector((state) => state.modal.isOpen)
    const disPatch = useAppDispatch();
    const [createProduct, { data }] = usePostProudctMutation();

    const onSubmit = (data) => {
        const price = Number(data.price);
        const stock = Number(data.stock);
        const rating = Number(data.rating);
        const productData = { ...data, price: price, stock: stock, rating: rating }

        console.log(productData);

        createProduct(productData)





        disPatch(closeModal())
    }


    return (
        <div>
            <Modal title="Create Product" open={isOpen} footer={null} onCancel={() => disPatch(closeModal())} >
                <PHForm onSubmit={onSubmit} >
                    <PHInput name="title" type="text" label="title"></PHInput>
                    <PHInput name="description" type="text" label="description"></PHInput>
                    <PHInput name="category" type="text" label="category"></PHInput>
                    <PHInput name="brand" type="text" label="brand"></PHInput>
                    <PHInput name="price" type="number" label="price"></PHInput>
                    <PHInput name="stock" type="number" label="stock"></PHInput>
                    <PHInput name="rating" type="number" label="rating"></PHInput>
                    <PHInput name="images" type="text" label="images"></PHInput>
                    <Button htmlType="submit"  >Submit</Button>

                </PHForm>
            </Modal>
        </div>
    );
};

export default Modals;