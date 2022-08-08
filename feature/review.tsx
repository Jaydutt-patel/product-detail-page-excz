import React from 'react';

// import { REVIEWS } from '../common/constants';
import { Star } from '../common/svg';

interface ReviewData {
    id: string,
    date: string,
    author: string,
    rating: number,
    comment: string,
}

const Review = (props: any) => {
    const { reviews } = props.data;

    const renderStar = (stars: number) => {
        let starReviews = [];
        for (let i = 1; i <= 5; i++) {
            starReviews.push(
                <div className='px-[1px]'>
                    {i <= stars ? <Star className="fill-yellow-400" /> :
                        <Star className="fill-transparent stroke-yellow-400 stroke-5" />}
                </div >);
        }
        return starReviews;
    };

    const renderReviewData = () => {
        return reviews.map((rev: ReviewData) => (
            <div key={rev.id}>
                <div className='flex justify-between pb-4 lg:pb-8 flex-wrap'>
                    <div className="w-1/2 lg:w-1/3">
                        <div>
                            <p className="text-black text-sm lg:text-base">{rev.author}</p>
                            <p className="text-gray-400 text-xs lg:text-base">{rev.date}</p>
                        </div>
                    </div>
                    <div className="rating w-1/2 lg:w-1/3 flex">
                        {renderStar(rev.rating)} <p className='pl-3 font-extralight text-sm'>{rev.rating}</p>
                    </div>
                    <div className="rew-desc lg:w-1/3 pt-3 lg:p-0">
                        <p className="text-black text-xs lg:text-base">{rev.comment}</p>
                        {/* <p className="text-gray-400 py-4">{rev.r_para1}</p>
                        <p className="text-gray-400">{rev.r_para2}</p> */}
                    </div>
                </div>
                <hr className="pb-4 lg:pb-8" />
            </div>
        ));
    };

    return (
        <div className="main pt-10 lg:pt-20">
            <p className='pb-4 lg:pb-8 text-lg lg:text-2xl'>Recent reviews</p>
            <hr className='pb-4 lg:pb-8' />
            {renderReviewData()}
        </div>
    );
}
export default Review;
