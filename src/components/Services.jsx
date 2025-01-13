
import React from "react";
import { SERVICES_LIST } from "../utils/helper";
import Heading from "../common/Heading";

const Services = () => {
    return (
        <div className="relative">
                        <img className="absolute max-lg:hidden -bottom-40 max-w-[182px] left-0" src="/assets/images/upcoming-bottom-left-img.webp" alt="service bottom image" />
        <div id="services" className="container">
            <div className="max-w-[450px] max-sm:max-w-[300px] mx-auto relative">
                <Heading heading={"Services"}/>
                <img
                    src="/assets/images/heading-line.webp"
                    alt="borders"
                    className="pointer-events-none max-w-[344px] max-md:max-w-[280px] absolute -top-1 left-12 max-md:left-20 max-sm:left-6 max-sm:max-w-[250px] max-sm:-top-4 max-lg:-top-6"
                />
            </div>
            <div className="grid grid-cols-1 font-space-grotesk md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 max-lg:mt-16 max-md:mt-12">
                {SERVICES_LIST.map((obj, i) => (
                    <div
                        className={`border border-solid border-transparent transition-all ease-linear duration-200 hover:bg-off-white hover:backdrop-blur-[20px] rounded-xl w-full max-w-[364px] p-5 mx-auto`}
                        key={i}
                    >
                        <div className="mb-4" >{obj.icon}</div>
                        <h3 className=" text-white font-bold text-xl leading-[25.52px] mb-2">
                            {obj.title}
                        </h3>
                        <div className="text-white font-normal text-base max-w-[329px] leading-6">
                            {Array.isArray(obj.description) ? (
                                <ul className="list-disc pl-5">
                                    {obj.description.map((item, index) => (
                                        <li key={index}>{item.name}</li>
                                    ))}
                                </ul>
                            ) : (
                                obj.description
                            )}
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
        </div>
    );
};

export default Services;
