import { FormInput, SubmitBtn } from '../../components';
import { Form, Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef } from 'react';

const ForgotPassword = () => {
  const emailRef = useRef(null);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Main Content - Centered */}
      <section className="flex-1 flex items-center justify-center">
        <Form method="POST" className="center-screen-card">
          <h4 className="text-center text-2xl font-semibold mb-6">Forgot Password</h4>

          <div className="info space-y-2 mb-2">
            <h5 className="text-center text-sm font-semibold">Reset Your Password</h5>
            <p className="text-center text-sm text-gray-500">
              Enter your email address and we'll send you a password reset link.
            </p>
          </div>

          <FormInput
            inputRef={emailRef}
            type="email"
            label="email address"
            name="email"
            required={true}
          />

          <div className='mt-3'>
            <SubmitBtn text="reset your password" statusText='sending mail...' />
          </div>
        </Form>
      </section>

      {/* Footer - Stays at the Bottom */}
      <footer className="w-full pb-12 text-center mt-auto">
        <p>
          <Link to="/auth/login" className="btn btn-sm bg-base-100 hover:bg-base-100 ml-3">
            <ArrowLeftIcon className='size-4' /> Go Back
          </Link>
        </p>
      </footer>
    </div>
  );
}
export default ForgotPassword;