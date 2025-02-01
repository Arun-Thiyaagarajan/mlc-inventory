import { useEffect, useRef } from 'react';
import { FormInput, SubmitBtn } from '../../components';
import { Form, Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { toast } from 'react-toastify';
import { CustomFetch } from '../../utils/index';

export const action = (store) => async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await CustomFetch.post('/auth/register', data);
    toast.success(response.data?.msg || 'Successfully registered! Check your mail for complete verification!');
    return null;
  } catch (error) {
    console.log(error)
    const errorMessage = error?.response?.data?.error?.message || 'please double check your credentials';
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  return (
    <>
      <section className="center-screen">
        <Form method="POST" className="center-screen-card">
          <h4 className="text-center text-2xl font-semibold mb-6">Register</h4>
          
          <FormInput
            inputRef={nameRef}
            type="name"
            label="full name"
            name="fullName"
            required={true}
          />
          
          <FormInput
            type="email" 
            label="email address" 
            name="email"
            required={true}
          />
          
          <FormInput
            type="password" 
            label="password" 
            name="password"
            required={true}
          />
          
          <div className='mt-3'>
            <SubmitBtn text="register" statusText='registering...' />
          </div>
          
          <p className='mt-5 text-center'>
            <span>Already a member?</span>
            <Link to="/auth/login" className="btn btn-sm bg-base-100 hover:bg-base-100 ml-3">
              Login
              <ArrowRightIcon className='size-4' />
            </Link>
          </p>
        </Form>
      </section>
    </>
  );
}
export default Register;