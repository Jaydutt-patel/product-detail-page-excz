import { useState } from 'react';
import Image from 'next/image';

import img1 from "../public/nawaz.jpg";
import img2 from "../public/hritik.jpg";
import img3 from "../public/tommy.jpg";
import { Dollar, Globe, Star } from '../common/svg';

function Details() {
    const [selected, setSelected] = useState("0");
    const [size, setSize] = useState("S");
    const sizeActive = "bg-indigo-600 text-white font-bold";

    const handleStar = (stars: number) => {
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
    return (
        <div>
            <div className="flex justify-between">
                {/* LEFT big IMAGE */}
                <div className="w-[49%] rounded-2xl bg-slate-500">
                    <div className='h-full w-full relative cursor-pointer hover:scale-105 hover:transition-all duration-500 ease-in-out'>
                        <Image alt="img-1" src={img1} className="rounded-xl" layout="fill" objectFit="fill" />
                    </div>
                </div>

                <div className="w-[49%] ">
                    <div className="flex justify-between text-2xl">
                        <p>Basic Tee</p> <p>$35</p>
                    </div>
                    {/* REVIEW */}
                    <div className="flex w-2/3 justify-between pt-4">
                        <div className='flex'>
                            <p className='pr-2'>3.9</p>
                            <div className='flex'>{handleStar(4)}</div>
                        </div>
                        <p className='text-indigo-600 cursor-pointer'>See all 512 reviews</p>
                    </div>
                    {/* COLOR */}
                    <div className="color py-8">
                        <p>Color</p>
                        <div className="flex justify-between w-24">
                            <div className={`bg-black rounded-full w-10 h-10 border-black border-2 cursor-pointer
                                ${selected == "0" && "outer-border"}`} onClick={() => setSelected("0")} />
                            <div className={`bg-gray-600 rounded-full w-10 h-10 border-gray-600 border-2 cursor-pointer
                                ${selected == "1" && "outer-border"}`} onClick={() => setSelected("1")} />
                        </div>
                    </div>
                    {/* SIZE */}
                    <div className="size">
                        <div className="flex justify-between">
                            <p>Size</p><p className='text-indigo-600 cursor-pointer'>See sizing chart</p>
                        </div>
                        <div className="flex justify-between">
                            <div className={`flex items-center w-20 justify-center py-2 rounded-md border hover:bg-indigo-500 hover:text-white
                                ${size === "xxs" ? sizeActive : "border-gray-300"}`} onClick={() => setSize("xxs")}>XXS</div>

                            <div className={`flex items-center w-20 justify-center py-2 rounded-md border hover:bg-indigo-500 hover:text-white 
                                ${size === "xs" ? sizeActive : "border-gray-300"}`} onClick={() => setSize("xs")}>XS</div>

                            <div className={`flex items-center w-20 justify-center py-2 rounded-md border hover:bg-indigo-500 hover:text-white 
                                ${size === "s" ? sizeActive : "border-gray-300"}`} onClick={() => setSize("s")}>S</div>

                            <div className={`flex items-center w-20 justify-center py-2 rounded-md border hover:bg-indigo-500 hover:text-white 
                                ${size === "m" ? sizeActive : "border-gray-300"}`} onClick={() => setSize("m")}>M</div>

                            <div className={`flex items-center w-20 justify-center py-2 rounded-md border hover:bg-indigo-500 hover:text-white 
                                ${size === "l" ? sizeActive : "border-gray-300"}`} onClick={() => setSize("l")}>L</div>

                            <div className={`flex items-center w-20 justify-center py-2 rounded-md border hover:bg-indigo-500 hover:text-white 
                                ${size === "xl" ? sizeActive : "border-gray-300"}`} onClick={() => setSize("xl")}>XL</div>
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
                    <div className="delivery-info flex">
                        <div className="bg-gray-100 rounded-lg w-1/3 p-5 flex flex-col items-center justify-center mr-8
                        cursor-pointer hover:bg-gray-300">
                            <Globe color='#6f6f6f' height='25' />
                            <p className='text-sm py-2'>International Delivery</p>
                            <p className='text-sm text-gray-500'>Get your order in 2 years</p>
                        </div>
                        <div className="bg-gray-100 rounded-lg w-1/3 p-5 flex flex-col items-center justify-center 
                        cursor-pointer hover:bg-gray-300">
                            <Dollar height='25' />
                            <p className='text-sm py-2'>Loyalty rewards</p>
                            <p className='text-sm text-gray-500'>Don&apos;t look at other tees</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="other-images flex justify-between w-[49%] pt-12">
                <div className='h-[465px] w-[47%] relative cursor-pointer hover:scale-105 hover:transition-all duration-500 ease-in-out'>
                    <Image alt="img-1" src={img2} className="rounded-xl" layout="fill" objectFit="cover" />
                </div>
                <div className='h-[465px] w-[47%] relative cursor-pointer hover:scale-105 hover:transition-all duration-500 ease-in-out'>
                    <Image alt="img-1" src={img3} className="rounded-xl" layout="fill" objectFit="fill" />
                </div>
            </div>
        </div >
    )
}

export default Details;
