import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";
import { usePlan } from "../context/PlanContext";
import Title from "./Title";

const AddOns = ({
  handleAddOns,
  addOnsData = [],
  selectedAddOns = [],
  pageData = [],
  currentIndex,
}) => {
  const { planPeriod } = usePlan();

  const borderStyle = (index) =>
    selectedAddOns.includes(index)
      ? "border border-primary-purplish bg-neutral-magnolia"
      : "border border-gray-300";

  return (
    <div className="flex flex-col gap-2 bg-neutral-alabaster px-6 py-8 rounded-lg shadow-lg lg:shadow-none">
      <Title
        title={pageData[currentIndex].title}
        description={pageData[currentIndex].description}
      />
      <div className=" flex flex-col gap-3 lg:gap-4 h-full">
        {addOnsData.map((addOn, index) => (
          <div
            key={index}
            className={`flex cursor-pointer border rounded-md p-3 pl-0 lg:p-4 justify-between items-center hover:border-primary-purplish ${borderStyle(
              index
            )}`}
            onClick={() => handleAddOns(index)}
          >
            <div className="flex gap-2 lg:gap-4">
              <Checkbox
                checked={selectedAddOns.includes(index)}
                color="secondary"
              />
              <div className="flex flex-col gap-0">
                <h6 className="font-semibold text-blue-950">{addOn.name}</h6>
                <p className="text-neutral-coolGray text-[14px] lg:text-[15px]">
                  {" "}
                  {addOn.description}
                </p>
              </div>
            </div>
            {planPeriod === "yearly" ? (
              <p className="text-primary-purplish text-[15px]">
                +${addOn.yearlyPrice}/yr
              </p>
            ) : (
              <p className="text-primary-purplish text-[15px]">
                +${addOn.monthlyPrice}/mo
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
AddOns.propTypes = {
  handleAddOns: PropTypes.func.isRequired,
  addOnsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      monthlyPrice: PropTypes.number.isRequired,
      yearlyPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  selectedAddOns: PropTypes.arrayOf(PropTypes.number).isRequired,
  pageData: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default AddOns;
