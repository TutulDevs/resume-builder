const Input = ({ register, error, label, id, ...inputProps }) => {
  return (
    <div className="my-2">
      <label htmlFor={id} className="block mb-1">
        {label}
      </label>

      <input
        ref={register}
        id={id}
        {...inputProps}
        className="py-1 px-2 w-full bg-white border border-header rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
      />

      {error && <span className="text-xs text-red-400">{error.message}</span>}
    </div>
  );
};

export default Input;
