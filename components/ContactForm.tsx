"use client";

// import React, { useState } from "react";

// const ContactForm = () => {
//   const [success, setSucces] = useState(false);
//   const [error, setError] = useState(false);
//   const text = "hello";

//   const [userFirstname, setUserFirstname] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [userMessage, setUserMessage] = useState("");

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     const response = await fetch("http://localhost:3000/api/mail", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ userFirstname, userEmail, userMessage }),
//     });

//     if (response.ok) {
//       alert("Email başarıyla gönderildi!");
//     } else {
//       alert("Bir hata oluştu. Lütfen tekrar deneyin.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 className=" text-2xl font-bold mb-5 text-white">Contact Me </h2>
//       <div className="mb-3">
//         <input
//           type="text"
//           placeholder="Your name"
//           name="userFirstname"
//           value={userFirstname}
//           onChange={(e) => setUserFirstname(e.target.value)}
//           required
//           className=" w-full px-3 py-2 text-sm  placeholder-gray-400 bg-white border-0 rounded shadow "
//         />
//       </div>
//       <div className="mb-3">
//         <input
//           type="email"
//           placeholder="Email"
//           name="userEmail"
//           value={userEmail}
//           onChange={(e) => setUserEmail(e.target.value)}
//           required
//           className=" w-full px-3 py-2 text-sm  placeholder-gray-400 bg-white border-0 rounded shadow "
//         />
//       </div>
//       <div className="mb-3">
//         <input
//           placeholder="Your message"
//           name="userMessage"
//           value={userMessage}
//           onChange={(e) => setUserMessage(e.target.value)}
//           required
//           className=" w-full px-3 py-2 text-sm  placeholder-gray-400 bg-white border-0 rounded shadow "
//         />
//       </div>
//       <button
//         type="submit"
//         className="px-6 py-3 mb-5 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400"
//       >
//         Send a message
//       </button>
//       {success && (
//         <div className=" text-green-600 font-semibold">
//           Your message has been send successfully
//         </div>
//       )}
//       {error && (
//         <div className=" text-red-600 font-semibold">
//           Your message has been send successfully
//         </div>
//       )}
//     </form>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import axios from "axios";

interface FormData {
  userFirstname: string;
  userEmail: string;
  userMessage: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    userFirstname: "",
    userEmail: "",
    userMessage: "",
  });
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/mail", formData);

      if (response.status === 200) {
        setSuccess(true);
        setError(false);
        setFormData({ userFirstname: "", userEmail: "", userMessage: "" }); // Inputları sıfırla
        const timer = setTimeout(() => {
          setSuccess(false);
        }, 1200);
        return () => clearTimeout(timer);
      } else {
        setError(true);
        setSuccess(false);
      }
    } catch (error) {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me </h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="userFirstname"
          value={formData.userFirstname}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 text-sm placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="userEmail"
          value={formData.userEmail}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 text-sm placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="Your message"
          name="userMessage"
          value={formData.userMessage}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 text-sm placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-3 mb-5 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400"
      >
        Send a message
      </button>
      {success && (
        <div className="text-green-600 font-semibold">
          Your message has been sent successfully
        </div>
      )}
      {error && (
        <div className="text-red-600 font-semibold">
          An error occurred. Please try again.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
