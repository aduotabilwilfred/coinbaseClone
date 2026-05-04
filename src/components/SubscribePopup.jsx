import { useState } from "react";
import { X } from "lucide-react";
import Button from "./ui/Button";

export default function SubscribePopup({ onClose }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-[500px] overflow-hidden rounded-3xl bg-white shadow-2xl flex flex-col">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full p-2 bg-black/10 text-white hover:bg-black/20 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="w-full h-[250px] bg-[#F7F8FA]">
          <img
            src="https://images.ctfassets.net/q5ulk4bp65r7/48kvyahXeaYbcKIM2r23a7/c0d66a8f2f57bec36f6f6c3a410c33a9/Robert_story_1_3.png"
            alt="Subscribe illustration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full flex-1 p-8 text-center flex flex-col justify-center">
          {subscribed ? (
            <div className="flex flex-col items-center justify-center space-y-4 transition-opacity duration-500">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-5 mb-2">
                <div className="text-green-60 text-4xl">✓</div>
              </div>
              <h3 className="text-3xl font-display font-medium text-green-60">
                You have subscribed
              </h3>
              <p className="text-gray-60 mt-2">
                Thanks for subscribing to Coinbase Bytes.
              </p>
              <Button
                onClick={onClose}
                variant="primary"
                className="mt-6 w-full"
              >
                Close
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center transition-opacity duration-500">
              <h3 className="mb-2 text-3xl font-display font-medium text-black">
                Keep learning with Coinbase Bytes
              </h3>
              <p className="mb-6 text-gray-60 text-lg">
                The most important crypto news, sent to your inbox.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full space-y-4"
              >
                <input
                  type="email"
                  placeholder="waotabil@nopelO.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-gray-15 bg-white px-4 py-3 text-base text-black placeholder:text-gray-40 focus:border-blue-60 focus:outline-none focus:ring-1 focus:ring-blue-60 text-center"
                />
                <Button type="submit" variant="primary" className="w-full">
                  Subscribe
                </Button>
              </form>
              <p className="mt-6 text-xs text-gray-50 leading-relaxed">
                By submitting your email address, you are signing up to receive
                Coinbase Bytes communications to your inbox. For information on
                how we use your data see{" "}
                <a
                  href="https://www.coinbase.com/legal/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-60 hover:underline"
                >
                  coinbase.com/legal/privacy
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
