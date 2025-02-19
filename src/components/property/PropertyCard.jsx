import Image from "next/image";
import { PropertiesSvg } from "../svg/Svg";

const PropertyCard = ({ property }) => {
  const { title, image, price, badrooms, bathrooms } = property;
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-600/10">
      <Image src={image} alt="property" />

      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">{title}</h4>
        <div>
          {badrooms} beds &bull; 2 {bathrooms}
        </div>
        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">${price}</span>{" "}
          /M
        </div>
      </div>
      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 mr-3 text-gray-600 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
          </svg>
          <p>
            <span className="font-bold text-gray-900">{badrooms}</span> Bedrooms
          </p>
        </div>
        <div className="flex items-center">
          <PropertiesSvg />

          <p>
            <span className="font-bold text-gray-900">
              {bathrooms} {""} {""}
            </span>
            Bathrooms
          </p>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
