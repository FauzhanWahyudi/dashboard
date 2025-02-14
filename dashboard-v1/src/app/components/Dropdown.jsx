export default function Dropdown({
  children,
  isOpen,
  toggleDropdown,
  title,
  description,
}) {
  const [number, textTitle] = title.split(".");
  return (
    <details
      className={`dropdown-container ${isOpen ? "dropdown-container-open" : ""}`}
      open={isOpen}
      onToggle={toggleDropdown}
    >
      {/* Dropdown Button */}
      <summary className="dropdown-summary" role="button">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-2xl text-white">
            <p>{number}</p>
          </div>
          <div>
            <p>{textTitle}</p>
            {isOpen && <p>{description}</p>}
          </div>
        </div>
        {/* Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`dropdown-arrow ${isOpen ? "rotate-180" : "rotate-0"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </summary>

      {/* Dropdown Content */}
      <div
        className={`dropdown-content ${
          isOpen ? "dropdown-content-open" : "dropdown-content-closed"
        }`}
      >
        <div className="p-3">{children}</div>
      </div>
    </details>
  );
}
