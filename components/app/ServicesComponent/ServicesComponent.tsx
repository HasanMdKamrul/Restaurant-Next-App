import { Services } from "../../constants/Services";
import Heading from "../../core/Heading/Heading";
import ServiceCard from "./ServiceCard";

type Props = {};

const ServicesComponent = (props: Props) => {
  return (
    <>
      <div className="my-12">
        <Heading>Our Services</Heading>
        <div className="flex justify-center items-center">
          <section className="grid lg:grid-cols-3 gap-5 grid-cols-1 md:grid-cols-2 ">
            {Services?.map((service) => (
              <ServiceCard service={service} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default ServicesComponent;
