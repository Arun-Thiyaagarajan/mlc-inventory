import { useEffect, useState } from "react";
import { VerifiedCheckbox } from "../../components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { CustomFetch } from "../../utils";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const VerifyAccount = () => {
  const [verified, setVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const query = useQuery();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const { data } = await CustomFetch.post("/auth/verify-account", {
          verificationToken: query.get("token"),
          email: query.get("email"),
        });

        // Wait a bit before marking as verified
        setTimeout(() => setVerified(true), 100);
      } catch (error) {
        navigate(-1);
      } finally {
        setIsLoading(false);
      }
    };

    verifyToken(); // Call once when the component mounts
  }, []); // No dependencies to avoid re-runs

  if (isLoading) {
    return (
      <section className="center-screen">
        <h3 className="text-xl">Loading...</h3>
      </section>
    );
  }

  if (error) {
    return (
      <section className="center-screen">
        <h3 className="text-xl text-red-500">Verification Failed ❌</h3>
      </section>
    );
  }

  return (
    <section className="center-screen">
      <div className="space-y-7">
        <VerifiedCheckbox checked={verified} />
        <h3 className="text-xl sm:text-2xl font-medium">Hooray 🥳 Verified Your Account.</h3>
        <p className="mt-5 text-center space-y-4">
          <p className="text-md">Ready to dive in? Login now and get started!</p>
          <Link to="/auth/login" className="btn btn-sm bg-base-100 hover:bg-base-100 ml-3">
            Login
            <ArrowRightIcon className="size-4" />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default VerifyAccount;
