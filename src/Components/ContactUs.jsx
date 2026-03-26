import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    pincode: "",
    phone: "",
    email: "",
    terms: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.terms) {
      setError("Please accept Terms & Conditions");
      return;
    }

    setError("");
    console.log("Form Data:", form);

    // Reset form (optional)
    setForm({
      name: "",
      address: "",
      pincode: "",
      phone: "",
      email: "",
      terms: false,
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-[30px] font-semibold mb-6 text-center gradient-subtle">Contact Us</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border p-2 rounded-md"
        />

        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
          className="border p-2 rounded-md"
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={form.pincode}
          onChange={handleChange}
          required
          className="border p-2 rounded-md"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="border p-2 rounded-md"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="border p-2 rounded-md"
        />

        {/* Terms */}
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
          />
          I agree to the Terms & Conditions
        </label>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-black text-white py-2 rounded-md hover:bg-gray-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}