import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const SubmissionSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page after 3 seconds
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 3000);

    // Clean up timer if component unmounts
    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full text-center p-8 rounded-xl shadow-lg bg-white border-2 border-[var(--primary)] animate-fade-in">
        <div className="flex justify-center mb-4">
          <FaCheckCircle className="text-green-500 text-7xl" />
        </div>
        <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">
          Thank You!
        </h2>
        <p className="text-lg mb-6 text-gray-700">
          Your message has been successfully submitted. We'll get back to you
          soon!
        </p>
        <p className="text-sm text-gray-500">
          Redirecting to homepage in 3 seconds...
        </p>
      </div>
    </div>
  );
};

export default SubmissionSuccess;
