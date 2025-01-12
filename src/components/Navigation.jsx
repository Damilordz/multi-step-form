import PropTypes from "prop-types";

const Navigation = ({ pageData, currentIndex }) => {
  const bgStyle = (index) =>
    currentIndex === index
      ?  "bg-primary-light border-none text-neutral-coolGray"
      : "null";

  return (
    <div className="bg-sidebar-desktop bg-no-repeat bg-cover bg-center p-8 rounded-lg shadow-lg flex flex-col space-y-8 h-full flex-grow min-w-[260px] max-w-[260px]">
      {pageData.map((data, index) => (
        <div className="flex space-x-4 items-center" key={index}>
          <div className={`border rounded-full w-8 h-8 flex text-[14px] justify-center items-center text-white text-lg ${bgStyle(index)}`}>
            {index + 1}
          </div>
          <div className="flex-col text-left">
            <div className="text-gray-400 text-sm"> STEP {index + 1}</div>
            <div className="font-semibold text-sm text-white uppercase">
              {data.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
Navigation.propTypes = {
  pageData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default Navigation;
