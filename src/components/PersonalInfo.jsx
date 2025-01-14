// PersonalInfo.js
import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import Buttons from "./Buttons";

const PersonalInfo = ({
  handleOnChange,
  isNavbutton,
  formData,
  pageData,
  currentIndex,
}) => {
  // State to track errors for each field
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Validation Email functions
  const validateEmail = useCallback(
    (email) => /^\S+@\S+\.\S+$/.test(email),
    []
  );

  // Validate field
  const validateField = useCallback(
    (name, value) => {
      if (value.trim() === "") {
        return "This field is required.";
      }
      if (name === "email" && !validateEmail(value)) {
        return "Invalid email format.";
      }
      if (name === "phone") {
        const digits = value.replace(/\s/g, "");
        if (!/^\d+$/.test(digits)) {
          return "Only digits allowed.";
        }
        if (digits.length < 10) {
          return "Must be at least 10 digits.";
        }
      }
      return "";
    },
    [validateEmail]
  );

  useEffect(() => {
    if (isNavbutton) {
      setErrors({
        name: validateField("name", formData.name),
        email: validateField("email", formData.email),
        phone: validateField("phone", formData.phone),
      });
    }
  }, [isNavbutton, formData, validateField]);

  // Handle field change
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    handleOnChange(e); // update parent formData
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  return (
    <div className="h-full lg:pt-6 lg:pb-4 flex flex-col gap-4 lg:gap-0 justify-between items-center flex-grow w-screen lg:w-full">
      <div className="flex lg:w-full sm:w-4/5 flex-col gap-2 bg-neutral-alabaster px-6 py-8 mx-4 lg:mx-0 lg:px-0 rounded-lg shadow-lg lg:shadow-none">
        <Title
          title={pageData[currentIndex].title}
          description={pageData[currentIndex].description}
        />
        <div className="h-full pt-4 flex flex-col gap-6">
          <form className="flex flex-col gap-4 h-full justify-between">
            <div className="flex flex-col gap-4">
              {/* Name Field */}
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label htmlFor="name" className="text-blue-950">
                    Name{" "}
                  </label>
                  {errors.name && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. Stephen King"
                  required
                  value={formData.name}
                  onChange={handleFieldChange}
                  className={`p-2 border hover:border-primary-purplish cursor-pointer rounded-md transition-colors duration-200 outline-none border-gray-300 ${
                    errors.name ? "border-red-500" : ""
                  } focus:border-primary-purplish`}
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label htmlFor="email" className="text-blue-950">
                    Email Address
                  </label>
                  {errors.email && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </span>
                  )}
                </div>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. stephenking@lorem.com"
                  required
                  value={formData.email}
                  onChange={handleFieldChange}
                  className={`p-2 border hover:border-primary-purplish cursor-pointer rounded-md transition-colors duration-200 outline-none border-gray-300 ${
                    errors.email ? "border-red-500" : ""
                  } focus:border-primary-purplish`}
                />
              </div>

              {/* Phone Field */}
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label htmlFor="phone" className="text-blue-950">
                    Phone Number
                  </label>
                  {errors.phone && (
                    <span className="text-red-500 text-sm font mt-1">
                      {errors.phone}
                    </span>
                  )}
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="e.g. +1 234 567 890"
                  required
                  value={formData.phone}
                  onChange={handleFieldChange}
                  className={`p-2 border hover:border-primary-purplish cursor-pointer rounded-md transition-colors duration-200 outline-none border-gray-300 ${
                    errors.phone ? "border-red-500" : ""
                  } focus:border-primary-purplish`}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Buttons />
    </div>
  );
};

PersonalInfo.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  formValidated: PropTypes.bool.isRequired,
  isNavbutton: PropTypes.bool.isRequired,
  formData: PropTypes.object.isRequired,
  pageData: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default PersonalInfo;
