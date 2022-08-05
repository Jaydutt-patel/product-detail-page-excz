import React from 'react';
import Image from 'next/image';

// import { SUGGESTED } from '../common/constants';

interface SuggestionData {
    id: number,
    img: string,
    title: string,
    color: string,
    rate: string,
}

const Suggestion = (props: any) => {
    const { relatedProduct } = props.data;

    const renderSuggestedData = () => {
        return relatedProduct.map((sug: SuggestionData) => (
            <div className="pt-10 w-1/5 h-[500px] min-w-300 cursor-pointer hover:scale-105 hover:transition-all 
                    duration-500 ease-in-out" key={sug.id}>
                <div className='h-5/6 w-full relative'>
                    <Image src={sug.img} alt="suggested-product" className="rounded-xl" layout="fill"
                        objectFit="fill" priority />
                </div>
                <div className="flex justify-between pt-3">
                    <div>
                        <p className="font-normal">{sug.title}</p>
                        <p className="text-gray-400">{sug.color}</p>
                    </div>
                    <p className="text-lg font-semibold">{sug.rate}</p>
                </div>
            </div>
        ));
    };

    return (
        <div>
            <p className="text-2xl pt-16">Customers also purchased</p>
            <div className="flex justify-center md:justify-between pb-24 flex-wrap">
                {renderSuggestedData()}
            </div>
            <hr className='pb-24' />
        </div >);
}

export default Suggestion;
