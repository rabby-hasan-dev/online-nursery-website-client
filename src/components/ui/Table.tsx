
const Table = ({ item }) => {
    const { img, title, category, price } = item;
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image </th>
                            <th>Title </th>
                            <th>Category</th>
                            <th>Price</th>
                            <th className="col-span-3s">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        <tr>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={img}
                                                alt="product_image" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>{title}</td>
                            <td>{category} </td>
                            <td>{price}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Update </button>
                                <button className="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Table;