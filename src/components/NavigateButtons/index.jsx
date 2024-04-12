import propTypes from "prop-types";

const NavigationButtons = ({ goBack, nextPage, selectedPageButton }) => {
  return (
    <div
      className={`absolute flex ${
        goBack ? "justify-between" : "justify-end"
      } w-[90%] right-5 md:left-6 bottom-0`}
    >
      {goBack && (
        <button
          onClick={() => selectedPageButton(goBack)}
          type="submit"
          className="text-gray-400 md:hover:text-gray-500 transition-all duration-200 font-bold px-5 py-3"
        >
          Go Back
        </button>
      )}
      <button
        onClick={() => selectedPageButton(nextPage)}
        type="submit"
        className="bg-blue-950 hover:bg-blue-600 transition-all duration-200 text-white px-5 py-3 rounded-md"
      >
        {nextPage === "/end" ? "Confirm" : " Next Step"}
      </button>
    </div>
  );
};

export { NavigationButtons };

NavigationButtons.propTypes = {
  goBack: propTypes.string,
  nextPage: propTypes.string,
  selectedPageButton: propTypes.func,
};
