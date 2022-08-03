import type { NextPage } from 'next';
import Details from '../feature/details';
import Review from '../feature/review';
import Suggestion from '../feature/suggestion';

const Home: NextPage = () => {
  return (<div>
    <Details />
    <Review />
    <Suggestion />
  </div>);
}

export default Home;
