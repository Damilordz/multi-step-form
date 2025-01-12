// PersonalInfo.js
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const PersonalInfo = ({
  handleOnChange,

  isNavbutton,
  formData,
}) => {
  // State to track errors for each field
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (isNavbutton) {
      const newErrors = {
        name: formData.name.trim() === "" ? "This field is required." : "",
        email: formData.email.trim() === "" ? "This field is required." : "",
        phone: formData.phone.trim() === "" ? "This field is required." : "",
      };
      setErrors(newErrors);
    }
  }, [isNavbutton, formData]);

  const handleFieldChange = (e) => {
    handleOnChange(e); // Update form data in parent component
    const { name, value } = e.target;

    if (errors[name] && value.trim() !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  return (
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
                <span className="text-red-500 text-sm mt-1">{errors.name}</span>
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
  );
};

PersonalInfo.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  formValidated: PropTypes.bool.isRequired,
  isNavbutton: PropTypes.bool.isRequired,
  formData: PropTypes.object.isRequired,
};

export default PersonalInfo;
