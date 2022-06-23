import clsx from "clsx";

const Tabs = ({
  selected,
  options,
  onSelectionChange,
}) => {
  const getClassName = (option) => clsx("capitalize", "text-amber-900", selected === option && "text-green-500");

  return (
    <div className="flex justify-between items-center w-[570px]">
      <button
        type="button"
        onClick={() => onSelectionChange("showAll")}
        className={getClassName("showAll")}
      >
        Show All
      </button>
      {options?.map((option) => (
        <button
          key={option}
          type="button"
          className={getClassName(option)}
          onClick={() => onSelectionChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
