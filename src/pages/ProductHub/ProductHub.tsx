
import Container from "../../components/ui/Container";
import { useGetProuctQuery } from "../../redux/features/product/productApi";
import SearchFilterPagination from "../shared/SearchFilterPagination/SearchFilterPagination";
import { useGetAllCategoriesQuery } from "../../redux/features/categories/categorieApi";
import { Spin } from "antd";


const ProductHub = () => {
  const { data: AllProducts, isLoading: isLoadingProduct, isFetching: isFetchingPrduct } = useGetProuctQuery(undefined);
  const { data: AllCategory, isLoading: isLoadingCategory, isFetching: isFeatchingCategory } = useGetAllCategoriesQuery(undefined);
  const categories = AllCategory?.data || []
  const products = AllProducts?.data || []

  if (isLoadingProduct && isLoadingCategory) {
    return <Spin></Spin>
  }
  if (isFetchingPrduct && isFeatchingCategory && !categories && !products) {
    return <Spin></Spin>
  }

  return (
    <Container>
      <h1 className=" text-4xl font-bold uppercase mt-8 mb-5 text-center ">products list</h1>
      <SearchFilterPagination products={products} categories={categories}></SearchFilterPagination>

    </Container>
  );

};

export default ProductHub;



