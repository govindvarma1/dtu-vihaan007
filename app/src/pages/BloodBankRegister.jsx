import React, { useState } from "react";
import { BloodBankRegisterRoute } from "../utils/API_Routes";

const BloodBankRegistrationForm = () => {
    const [formData, setFormData] = useState({
        bankName: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
    });

    const [errors, setErrors] = useState({
        bankName: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({
            ...errors,
            [name]: "",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (validateForm()) {
                const response = await fetch(BloodBankRegisterRoute, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(formData),
                })
                if(!response.ok) {
                    console.log("some error occured")
                    return;
                }
            } else {
                console.log("fill every thing");
            }
        } catch (error) {}
    };

    const validateForm = () => {
        let flag = true;
        return flag;
    };    

    return (
        <div className="container mx-auto mt-8">
            <form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto p-8 bg-white shadow-md rounded">
                <h2 className="text-2xl font-semibold mb-6">
                    Blood Bank Registration
                </h2>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-700 font-bold mb-2">
                        Blood Bank Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.bankName}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
                            errors.name ? "border-red-500" : ""
                        }`}
                        required
                    />
                    {errors.bankName && (
                        <p className="text-red-500 mt-1">{errors.bankName}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
                            errors.email ? "border-red-500" : ""
                        }`}
                        required
                    />
                    {errors.email && (
                        <p className="text-red-500 mt-1">{errors.email}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="phoneNumber"
                        className="block text-gray-700 font-bold mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
                            errors.phoneNumber ? "border-red-500" : ""
                        }`}
                        required
                    />
                    {errors.phoneNumber && (
                        <p className="text-red-500 mt-1">
                            {errors.phoneNumber}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="address"
                        className="block text-gray-700 font-bold mb-2">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
                            errors.address ? "border-red-500" : ""
                        }`}
                        required
                    />
                    {errors.address && (
                        <p className="text-red-500 mt-1">{errors.address}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="city"
                        className="block text-gray-700 font-bold mb-2">
                        City
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
                            errors.city ? "border-red-500" : ""
                        }`}
                        required
                    />
                    {errors.city && (
                        <p className="text-red-500 mt-1">{errors.city}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="state"
                        className="block text-gray-700 font-bold mb-2">
                        State
                    </label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
                            errors.state ? "border-red-500" : ""
                        }`}
                        required
                    />
                    {errors.state && (
                        <p className="text-red-500 mt-1">{errors.state}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="pincode"
                        className="block text-gray-700 font-bold mb-2">
                        Pincode
                    </label>
                    <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
                            errors.pincode ? "border-red-500" : ""
                        }`}
                        required
                    />
                    {errors.pincode && (
                        <p className="text-red-500 mt-1">{errors.pincode}</p>
                    )}
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                    Register Blood Bank
                </button>
            </form>
        </div>
    );
};

export default BloodBankRegistrationForm;
