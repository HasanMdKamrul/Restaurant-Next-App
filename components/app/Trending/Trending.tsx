import Heading from "../../core/Heading/Heading";
import TrendingSlider from "../../core/TrendingSlider/TrendingSlider";

type Props = {};

const Trending = (props: Props) => {
  return (
    <>
      <Heading>Now Trending</Heading>
      <TrendingSlider />
    </>
  );
};

export default Trending;
