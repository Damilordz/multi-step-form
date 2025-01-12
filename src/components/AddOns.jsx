import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";
import { usePlan } from "../context/PlanContext";

const AddOns = ({ handleAddOns, addOnsData, selectedAddOns }) => {
  const { planPeriod } = usePlan();

  const borderStyle = (index) =>
    selectedAddOns.includes(index)
      ? "border border-primary-purplish bg-neutral-magnolia"
      : "border border-gray-300";

  return (
    <div className=" flex flex-col gap-4 h-full">
      {addOnsData.map((addOn, index) => (
        <div
          key={index}
          className={`flex cursor-pointer border rounded-md p-4 justify-between items-center hover:border-primary-purplish ${borderStyle(
            index
          )}`}
          onClick={() => handleAddOns(index)}
        >
          <div className="flex gap-4">
            <Checkbox
              checked={selectedAddOns.includes(index)}
              color="secondary"
            />
            <div className="flex flex-col gap-0">
              <h6 className="font-semibold text-blue-950">{addOn.name}</h6>
              <p className="text-gray-400 text-[15px]"> {addOn.description}</p>
            </div>
          </div>
          {planPeriod === "yearly" ? (
            <p className="text-primary-purplish text-[15px]">
              +${addOn.yearlyPrice}/yr
            </p>
          ) : (
            <p className="ttext-primary-purplish text-[15px]">
              +${addOn.monthlyPrice}/mo
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
AddOns.propTypes = {
  handleAddOns: PropTypes.func.isRequired,
  addOnsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  selectedAddOns: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default AddOns;
