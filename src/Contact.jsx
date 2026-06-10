import React from "react";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.role.value); ooo
    console.log(event.target.message.value);
  };
  const onMouseOut = (event) => {
    console.log("Mouse Out Event Triggered");
    event.target.style.backgroundColor = "green";
    event.target.style.color = "black";
  };
  const onMouseOver = (event) => {
    console.log("Mouse Over Event Triggered");
    event.target.style.backgroundColor = "red";
  };
  const Button = ({ label, onClick }) => {
    return <Button onClick={onClick}>{label}</Button>;
  };
  const InputField = ({ type, name, placeholder, label }) => {
    return (
      <div>
        <label>{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
    );
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md flex flex-col gap-5"
      >
        <InputField
          type="text"
          name="name"
          placeholder="Your Name"
          label="Name"
        />
        <InputField
          type="email"
          name="email"
          placeholder="Your Email"
          label="Email"
        />

        <select
          name="role"
          id="role"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Role</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="manager">Manager</option>
        </select>
        <textarea
          name="message"
          id="message"
          placeholder="Your Message"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        ></textarea>
        <button
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
