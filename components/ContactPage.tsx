"use client";

import { useEffect, useState } from "react";
import Toast from "./Toast";
import { GradientTitleBig } from "@/components/Titles";

const ContactPage = () => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.style.setProperty("--selection-color", "#93C5FD");
  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleCloseToast = () => {
    setShowToast(false);
    setToastMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setToastMessage("Email sent successfully!");
      setShowToast(true);
    } catch (error) {
      console.error("Error sending email:", error);
      setToastMessage("Failed to send email. Please try again.");
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full flex justify-center px-4">
      <div className="max-w-xl w-full space-y-12">
        <div className="flex flex-col space-y-6">
          <div className="text-left">
            <GradientTitleBig title="contact me." />
            <p className="text-gray-400 mt-4 text-lg">
              Feel free to reach me out for{" "}
              <span className="text-gray-300">any reason.</span>
            </p>
          </div>

          <div className="mt-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-400 uppercase mb-2"
                >
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Rafa Nadal"
                  className={`w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border ${
                    errors.name ? "border-red-500" : "border-gray-800"
                  } text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-colors duration-200`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-400 uppercase mb-2"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="rafa@nadal.com"
                  className={`w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border ${
                    errors.email ? "border-red-500" : "border-gray-800"
                  } text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-colors duration-200`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-400 uppercase mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border ${
                    errors.message ? "border-red-500" : "border-gray-800"
                  } text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-colors duration-200 resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full px-6 py-3 bg-white text-black font-medium rounded-lg transition-colors duration-200 
                  ${
                    loading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-200"
                  }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toast
        message={toastMessage}
        visible={showToast}
        onClose={handleCloseToast}
      />
    </div>
  );
};

export default ContactPage;
