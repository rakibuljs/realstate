import { clientItems } from "@/db";
import ClientCard from "./ClientCard";
import ClientHeading from "./ClientHeading";

const ClientSection = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <ClientHeading />
        <div className="-mx-4 flex flex-wrap justify-center">
          {clientItems.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ClientSection;
