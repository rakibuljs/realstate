import { featureItems } from "@/db";
import FeatureCard from "./FeatureCard";
import FeatureHeading from "./FeatureHeading";

const Feature = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <FeatureHeading />
        {/*feature */}
        <div className="-mx-4 flex flex-wrap">
          {featureItems.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Feature;
