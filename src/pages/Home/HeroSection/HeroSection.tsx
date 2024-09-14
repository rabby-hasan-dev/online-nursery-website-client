import { Carousel } from "antd";
import slider1 from '../../../assets/images/slider/slider (1).jpg';
import slider2 from '../../../assets/images/slider/slider (2).jpg';
import slider3 from '../../../assets/images/slider/slider (3).jpg';
import slider4 from '../../../assets/images/slider/slider (4).jpg';




const HeroSection = () => {


    return (
        <>
            <Carousel autoplay>
                <div className="relative">
                    <img className="max-h-[600px] w-full object-cover" src={slider1} alt="img" />
                    <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
                        <div className="text-white text-center">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-3">Welcome to our Online Nursery</h1>
                            <p className="text-base md:text-lg lg:text-xl">Breathe better by planting trees</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img className="max-h-[600px] w-full object-cover" src={slider2} alt="img" />
                    <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
                        <div className="text-white text-center">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-3">Welcome to our Online Nursery</h1>
                            <p className="text-base md:text-lg lg:text-xl">Breathe better by planting trees</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img className="max-h-[600px] w-full object-cover" src={slider3} alt="img" />
                    <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
                        <div className="text-white text-center">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-3">Welcome to our Online Nursery</h1>
                            <p className="text-base md:text-lg lg:text-xl">Breathe better by planting trees</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img className="max-h-[600px] w-full object-cover" src={slider4} alt="img" />
                    <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
                        <div className="text-white text-center">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-3">Welcome to our Online Nursery</h1>
                            <p className="text-base md:text-lg lg:text-xl">Breathe better by planting trees</p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </>
    );
};

export default HeroSection;