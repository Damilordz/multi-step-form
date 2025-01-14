import PropTypes from "prop-types";

const Navigation = ({ pageData, currentIndex }) => {
  const bgStyle = (index) =>
    currentIndex === index
      ? "bg-primary-light border-none text-neutral-coolGray"
      : "null";

  return (
    <div className="flex flex-row justify-center gap-3 p-4 bg-sidebar-mobile bg-no-repeat bg-cover bg-center min-h-[170px] max-h-[200px] w-screen lg:bg-sidebar-desktop lg:flex-col lg:gap-7 lg:p-8 lg:justify-start lg:rounded-lg lg:shadow-lg lg:w-[260px] lg:min-w-[260px] lg:max-w-[260px] lg:min-h-[568px] lg:max-h-[568px]">
      {pageData.map((data, index) => (
        <div className="flex gap-3 mt-4 lg:mt-0" key={index}>
          <div
            className={`border rounded-full w-8 h-8 flex text-[14px] justify-center items-center text-white text-lg ${bgStyle(
              index
            )}`}
          >
            {index + 1}
          </div>
          <div className="flex-col text-left lg:flex hidden">
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
