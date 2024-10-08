"use client";
import React, { useState } from "react";
import "/src/app/globals.css";

export default function EmailButton({ borderRadius }) {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSubscriber = { email };

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSubscriber),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(
          errorResponse.error ||
            "Something went wrong, if you really care just email me."
        );
      } else {
        setEmail("");
      }
      const data = await response.json();
      setSuccess("Thanks for subscribing!");
      setError("");
      setIsActive(true);
    } catch (error) {
      setError(`Failed to subscribe: ${error.message}`);
      setSuccess("");
      setIsActive(false);
    }
    setEmail("");
    setTimeout(() => {
      setIsActive(false);
      setError(null);
      setSuccess(null);
    }, 2000);
  };

  return (
    <form
      id="subscribe-form"
      name="subscribe"
      aria-label="Email Subscription Form"
      className="relative w-full bg-transparent rounded-full shadow-lg "
      onSubmit={handleSubmit}
    >
      <div className="relative">
        <input
          type="email"
          id="email-spot"
          name="email"
          autoComplete="email"
          placeholder="Email Address"
          required
          className="w-full h-10 pl-4 text-sm font-bold border-0 rounded-full text-black montserrat focus:outline-none focus:ring-2 pr-24 lg:pr-36"
          style={{ "--font-weight": "600" }}
          aria-label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className={`absolute right-0 top-0 h-full text-sm montserrat text-white bg-purple-600 transition-all duration-700 font-bold ${
            isActive ? "w-full rounded-full" : `w-[35%] ${borderRadius}`
          }`}
        >
          {isActive ? "Thanks!" : "Subscribe"}
        </button>
      </div>
      <div className="relative mt-2" aria-live="polite">
        {error && (
          <p className="absolute inset-0 text-red-500 text-xs text-center">
            {error}
          </p>
        )}
        {success && (
          <p className="absolute inset-0 text-green-500 text-xs text-center">
            {success}
          </p>
        )}
      </div>
    </form>
  );
}
