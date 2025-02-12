"use client";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Image from "next/image";
import Product from "./components/Product/Product";

const Home = () => {
  return (
    <div className="w-full relative bg-[#FFFAE5] min-h-screen overflow-x-hidden text-left text-base text-black font-roboto">
      <Hero />
      {/* Hero End */}
    <Product/>
      {/* Footer Start */}
      <Footer/>
      {/* Footer End */}

      {/* Stylish Collection Start */}
      {/* <div className="absolute top-[937px] left-[120px] w-[1320px] h-[1073px] text-sm font-serif">
        <div className="relative">
          <div className="absolute top-0 right-0 w-[653px] h-[653px] rounded-full bg-gradient-to-l from-[#c900c1] to-transparent blur-[360px]"></div>
          <div className="absolute top-[334px] left-0 w-[1200px] h-[1108px]">
            <Image
              className="absolute top-0 left-[622px] w-[139px] h-[92px] overflow-hidden"
              width={139}
              height={92}
              alt=""
              src="/Layer_2.png"
            />
            <div className="absolute top-[65px] left-0 flex flex-col items-start gap-[80px]">
              <div className="flex flex-col items-start gap-[24px]">
                <b className="relative text-[50px]">Collection Elégante D'Accessoires</b>
                <div className="w-[766px] relative text-[20px] leading-[152.02%] text-gray-600">
                  Restez à jour avec nos informations et nos articles de blog engageants sur les accessoires de maison et la mode modernes dans l'industrie.
                </div>
              </div>
              product
            </div>
          </div>
        </div>
      </div> */}
      {/* Stylish Collection End */}

      
    </div>
  );
};

export default Home;
