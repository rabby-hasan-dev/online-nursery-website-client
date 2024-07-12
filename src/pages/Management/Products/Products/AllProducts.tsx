import { Button } from "antd";

const AllProduct = () => {
    return (
        <div>
            <h1 className=" text-2xl font-bold uppercase text-center ">Produdcts List</h1>
            <div className="flex justify-end">
                <Button className="uppercase" >Create new product </Button>
            </div>

        </div>
    );
};

export default AllProduct;