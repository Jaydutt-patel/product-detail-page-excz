import type { NextPage } from 'next';

import { DETAILSSTATIC, REVIEWS, SUGGESTED } from '../common/constants';

import Review from '../feature/review';
import Details from '../feature/details';
import Suggestion from '../feature/suggestion';

const Home: NextPage = () => {
  return (<div>
    <Details data={DETAILSSTATIC} />
    <Review data={REVIEWS} />
    <Suggestion data={SUGGESTED} />
  </div>);
}

export default Home;
