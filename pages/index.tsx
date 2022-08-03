import type { NextPage } from 'next';
import Details from '../feature/details';
import Review from '../feature/review';

const Home: NextPage = () => {
  return (<div>
    <Details />
    <Review />
  </div>);
}

export default Home;
