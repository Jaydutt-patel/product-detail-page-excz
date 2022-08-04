import React from 'react'
import { REVIEWS } from '../common/constants';
import { Star } from '../common/svg';

interface ReviewData {
    id: number,
    name: string,
    date: string,
    star: number,
    r_title: string,
    r_para1: string,
    r_para2: string
}

const Review = () => {

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

    const renderReviewData = () => {
        return REVIEWS.map((rev: ReviewData) => (
            <div key={rev.id}>
                <div className='flex justify-between pb-8'>
                    <div className="w-1/3">
                        <div className="name">
                            <p className="text-black">{rev.name}</p>
                            <p className="text-gray-400">{rev.date}</p>
                        </div>
                    </div>
                    <div className="rating w-1/3 flex">
                        {renderStar(rev.star)} <p className='pl-3 font-extralight text-sm'>{rev.star}</p>
                    </div>
                    <div className="rew-desc w-1/3">
                        <p className="text-black">{rev.r_title}</p>
                        <p className="text-gray-400 py-4">{rev.r_para1}</p>
                        <p className="text-gray-400">{rev.r_para2}</p>
                    </div>
                </div>
                <hr className="pb-8" />
            </div>
        ));
    };

    return (
        <div className="main pt-20">
            <p className='pb-8 text-2xl'>Recent reviews</p>
            <hr className='pb-8' />
            {renderReviewData()}
        </div>
    );
}
export default Review;
