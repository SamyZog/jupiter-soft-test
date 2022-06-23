const Select = ({
  options,
  onSelectionChange,
  selected,
}) => (
  <select
    name="cars"
    id="cars"
    className="w-full bg-white border-2 border-red-900/10 text-gray-700 py-3 px-4 pr-8 rounded-lg !focus:border-amber-100 capitalize"
    onChange={(ev) => onSelectionChange(ev.target.value)}
    value={selected}
  >
    <option className="h-3" value="showAll">Show All</option>
    {options?.map((item) => (
      <option
        key={item}
        value={item}
      >
        {item}
      </option>
    ))}
  </select>
);

export default Select;
