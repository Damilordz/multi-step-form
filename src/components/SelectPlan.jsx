import Switch from "@mui/material/Switch";
import PropTypes from "prop-types";
import { usePlan } from "../context/PlanContext";
import Title from "./Title";
import Buttons from "./Buttons";

const SelectPlan = ({ pageData, currentIndex }) => {
  const { planTypes, planIndex, setPlanIndex, planPeriod, setPlanPeriod } =
    usePlan();

  return (
    <div className="h-full lg:pt-6 lg:pb-4 flex flex-col gap-6 lg:gap-0 justify-between items-center flex-grow w-screen lg:w-full">
      <div className="flex lg:w-full sm:w-4/5 flex-col gap-2 bg-neutral-alabaster px-6 py-8 mx-4 lg:mx-0 lg:px-0 rounded-lg shadow-lg lg:shadow-none">
        <Title
          title={pageData[currentIndex].title}
          description={pageData[currentIndex].description}
        />
        <div className="h-full pt-4 flex flex-col gap-7">
          <div className="grid lg:grid-cols-3 gap-3 lg:gap-4">
            {planTypes.map((plan, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg flex lg:flex-col items-center gap-4 lg:gap-10 cursor-pointer hover:border-primary-purplish ${
                  planIndex === index
                    ? "border border-purple-800 bg-neutral-magnolia"
                    : "border border-gray-300"
                }`}
                onClick={() => setPlanIndex(index)}
              >
                <img className="self-start" src={plan.image} alt="" />
                <div className="self-start">
                  <h6 className="font-semibold text-blue-950">{plan.name}</h6>
                  {planPeriod === "yearly" ? (
                    <p className="text-gray-400 text-[15px]">
                      ${plan.priceYearly}/yr
                    </p>
                  ) : (
                    <p className="text-gray-400 text-[15px]">
                      ${plan.priceMonthly}/mo
                    </p>
                  )}
                  {planPeriod === "yearly" && (
                    <p className="text-[14px] text-primary-marine">
                      2 months free
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 bg-neutral-magnolia p-2 rounded-lg">
            <p>Monthly</p>
            <Switch
              color="secondary"
              checked={planPeriod === "yearly"}
              onChange={() =>
                setPlanPeriod(planPeriod === "monthly" ? "yearly" : "monthly")
              }
            />
            <p>Yearly</p>
          </div>
        </div>
      </div>
      <Buttons />
    </div>
  );
};

SelectPlan.propTypes = {
  pageData: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default SelectPlan;
