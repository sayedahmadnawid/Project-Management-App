export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-sm md:text-base rounded-md bg-neutral-400 hover:text-stone-100 hover:bg-stone-600"
      {...props}
    >
      {children}
    </button>
  );
}
