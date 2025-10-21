export default function Textbox({ label, isTextArea, ...props }) {
  return (
    <div class="mb-4">
      <label for="username" class="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          {...props}
          class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Enter your message here..."
        ></textarea>
      ) : (
        <input
          {...props}
          type="text"
          id="username"
          name="username"
          placeholder={label}
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      )}
    </div>
  );
}
