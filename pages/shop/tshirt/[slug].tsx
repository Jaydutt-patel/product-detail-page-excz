import { InferGetServerSidePropsType } from 'next';
import Details from '../../../feature/details'
import Review from '../../../feature/review'
import Suggestion from '../../../feature/suggestion'

export const getServerSideProps = async (context: any) => {
    console.log(context.params.slug, 'slug');
    const slug = context.params.slug
    const res = await fetch(`http://localhost:4000/products/${slug}`);
    console.log(res, 'resss');

    const data: any = await res.json();

    return {
        props: { products: data }
    }
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
