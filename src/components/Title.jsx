import PropTypes from "prop-types";

const Title = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="lg:text-3xl text-2xl font-bold text-blue-950">{title}</h1>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Title;
