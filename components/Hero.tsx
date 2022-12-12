import React from "react";

const HeroSection = () => {
  return (
    <React.Fragment>
      <div
        className="hero sm:h-[600px] h-[300px] "
        style={{ backgroundImage: `url("assets/img/hero/ai-face-boy.jpeg")` }}
        // style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        {/* <div className="hero-overlay bg-opacity-0"></div> */}
        <div className="container px-2 sm:mx-auto sm:px-0  h-full w-full grid grid-cols-1 sm:grid-cols-2  ">
          <div className=" flex flex-col  items-start ">
            {/* mobile */}
            <div className=" sm:hidden text-white justify-center mt-10 ">
              <h1 className="text-sm font-poppins">
                welcome to
                <br />
                <span className="text-primaryGold text-3xl font-bold leading-6 tracking-wide">
                  smartDerm
                </span>
              </h1>
              {/* <h1 className="text-xl font-poppins">Welcome to smartDerm</h1> */}
              <hr className="w-20 mt-2 border border-primaryBlue" />
              <p className="w-3/5   text-base  leading-6   tracking-wider font-normal mt-5 font-poppins">
                your personalized, <br />
                Ai-powered and clinically effective skincare advisor
              </p>

              <div className="w-full pt-12 text-base tracking-wide font-montserrat">
                <button className=" px-3 py-1 flex items-center rounded-none bg-green-900 ">
                  Request a demo
                  <svg
                    className="w-5 h-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* laptop and bigger screens */}
            <div className=" hidden  sm:flex sm:flex-col sm:text-white sm:justify-center my-auto">
              <h1 className="text-xl tracking-wider leading-6  font-cabin">
                welcome to <br />{" "}
                <span className="text-primaryGold text-6xl font-bold tracking-wide">
                  smartDerm
                </span>
              </h1>
              {/* <h1 className="text-xl font-poppins">Welcome to smartDerm</h1> */}
              <hr className="w-36 mt-1 border border-primaryBlue" />
              <p className="mt-8 text-xl leading-5   sm:leading-10 tracking-wide font-normal font-poppins">
                your personalized, Ai-powered and <br />
                clinically effective skincare advisor
              </p>

              <div className="flex justify-between mt-20 text-xl  font-montserrat">
                <button className=" px-8 py-2 flex tracking-wider items-center rounded-none bg-green-900">
                  Request a demo
                  <svg
                    className="w-5 h-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="w-full h-full flex items-center sm:items-end container mx-auto text-neutral-content border ">
          <div className="max-w-2xl mb-0  sm:mb-28 text-white ">
            <h1 className="mx-10 sm:mx-0 mb-5 text-lg sm:text-3xl font-semibold antialiased tracking-wide text-center sm:text-left">
              Join the Fibre Revolution with Africa&apos;s finest full Fibre
              infrastructure
            </h1>
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
