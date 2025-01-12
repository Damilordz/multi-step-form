// import "./App.css";
import { useState, useContext } from "react";
import { PlanProvider } from "./context/PlanContext";
import IndexContext from "./context/IndexContext";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import Buttons from "./components/Buttons";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import SuccessfulPage from "./components/SuccessfulPage";

const pageData = [
  {
    name: "Your Info",
    title: "Personal Info",
    description: "Please provide your name, email address, and phone number.",
  },
  {
    name: "Select Plan",
    title: "Select a Plan",
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
  const [selectedAddOns, setSelectedAddOns] = useState([0, 1]);

  const {
    currentIndex,
    nextStep,
    prevStep,
    subnitForm,
    updateIndex,
    isSubmitted,
    handleOnChange,
    formValidated,
    isNavbutton,
    formData,
  } = useContext(IndexContext);

  const handleAddOns = (index) => {
    if (selectedAddOns.includes(index)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== index));
    } else {
      setSelectedAddOns([...selectedAddOns, index]);
    }
  };

  return (
    <PlanProvider>
      <div className="flex gap-20 pr-20 items-center h-[600px] w-[950px] bg-neutral-alabaster p-4 rounded-2xl shadow-lg">
        <Navigation pageData={pageData} currentIndex={currentIndex} />
        <div className="h-full pt-8 pb-6 flex flex-col gap-6 flex-grow max-w-[500px]">
          {!isSubmitted && (
            <Title
              title={pageData[currentIndex].title}
              description={pageData[currentIndex].description}
            />
          )}
          {currentIndex === 0 && (
            <PersonalInfo
              handleOnChange={handleOnChange}
              formValidated={formValidated}
              isNavbutton={isNavbutton}
              formData={formData}
            />
          )}
          {currentIndex === 1 && <SelectPlan />}
          {currentIndex === 2 && (
            <AddOns
              handleAddOns={handleAddOns}
              addOnsData={addOnsData}
              selectedAddOns={selectedAddOns}
            />
          )}
          {currentIndex === 3 && !isSubmitted && (
            <Summary
              addOnsData={addOnsData}
              selectedAddOns={selectedAddOns}
              updateIndex={updateIndex}
            />
          )}
          {isSubmitted && <SuccessfulPage />}
          {!isSubmitted && (
            <Buttons
              currentIndex={currentIndex}
              nextStep={nextStep}
              prevStep={prevStep}
              subnitForm={subnitForm}
            />
          )}
        </div>
      </div>
    </PlanProvider>
  );
}

export default App;
