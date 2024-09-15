
import { Button, Spin } from "antd";
import { useAppDispatch, useAppSelector, } from "../../../../redux/hooks";
import { openModal } from "../../../../redux/features/ModalState/modalSlice";
import TableRow from "../../../../components/ui/TableRow";
import { useGetAllCategoriesQuery, } from "../../../../redux/features/categories/categorieApi";
import { ICategory } from "../../../../types/category.type";
import UpdatedCategory from "../UpdatedCategory/UpdatedCategory";
import CreateCategory from "../CreateCategory/CreateCategory";
import { toast } from "sonner";


const Categories = () => {
    const disPatch = useAppDispatch();
    const id = useAppSelector((state) => state.modal.id);
    const { data: categories, isLoading, isFetching,error } = useGetAllCategoriesQuery(undefined);

    if(isLoading ||isFetching){
        return <Spin></Spin>
    }
    if(error){
        return toast.error('API Something problem!')
    }

    return (
        <div>
            {
                !id ? <CreateCategory></CreateCategory> : <UpdatedCategory></UpdatedCategory>
            }
            <h1 className=" text-2xl font-bold uppercase text-center ">Category List</h1>
            <div className="flex justify-between items-center mb-5">
                <p className="font-bold text-lg" > Total Category: { categories?.data?.length} </p>
                <Button className="uppercase" shape="round" onClick={() => disPatch(openModal(undefined))} >Create new Category  </Button>

            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image </th>
                                <th>Name </th>
                                <th>Description</th>
                                <th> Number Of Product</th>
                                <th className="col-span-3s">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories?.data.map((item: ICategory) =>
                                    <TableRow key={item._id} item={item} ></TableRow>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>

        </div>


    );
};

export default Categories;