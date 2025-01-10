
import React from "react";
import { SERVICES_LIST } from "../utils/helper";
import Heading from "../common/Heading";

const Services = () => {
    return (
        <div id="services" className="container max-lg:pb-12 max-md:pb-10 max-sm:pb-9">
            <div className="max-w-[570px] mx-auto relative">
                <Heading heading={"Services"}/>
                <img
                    src="/assets/images/heading-line.webp"
                    alt="borders"
                    className="max-w-[344px] absolute -top-3 left-16 max-lg:-top-7"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
                {SERVICES_LIST.map((obj, i) => (
                    <div
                        className={`border border-solid border-transparent transition-all ease-linear duration-200 hover:bg-off-white rounded-xl w-full max-w-[364px] p-5 mx-auto`}
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
    );
};

export default Services;
