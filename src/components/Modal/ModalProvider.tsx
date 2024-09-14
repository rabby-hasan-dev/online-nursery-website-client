import { Modal } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeModal } from "../../redux/features/ModalState/modalSlice";
import { ReactNode } from "react";


const ModalProvider = ({title, children}:{title:string; children:ReactNode}) => {
    const isOpen = useAppSelector((state) => state.modal.isOpen);
    const disPatch = useAppDispatch();

   
    return (
        <Modal  title={title} open={isOpen} footer={null} onCancel={() => disPatch(closeModal())}  >
            {children}
        </Modal>
    );
};

export default ModalProvider;