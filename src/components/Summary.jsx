// export default Summary;
import { usePlan } from "../context/PlanContext";
import PropTypes from "prop-types";
import Title from "./Title";

const Summary = ({ addOnsData, selectedAddOns, updateIndex, pageData,
  currentIndex, }) => {
  const { planIndex, planTypes, planPeriod } = usePlan();

  const adsOnsTotalMonthly = selectedAddOns.reduce(
    (total, index) => total + addOnsData[index].monthlyPrice,
    0
  );

  const adsOnsTotalYearly = selectedAddOns.reduce(
    (total, index) => total + addOnsData[index].yearlyPrice,
    0
  );

  const monthlyTotal = `$${
    planTypes[planIndex].priceMonthly + adsOnsTotalMonthly
  }/mo`;
  const yearlyTotal = `$${
    planTypes[planIndex].priceYearly + adsOnsTotalYearly
  }/yr`;

  return (
    <div className="flex flex-col gap-4 bg-neutral-alabaster px-6 py-8 rounded-lg shadow-lg lg:shadow-none">
       <Title
              title={pageData[currentIndex].title}
              description={pageData[currentIndex].description}
            />
      <div className="flex flex-col gap-4 h-full">
        <div className="flex flex-col border rounded-md p-4 bg-gray-100">
          <div className="flex p-4 pt-0 justify-between items-center">
            <div className="flex gap-4">
              <div className="flex flex-col gap-0">
                <h6 className="font-semibold text-blue-950">
                  {planPeriod === "monthly"
                    ? planTypes[planIndex].name + " (Monthly)"
                    : planTypes[planIndex].name + " (Yearly)"}
                </h6>
                <p
                  className="text-gray-400 text-[15px] cursor-pointer underline hover:text-primary-purplish"
                  onClick={updateIndex}
                >
                  Change
                </p>
              </div>
            </div>
            <p className="text-blue-950 font-semibold">
              {planPeriod === "monthly"
                ? `$${planTypes[planIndex].priceMonthly}/mo`
                : `$${planTypes[planIndex].priceYearly}/yr`}
            </p>
          </div>
          <hr />
          {selectedAddOns.map((index) => (
            <div key={index} className="flex p-4 justify-between items-center">
              <p className="text-[15px] text-gray-400">
                {addOnsData[index].name}
              </p>
              <p className="text-blue-900 text-[15px]">
                {planPeriod === "monthly"
                  ? `+$${addOnsData[index].monthlyPrice}/mo`
                  : `+$${addOnsData[index].yearlyPrice}/yr`}
              </p>
            </div>
          ))}
        </div>
        <div className="flex p-4 justify-between items-center">
          <p className="text-[15px] text-gray-400">
            Total (per {planPeriod === "monthly" ? "month" : "year"})
          </p>
          <p className="text-primary-purplish text-[18px] font-bold">
            {planPeriod === "monthly" ? monthlyTotal : yearlyTotal}
          </p>
        </div>
      </div>
    </div>
  );
};

Summary.propTypes = {
  addOnsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      monthlyPrice: PropTypes.number.isRequired,
      yearlyPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  selectedAddOns: PropTypes.arrayOf(PropTypes.number).isRequired,
  updateIndex: PropTypes.func.isRequired,
  pageData: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default Summary;
