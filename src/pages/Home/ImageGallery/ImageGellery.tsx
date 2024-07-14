import imgGellary1 from '../../../assets/images/mosicView/item (1).jpg'
import imgGellary2 from '../../../assets/images/mosicView/item (2).jpg'
import imgGellary3 from '../../../assets/images/mosicView/item (3).jpg'
import imgGellary4 from '../../../assets/images/mosicView/item (4).jpg'
import imgGellary5 from '../../../assets/images/mosicView/item (5).jpg'
import imgGellary6 from '../../../assets/images/mosicView/item (6).jpg'
import imgGellary7 from '../../../assets/images/mosicView/item (7).jpg'
import imgGellary8 from '../../../assets/images/mosicView/item (8).jpg'
import Container from '../../../components/ui/Container'

const ImageGellery = () => {

    return (
        <div>

            <Container>
                <h1 className='text-4xl font-bold text-center mt-14 mb-10 uppercase '>Image Gellery</h1>
                <div className=" container mx-auto p-4 ">
                    <div className="grid grid-cols-3  gap-2 overflow-hidden ">
                        <div className=" col-span-2 row-span-2 h-[300px]  ">
                            <img src={imgGellary1} alt="Image 1" className=" w-full h-full   " />
                        </div>
                        <div className="h-[150px] ">
                            <img src={imgGellary2} alt="Image 2" className=" w-full h-full  " />
                        </div>
                        <div className="h-[140px] ">
                            <img src={imgGellary3} alt="Image 3" className=" w-full h-full  " />
                        </div>
                        <div className=" h-[220px]">
                            <img src={imgGellary4} alt="Image 4" className=" w-full h-full  " />
                        </div>
                        <div className="col-span-2 h-[220px] ">
                            <img src={imgGellary5} alt="Image 5" className=" w-full h-full  " />
                        </div>
                        <div className="h-[200px] ">
                            <img src={imgGellary6} alt="Image 6" className=" w-full h-full  " />
                        </div>
                        <div className=" h-[200px] ">
                            <img src={imgGellary7} alt="Image 7" className=" w-full h-full  " />
                        </div>
                        <div className=" h-[200px] ">
                            <img src={imgGellary8} alt="Image 8" className=" w-full h-full  " />
                        </div>

                    </div>
                </div>
            </Container>

        </div>
    );

};

export default ImageGellery;