import { Carousel } from "antd";
import slider1 from '../../../assets/images/slider/slider (1).jpg';
import slider2 from '../../../assets/images/slider/slider (2).jpg';
import slider3 from '../../../assets/images/slider/slider (3).jpg';
import slider4 from '../../../assets/images/slider/slider (4).jpg';


const HeroSection = () => {

    const contentStyle: React.CSSProperties = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };


    return (
        <>
            <Carousel autoplay >

                <div className=" mx-auto relative">
                    <img className="max-h-[600px] w-full " src={slider1} alt="img" />

                    <div className=" text-white absolute top-0 md:top-1/4  lg:top-1/4 xl:top-1/4 lg:bottom-1/4 left-0 md:left-10 lg:left-1/4 xl:left-1/4   p-4  bg-black opacity-75 ">
                        <div className="text-center">
                            <h1 className="text-4xl uppercase font-bold my-3">Well Come to our Online Nursery</h1>
                            <p className="text-lg "> Brathe better by planting trees</p>
                        </div>
                    </div>



                </div>
                <div className="relative">
                    <img className="max-h-[600px] w-full " src={slider2} alt="img" />

                    <div className=" text-white absolute top-0 md:top-1/4  lg:top-1/4 xl:top-1/4 lg:bottom-1/4 left-0 md:left-10 lg:left-1/4 xl:left-1/4   p-4  bg-black opacity-75 ">
                        <div className="text-center">
                            <h1 className="text-4xl uppercase font-bold my-3">Well Come to our Online Nursery</h1>
                            <p className="text-lg "> Brathe better by planting trees</p>
                        </div>
                    </div>

                </div>
                <div className="relative">
                    <img className="max-h-[600px] w-full " src={slider3} alt="img" />

                    <div className=" text-white absolute top-0 md:top-1/4  lg:top-1/4 xl:top-1/4 lg:bottom-1/4 left-0 md:left-10 lg:left-1/4 xl:left-1/4   p-4  bg-black opacity-75 ">
                        <div className="text-center">
                            <h1 className="text-4xl uppercase font-bold my-3">Well Come to our Online Nursery</h1>
                            <p className="text-lg "> Brathe better by planting trees</p>
                        </div>
                    </div>

                </div>
                <div className="relative">
                    <img className="max-h-[600px] w-full " src={slider4} alt="img" />

                    <div className=" text-white absolute top-0 md:top-1/4  lg:top-1/4 xl:top-1/4 lg:bottom-1/4 left-0 md:left-10 lg:left-1/4 xl:left-1/4   p-4  bg-black opacity-75 ">
                        <div className="text-center">
                            <h1 className="text-4xl uppercase font-bold my-3">Well Come to our Online Nursery</h1>
                            <p className="text-lg "> Brathe better by planting trees</p>
                        </div>
                    </div>

                </div>

            </Carousel>
        </>
    );
};

export default HeroSection;