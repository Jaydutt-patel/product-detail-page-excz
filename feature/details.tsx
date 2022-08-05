import Image from 'next/image';
import { useState } from 'react';

// import img1 from "../public/nawaz.jpg";
// import img2 from "../public/hritik.jpg";
// import img3 from "../public/tommy.jpg";
// import { ALLSIZES } from '../common/constants';
import { Dollar, Globe, Star } from '../common/svg';

const Details = (props: any) => {
    const [selected, setSelected] = useState(0);
    const [size, setSize] = useState("s");

    const sizeActive = "bg-indigo-600 text-white font-bold";
    const { availableSize, title, price, rating, reviewCount, availableColors, images } = props.data;

    const renderSizes = () => {
        return availableSize.map((siz: { type: string, unit: number }, index: number) => (
            <div key={index} className={`flex items-center w-20 justify-center py-2 rounded-md border uppercase 
                hover:bg-indigo-500 hover:text-white ${size === siz.type ? sizeActive : "border-gray-300"}`}
                onClick={() => setSize(siz.type)}>{siz.type}</div>
        ));
    };

    const renderStar = (stars: number) => {
        let starReviews = [];
        for (let i = 1; i <= 5; i++) {
            starReviews.push(
                <div className='px-1'>
                    {i <= stars ? <Star className="fill-yellow-400" /> :
                        <Star className="fill-transparent stroke-yellow-400 stroke-5" />}
                </div >);
        }
        return starReviews;
    };

    const renderColors = () => {
        return availableColors.map((color: string, index: number) =>
            <div key={index} className={`${color === "black" ? "bg-black border-black" :
                `bg-${color}-600 border-${color}-600`}  rounded-full w-10 h-10 border-2 border-transparent cursor-pointer
                 ${selected == index && "outer-border"}`} onClick={() => setSelected(index)} />);
    }

    return (
        <div>
            <div className="flex justify-center flex-wrap lg:justify-between">
                {/* LEFT big IMAGE */}
                <div className="rounded-2xl bg-slate-500 min-w-300 min-h-500 sm:min-w-400 lg:w-[49%]">
                    <div className='h-full w-full relative cursor-pointer hover:scale-105 hover:transition-all duration-500 ease-in-out'>
                        <Image alt="img-1" src={images[0]} className="rounded-xl" layout="fill" objectFit="fill" />
                    </div>
                </div>

                <div className="min-w-300 sm:min-w-400 lg:w-[49%]">
                    <div className="flex justify-between text-2xl pt-3 lg:pt-0">
                        <p>{title}</p> <p>${price}</p>
                    </div>
                    {/* REVIEW */}
                    <div className="flex w-2/3 justify-between pt-4">
                        <div className='flex'>
                            <p className='pr-2'>{rating}</p>
                            <div className='flex'>{renderStar(rating)}</div>
                        </div>
                        <p className='text-indigo-600 cursor-pointer'>See all {reviewCount} reviews</p>
                    </div>
                    {/* COLOR */}
                    <div className="color py-8">
                        <p>Color</p>
                        <div className="flex justify-between w-1/3">
                            {renderColors()}
                        </div>
                    </div>
                    {/* SIZE */}
                    <div className="size">
                        <div className="flex justify-between">
                            <p>Size</p><p className='text-indigo-600 cursor-pointer'>See sizing chart</p>
                        </div>
                        <div className="flex justify-between">
                            {renderSizes()}
                        </div>
                    </div>
                    {/* ADD TO CART BTN */}
                    <button className="add-to-cart my-8 py-4 w-full text-white rounded-lg bg-indigo-600 border border-transparent
                    hover:bg-transparent hover:text-indigo-600 hover:border hover:border-indigo-600">Add to cart</button>
                    {/* DESCRIPTION */}
                    <div className="description">
                        <p>Description</p>
                        <p className='py-2 text-gray-500'>The Basic tee is an honest new take on a classic. The tee uses super soft,
                            pre-shrunk cotton for true comfort and a dependable fit. They are hand
                            cut and sewn locally, with a special dye technique that gives each tee it&apos;s
                            own look.</p>
                        <p className='pb-8 text-gray-500'>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-
                            pack at a bundle discount.</p>
                        <hr />
                    </div>
                    {/* FABRIC and CARE */}
                    <div className="item-info py-8">
                        <p>Fabric &amp; Care</p>
                        <ul className='list-disc pl-4 pt-2 text-gray-500'>
                            <li>Only the best materials</li>
                            <li>Ethically and locally made</li>
                            <li>Pre-washed and pre-shrunk</li>
                            <li>Machine wash cold with similar colors</li>
                        </ul>
                    </div>
                    {/* DELIVERY */}
                    <div className="w-full flex flex-wrap justify-center lg:justify-between xl:w-5/6 2xl:w-3/4">
                        <div className="w-full p-5 min-w-300 flex flex-col items-center justify-center lg:w-1/3 lg:min-w-200
                        bg-gray-100 hover:bg-gray-300 rounded-lg cursor-pointer">
                            <Globe color='#6f6f6f' height='25' />
                            <p className='text-sm py-2'>International Delivery</p>
                            <p className='text-sm text-gray-500'>Get your order in 2 years</p>
                        </div>
                        <div className="w-full p-5 min-w-300 mt-5 flex flex-col items-center justify-center lg:w-1/3 lg:min-w-200 lg:mt-0
                        bg-gray-100 hover:bg-gray-300 rounded-lg cursor-pointer">
                            <Dollar height='25' />
                            <p className='text-sm py-2'>Loyalty rewards</p>
                            <p className='text-sm text-gray-500'>Don&apos;t look at other tees</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center pt-12 w-full lg:w-[49%] sm:justify-between">
                <div className='h-[465px] w-[47%] min-w-300 sm:min-w-200 relative cursor-pointer hover:scale-105 hover:transition-all duration-500 ease-in-out'>
                    <Image alt="img-1" src={images[1]} className="rounded-xl" layout="fill" objectFit="cover" />
                </div>
                <div className='h-[465px] w-[47%] min-w-300 sm:min-w-200 relative cursor-pointer mt-5 sm:mt-0 hover:scale-105 hover:transition-all duration-500 ease-in-out'>
                    <Image alt="img-1" src={images[2]} className="rounded-xl" layout="fill" objectFit="fill" />
                </div>
            </div>
        </div >
    )
}

export default Details;
