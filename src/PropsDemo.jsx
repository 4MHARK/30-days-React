import React from "react";
// const Button = ({ label, color, size, onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`${color} ${size} text-white rounded-lg font-semibold`}
//     >
//       {label}
//     </button>
//   );
// };
const Button = ({
  label = "Click Me",
  onClick = () => {},
  color = "bg-blue-500",
  size = "px-4 py-2"
}) => {
  return (
    <button
      onClick={onClick}
      className={`${color} ${size} text-white rounded-lg font-semibold`}
    >
      {label}
    </button>
  );
};

const PropsDemo = () => {
  return (
    <div className="flex gap-4 p-4">
      <Button
        label="Click Me"
        onClick={() => console.log("Button Clicked")}
        color="bg-blue-500"
        size="px-4 py-2"
      />
      <Button
        label="Submit"
        onClick={() => console.log("Submit Clicked")}
        color="bg-green-500"
        size="px-4 py-2"
      />
      <Button
        label="save"
        onClick={() => console.log("Save Clicked")}
        color="bg-yellow-500"
        size="px-4 py-2"
      />
      <Button
        label="Delete"
        onClick={() => console.log("Delete Clicked")}
        color="bg-red-500"
        size="px-4 py-2"
      />

      <Button/>
    </div>
  );
};

export default PropsDemo;
