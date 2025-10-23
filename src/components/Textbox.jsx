import { forwardRef } from "react";

const Textbox = forwardRef(function Textbox(
  { label, isTextArea, ...props },
  ref
) {
  return (
    <div className="mb-4">
      <label
        for="username"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      {isTextArea ? (
        <textarea
          ref={ref}
          {...props}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Enter your message here..."
        ></textarea>
      ) : (
        <input
          ref={ref}
          {...props}
          id="username"
          name="username"
          placeholder={label}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      )}
    </div>
  );
});

export default Textbox;
