import HeroSection from "../HeroSection/HeroSection";
import ImageGellery from "../ImageGallery/ImageGellery";
import Product from "../Product/Product";
import ProductCategory from "../ProductCategory/ProductCategory";

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <ProductCategory></ProductCategory>
            <Product></Product>
            <ImageGellery></ImageGellery>
        </div>
    );
};

export default Home;