import { propertiesItems } from "@/db";
import PropertyCard from "./PropertyCard";
import PropertyHeading from "./PropertyHeading";

const Property = () => {
  return (
    <section>
      <div className="container">
        <PropertyHeading />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertiesItems.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Property;
