import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Button from "../components/ui/Button";
import { addCrypto } from "../services/api";

const CreateCryptoPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    price: "",
    image: "",
    change24h: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const data = {
        ...formData,
        price: parseFloat(formData.price),
        change24h: parseFloat(formData.change24h),
      };

      if (isNaN(data.price) || isNaN(data.change24h)) {
        throw new Error("Price and 24h Change must be valid numbers.");
      }

      await addCrypto(data);
      setSuccess(true);
      setTimeout(() => navigate("/explore"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Failed to create cryptocurrency.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20 px-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h1 className="text-[2.5rem] font-semibold text-gray-100 mb-2">Create Cryptocurrency</h1>
            <p className="text-gray-60">Add a new asset to the CryptoBase ecosystem.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {error && (
              <div className="bg-red-5 border border-red-20 text-red-60 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-5 border border-green-20 text-green-60 px-4 py-3 rounded-lg text-sm">
                Cryptocurrency created successfully! Redirecting...
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-gray-100">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Bitcoin"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-20 focus:border-blue-60 outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="symbol" className="text-sm font-semibold text-gray-100">
                Symbol
              </label>
              <input
                type="text"
                id="symbol"
                name="symbol"
                value={formData.symbol}
                onChange={handleChange}
                placeholder="e.g. BTC"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-20 focus:border-blue-60 outline-none transition-colors uppercase"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="price" className="text-sm font-semibold text-gray-100">
                Price (USD)
              </label>
              <input
                type="number"
                step="any"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-20 focus:border-blue-60 outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="image" className="text-sm font-semibold text-gray-100">
                Image URL
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/logo.png"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-20 focus:border-blue-60 outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="change24h" className="text-sm font-semibold text-gray-100">
                24h Change (%)
              </label>
              <input
                type="number"
                step="any"
                id="change24h"
                name="change24h"
                value={formData.change24h}
                onChange={handleChange}
                placeholder="e.g. 2.5"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-20 focus:border-blue-60 outline-none transition-colors"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              disabled={loading}
              className="mt-4 w-full py-4 text-lg font-semibold"
            >
              {loading ? "Creating..." : "Create Cryptocurrency"}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateCryptoPage;
