import { useEffect, useState } from 'react';
import { Input, Select, Slider, Pagination, Button, Card, Rate, Row, Col, Spin } from 'antd';
import { ICategory } from '../../../types/category.type';
import { IProduct } from '../../../types/prduct.type';
import ProductCard from '../../../components/ui/ProductCard';

const { Search } = Input;
const { Option } = Select;

type SearchFilterPaginationProps = {
  products: IProduct[];
  categories: ICategory[];
}

const SearchFilterPagination = ({ products, categories }: SearchFilterPaginationProps) => {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(products)
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedProducts, setPaginatedProducts] = useState<IProduct[] | []>([]);

  // Handlers for search, filters, and sorting
  const handleSearch = (value: string) => {
    // Logic for filtering products based on search input
    setFilteredProducts(
      products.filter((product: IProduct) => product.title.toLowerCase().includes(value.toLowerCase()))
    );
  };

  const handleCategoryChange = (value: string) => {

    // Logic for filtering products by category
    setFilteredProducts(
      products.filter((product: IProduct) => product?.category?._id === value)
    );
  };

  const handlePriceChange = (value: any) => {
    // Logic for filtering products by price range
    setFilteredProducts(
      products.filter((product: IProduct) => product.price >= value[0] && product.price <= value[1])
    );
  };

  const handleSortChange = (value: string) => {

    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (value === 'priceLowHigh') return a.price - b.price;
      if (value === 'priceHighLow') return b.price - a.price;
      if (value === 'rating') return b.rating - a.rating;
      return 0;
    });
    setFilteredProducts(sortedProducts);
  };

  const handlePaginationChange = (value: number) => {
    setCurrentPage(value)
  }

  useEffect(() => {
    const startIndex = (currentPage - 1) * 5;
    const endIndex = startIndex + 5;
    const currentProducts = filteredProducts?.slice(startIndex, endIndex);
    setPaginatedProducts(currentProducts);
  }, [filteredProducts, currentPage])




  return (
    <div className="p-6 bg-white">

      {/* Search Bar */}
      <Search
        placeholder="Search for products"
        onSearch={handleSearch}
        className="mb-4"
        size="large"
        allowClear
      />

      <Row gutter={[16, 16]}>

        {/* Category Filter */}
        <Col span={8}>
          <Select
            placeholder="Select Category"
            onChange={handleCategoryChange}
            className="w-full"
            size="large"
          >
            {categories.map((category: ICategory) => (
              <Option key={category._id} value={category._id}>{category.name}</Option>
            ))}
          </Select>
        </Col>


        {/* Price Range Slider */}
        <Col span={8}>
          <Slider
            range
            min={0}
            max={1000}
            step={10}
            defaultValue={[0, 1000]}
            onChange={handlePriceChange}

          />
        </Col>


        {/* Sort By Dropdown */}
        <Col span={8}>
          <Select
            placeholder="Sort By"
            onChange={handleSortChange}
            className="w-full"
            size="large"
          >

            <Option value="priceLowHigh">Price: Low to High</Option>
            <Option value="priceHighLow">Price: High to Low</Option>
            <Option value="rating">Rating</Option>
          </Select>
        </Col>
      </Row>


      {/* Product List */}
      <div className="mt-10 grid  justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
        {!paginatedProducts ? <Spin></Spin> : null}
        {paginatedProducts.map((product: IProduct) => (
          <ProductCard key={product._id} item={product}></ProductCard>
        ))}
      </div>


      {/* Pagination */}
      <Pagination
        align='center'
        className="mt-8 text-center"
        total={filteredProducts.length}
        pageSize={5}
        defaultCurrent={currentPage}
        current={currentPage}
        onChange={(value) => handlePaginationChange(value)}
      // pageSize={pageSize}


      />
    </div>
  );
};

export default SearchFilterPagination;
