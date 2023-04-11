import { useFetch } from 'tools/apiGet';
import Loader from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Trending from 'components/Trending/Trending';
const Home = () => {
  const url = 'trending/movie/day';
  const location = useLocation();
  const { data, isLoaded, error } = useFetch(url);

  if (error) {
    toast.error(error.message);
  }

  const showList = data?.total_results > 0 && !error;
  const showLoader = isLoaded && !error;
  const films = data?.results;

  return (
    <>
      {showLoader && <Loader />}
      {showList && <Trending films={films} location={location} />}
    </>
  );
};

export default Home;
