import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Header from "../components/header";
import Footer from "../components/footer";
import Button from "../components/ui/Button";

const ProfilePage = () => {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-60 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-5 flex flex-col font-sans">
      <Header />

      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-10 overflow-hidden">
          <div className="bg-blue-60 h-32 relative">
            <div className="absolute -bottom-12 left-8 w-24 h-24 bg-white rounded-full p-1 shadow-md">
              <div className="w-full h-full bg-blue-10 rounded-full flex items-center justify-center text-blue-60 text-3xl font-bold font-display uppercase">
                {user.name?.charAt(0) || "U"}
              </div>
            </div>
          </div>

          <div className="pt-16 pb-8 px-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-100 font-display">
                  {user.name}
                </h1>
                <p className="text-gray-60">{user.email}</p>
              </div>
              <Button
                variant="secondary"
                onClick={handleLogout}
                className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
              >
                Sign Out
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border border-gray-10 bg-gray-5">
                <h3 className="font-bold text-gray-100 mb-2">
                  Account Details
                </h3>
                <div className="space-y-4 mt-4">
                  <div>
                    <p className="text-sm text-gray-60">Full Name</p>
                    <p className="font-medium text-gray-100">{user.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-60">Email Address</p>
                    <p className="font-medium text-gray-100">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-60">Member Since</p>
                    <p className="font-medium text-gray-100">
                      {new Date(
                        user.createdAt || Date.now(),
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-gray-10 bg-gray-5">
                <h3 className="font-bold text-gray-100 mb-2">Security</h3>
                <p className="text-sm text-gray-60 mb-4">
                  Manage your account security and authentication methods.
                </p>
                <Button variant="secondary" className="w-full">
                  Update Password
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProfilePage;
