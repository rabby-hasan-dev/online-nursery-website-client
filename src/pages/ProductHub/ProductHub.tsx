
import Container from "../../components/ui/Container";
import { useGetProuctQuery } from "../../redux/features/product/productApi";
import SearchFilterPagination from "../shared/SearchFilterPagination/SearchFilterPagination";
import { useGetAllCategoriesQuery } from "../../redux/features/categories/categorieApi";
import { Spin } from "antd";


const ProductHub = () => {
  const { data: AllProducts, isLoading: isLoadingProduct, isFetching: isFetchingPrduct, error: productError } = useGetProuctQuery(undefined);
  const { data: AllCategory, isLoading: isLoadingCategory, isFetching: isFeatchingCategory, error: categoryError } = useGetAllCategoriesQuery(undefined);
  const categories = AllCategory?.data || []
  const products = AllProducts?.data || []


  if (productError || categoryError) {
    return <div>Error loading data. Please try again later.</div>;
  }

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



