/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// Create the context
const PlanContext = createContext();

// Define plan types
const planTypes = [
  {
    image: "/assets/images/icon-arcade.svg",
    name: "Arcade",
    priceMonthly: 9,
    priceYearly: 90,
  },
  {
    image: "/assets/images/icon-advanced.svg",
    name: "Advanced",
    priceMonthly: 12,
    priceYearly: 120,
  },
  {
    image: "/assets/images/icon-pro.svg",
    name: "Pro",
    priceMonthly: 15,
    priceYearly: 150,
  },
];

// Provider component
export const PlanProvider = ({ children }) => {
  const [planIndex, setPlanIndex] = useState(0);
  const [planPeriod, setPlanPeriod] = useState("monthly");

  return (
    <PlanContext.Provider
      value={{ planIndex, setPlanIndex, planTypes, planPeriod, setPlanPeriod }}
    >
      {children}
    </PlanContext.Provider>
  );
};

PlanProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to use PlanContext
export const usePlan = () => {
  return useContext(PlanContext);
};
