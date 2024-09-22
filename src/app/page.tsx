'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type SampleFormInput = {
  email: string;
  subject: string;
  message: string;
};

export default function Home() {
  const [openForm, setOpenForm] = useState(false);
  const { register, handleSubmit } = useForm<SampleFormInput>({
    defaultValues: {
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: SampleFormInput) => {
    console.log(data);
  };

  const toggleForm = () => setOpenForm(!openForm);
  return (
    <main className='px-5 sm:px-8 py-3 sm:py-6'>
      <h1 className='text-2xl'>Send email with nodemailer </h1>

      <button
        onClick={toggleForm}
        className='mt-10 bg-white text-black py-1 px-2 font-medium rounded-sm'
      >
        <span className='text-blue-600 mr-1'>Send</span>
        <span className='text-yellow-500 mr-1'>with</span>
        <span className='text-red-700'>Gmail</span>
      </button>

      {openForm && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mt-5 p-2 sm:p-4 grid grid-cols-1 gap-4 sm:max-w-[248px] border rounded-sm'
        >
          <input
            {...register('email', { required: true })}
            type='email'
            placeholder='Email'
            className='block w-full p-1 text-black'
          />
          <input
            {...register('subject', { required: true })}
            type='text'
            placeholder='Subject'
            className='block w-full p-1 text-black'
          />
          <textarea
            {...register('message', { required: true })}
            placeholder='Message'
            className='block w-full p-1 text-black'
          ></textarea>
          <button
            type='submit'
            className='bg-blue-500 text-white py-1 px-2 mt-2'
          >
            Send
          </button>
        </form>
      )}
    </main>
  );
}
