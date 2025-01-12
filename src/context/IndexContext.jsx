import { createContext, useState } from "react";
import PropTypes from "prop-types";

const IndexContext = createContext();

export const IndexProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isNavbutton, setIsNavbutton] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formValidated, setFormValidated] = useState(false);

  // Handle form input change
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    validateForm();
  };

  // Validate form
  const validateForm = () => {
    if (formData.name && formData.email && formData.phone) {
      setFormValidated(true);
    } else {
      setFormValidated(false);
    }
  };

  // Go to next step
  const nextStep = () => {
    validateForm();
    setIsNavbutton(true);
    if (!formValidated) {
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  // Go back to previous step
  const prevStep = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Ensure index does not go below 0
    validateForm();
  };

  // Submit form
  const subnitForm = () => {
    setIsSubmitted(true);
  };

  // Update index
  const updateIndex = () => {
    setCurrentIndex(1);
  };

  return (
    <IndexContext.Provider
      value={{
        currentIndex,
        nextStep,
        prevStep,
        isSubmitted,
        subnitForm,
        updateIndex,
        formData,
        handleOnChange,
        formValidated,
        isNavbutton,
      }}
    >
      {children}
    </IndexContext.Provider>
  );
};
IndexProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IndexContext;
