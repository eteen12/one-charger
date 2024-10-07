"use client";
import React, { useState } from "react";
import "/src/app/globals.css";

export default function EmailButton() {
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
      }
      await response.json();
      setSuccess("Thanks for subscribing!");
      setError(null);
      setIsActive(true);
    } catch (error) {
      setSuccess(`Failed to subscribe: ${error.message}`);
      setSuccess(null);
      setIsActive(false);
    }
    setEmail("");
    
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

          className={`absolute right-0 top-0 h-full text-sm montserrat text-black bg-purple-600 transition-all duration-700 ${
            isActive
              ? "w-full rounded-full"
              : "w-[35%] rounded-full  rounded-bl-none"
          }`}
          style={{ "--font-weight": "700" }}
        >
          {isActive ? "Thanks!" : "Subscribe"}
        </button>
      </div>
      <div className="relative h-2" aria-live="polite">
        {error && (
          <p className="absolute inset-0 text-red-500 text-xs text-center">
            {error}
          </p>
        )}
        {success && (
          <p className="absolute inset-0 teletaGreen text-xs text-center">
            {success}
          </p>
        )}
      </div>
    </form>
  );
}
