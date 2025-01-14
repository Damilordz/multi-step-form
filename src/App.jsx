// import "./App.css";
import { useState, useContext } from "react";
import { PlanProvider } from "./context/PlanContext";
import IndexContext from "./context/IndexContext";
import Navigation from "./components/Navigation";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import SuccessfulPage from "./components/SuccessfulPage";

// Page data
const pageData = [
  {
    name: "Your Info",
    title: "Personal Info",
    description: "Please provide your name, email address, and phone number.",
  },
  {
    name: "Select Plan",
    title: "Select your Plan",
    description: "You have the option of monthly or yearly billing.",
  },
  {
    name: "Adds-On",
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  },
  {
    name: "Summary",
    title: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
  },
];

// Add-ons data
const addOnsData = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

function App() {
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const {
    currentIndex,
    updateIndex,
    isSubmitted,
    handleOnChange,
    formValidated,
    isNavbutton,
    formData,
  } = useContext(IndexContext);

  // handle add-ons
  const handleAddOns = (index) => {
    if (selectedAddOns.includes(index)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== index));
    } else {
      setSelectedAddOns([...selectedAddOns, index]);
    }
  };

  return (
    <PlanProvider>
      <div className="h-screen flex flex-col lg:flex-row items-center lg:gap-20 lg:pr-20 lg:h-[600px] lg:w-[950px] lg:bg-neutral-alabaster lg:p-4 lg:rounded-2xl lg:shadow-lg">
        <Navigation pageData={pageData} currentIndex={currentIndex} />
        <div className="mt-[-70px] flex justify-center lg:mt-0 lg:h-full flex-grow w-full lg:w-full">
          {currentIndex === 0 && (
            <PersonalInfo
              handleOnChange={handleOnChange}
              formValidated={formValidated}
              isNavbutton={isNavbutton}
              formData={formData}
              pageData={pageData}
              currentIndex={currentIndex}
              isSubmitted={isSubmitted}
            />
          )}
          {currentIndex === 1 && (
            <SelectPlan
              pageData={pageData}
              currentIndex={currentIndex}
              isSubmitted={isSubmitted}
            />
          )}
          {currentIndex === 2 && (
            <AddOns
              handleAddOns={handleAddOns}
              addOnsData={addOnsData}
              selectedAddOns={selectedAddOns}
              pageData={pageData}
              currentIndex={currentIndex}
              isSubmitted={isSubmitted}
            />
          )}
          {currentIndex === 3 && !isSubmitted && (
            <Summary
              addOnsData={addOnsData}
              selectedAddOns={selectedAddOns}
              updateIndex={updateIndex}
              pageData={pageData}
              currentIndex={currentIndex}
              isSubmitted={isSubmitted}
            />
          )}
          {isSubmitted && <SuccessfulPage />}
        </div>
      </div>
    </PlanProvider>
  );
}

export default App;
