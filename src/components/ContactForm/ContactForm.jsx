import { useState } from "react";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleNameChange = (e) => {
    setErrors((prev) => {
      prev.fullName = e.target.value.length > 0 ? false : true;
      return prev;
    });
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setErrors((prev) => {
      prev.email = e.target.value.length > 0 ? false : true;
      return prev;
    });
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setErrors((prev) => {
      prev.message = e.target.value.length > 0 ? false : true;
      return prev;
    });
    setMessage(e.target.value);
  };

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullName.length <= 0) tempErrors["fullName"] = true;
    if (email.length <= 0) tempErrors["email"] = true;
    if (message.length <= 0) tempErrors["message"] = true;
    if (Object.keys(tempErrors).length > 0) isValid = false;

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");

      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({ fullName, email, message }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      const { error } = await res.json();

      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        return;
      }

      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setFullName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    }

    setButtonText("Send");
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold">Send a Message</h1>

      <div className="flex flex-col sm:flex-row sm:columns-2 gap-4">
        <div className="flex flex-col sm:basis-1/2">
          <label htmlFor="fullName" className="text-gray-500">
            Full Name <span className="text-red-500">*</span>{" "}
            {errors?.fullName && (
              <span className="text-red-500">Field is required.</span>
            )}
          </label>
          <input
            type="text"
            value={fullName}
            onChange={handleNameChange}
            name="fullName"
            className={`
              border
              rounded-md
              py-2
              pl-4
              focus:outline-none
              focus:ring-1
              ring-amber-500
              text-gray-500
            `}
          />
        </div>

        <div className="flex flex-col sm:basis-1/2">
          <label htmlFor="email" className="text-gray-500">
            Email <span className="text-red-500">*</span>{" "}
            {errors?.email && (
              <span className="text-red-500">Field is required.</span>
            )}
          </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            name="email"
            className={`
              border
              rounded-md
              py-2
              pl-4
              focus:outline-none
              focus:ring-1
              ring-amber-500
              text-gray-500
            `}
          />
        </div>
      </div>

      <div className="flex flex-col sm:basis-1/2">
        <label htmlFor="message" className="text-gray-500">
          Message <span className="text-red-500">*</span>{" "}
          {errors?.message && (
            <span className="text-red-500">Field is required.</span>
          )}
        </label>
        <textarea
          name="message"
          value={message}
          onChange={handleMessageChange}
          className={`
            border
            rounded-md
            py-2
            pl-4
            focus:outline-none
            focus:ring-1
            ring-amber-500
            text-gray-500
          `}
        ></textarea>
      </div>

      <div className="flex flex-row items-center justify-start">
        <button
          className={`
            py-2
            px-4
            rounded
            bg-neutral-900
            text-white
            hover:text-amber-500
          `}
        >
          {buttonText}
        </button>
      </div>

      {showSuccessMessage && (
        <p className="text-green-500 font-semibold text-sm my-2">
          Thank you! Your message has been delivered.
        </p>
      )}

      {showFailureMessage && (
        <p className="text-red-500">
          Oops! Something went wrong, please try again.
        </p>
      )}
    </form>
  );
}
