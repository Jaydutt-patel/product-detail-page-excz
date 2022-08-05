import router from "next/router";
import { InferGetServerSidePropsType } from 'next';

import Review from '../../../feature/review';
import Details from '../../../feature/details';
import Suggestion from '../../../feature/suggestion';
import { ALLTYPES } from '../../../common/constants';

export const getServerSideProps = async (context: any) => {
    const slug = context.params.slug;
    const type = context.params.type;
    if (ALLTYPES.includes(type)) {      //check for defined routes only
        const res = await fetch(`http://localhost:4000/products/${slug}`);
        const data: any = await res.json();

        if (Object.keys(data).length === 0) { return { notFound: true }; } //Slug not found
        else { return { props: { products: data } }; } //Product data
    }
    else { return { notFound: true, } } //wrong path redirection
}

const DynamicRoute = ({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Details data={products} />
            <Review data={products} />
            <Suggestion data={products} />
        </>
    )
}

export default DynamicRoute
