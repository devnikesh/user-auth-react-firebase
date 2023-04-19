export default function Input({
  name,
  handleChange,
  value,
  type,
  placeholder,
}) {
  return (
    <div>
      <label
        for={name}
        className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {name}
      </label>
      <input
        type={type}
        name={name}
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder={placeholder}
        required
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}