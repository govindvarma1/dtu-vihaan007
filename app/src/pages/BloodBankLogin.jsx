import React, {useState} from 'react'

export default function BloodBankLogin() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
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
                console.log("Logging in...");
            } else {
                console.log("Fill in all fields.");
            }
        } catch (error) {}
    };

    const validateForm = () => {
        let isValid = true;

        if (!formData.email.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: "Email is required.",
            }));
            isValid = false;
        }

        if (!formData.password.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: "Password is required.",
            }));
            isValid = false;
        }

        return isValid;
    };

    return (
        <div className="container mx-auto mt-8">
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto p-8 bg-white shadow-md rounded"
            >
                <h2 className="text-2xl font-semibold mb-6">Login</h2>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-bold mb-2"
                    >
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
                        htmlFor="password"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
                            errors.password ? "border-red-500" : ""
                        }`}
                        required
                    />
                    {errors.password && (
                        <p className="text-red-500 mt-1">{errors.password}</p>
                    )}
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

