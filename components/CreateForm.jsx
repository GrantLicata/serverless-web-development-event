"use client";

import { useState } from "react";

export default function CreateForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const { getData } = props;

  // Create new contact
  const handleSubmit = async (e) => {
    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        address,
      }),
    }).then(
      setFirstName(""),
      setLastName(""),
      setEmail(""),
      setPhone(""),
      setAddress("")
    );
    getData();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-200 rounded-lg p-4 mt-4 border-t flex flex-col gap-5"
      >
        <div>
          <label htmlFor="first-name">First Name</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            className="rounded-md"
            type="text"
            id="first-name"
            alt="first name field"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            className="rounded-md"
            type="text"
            id="last-name"
            alt="last name field"
            placeholder="Doe"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="rounded-md"
            type="text"
            id="email"
            alt="email field"
            placeholder="john@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className="rounded-md"
            id="phone"
            alt="phone number field"
            placeholder="(###) ###-####"
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            className="rounded-md"
            id="address"
            alt="address field"
            placeholder="123 Name Street, State"
          />
        </div>

        <button
          className="bg-green-700 p-3 text-white font-bold rounded-md active:outline active:outline-blue-500"
          type="submit"
          alt="save contact"
        >
          Save
        </button>
      </form>
    </>
  );
}
