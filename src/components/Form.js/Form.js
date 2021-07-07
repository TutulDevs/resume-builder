import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().min(4).max(8).positive().integer().required(),
});

const Form = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //{resolver: yupResolver(schema)}

  const onSubmit = (data) => props.onSubmitForm(data);

  const inputIsValid =
    "py-1 px-2 w-full bg-white border border-header rounded-lg focus:ring focus:ring-blue-300 focus:outline-none";
  const inputIsInvalid =
    "py-1 px-2 w-full bg-white border border-red-300 rounded-lg focus:ring focus:ring-red-300 focus:outline-none";

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='my-2'>
        <label htmlFor='firstName'>First Name</label>
        <input
          name='firstName'
          id='firstName'
          type='text'
          {...register("firstName", { required: true })}
          className={errors.firstName ? inputIsInvalid : inputIsValid}
        />
      </div>

      <div className='my-4'>
        <button
          type='submit'
          className='py-2 px-4 bg-header text-white rounded-lg transition duration-100 focus:ring-4 focus:ring-blue-400'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;

/*
  const Input = ({ type, id, label, register, required, minLength }) => {
    return (
      <div className='mt-2'>
        <label htmlFor={id} className='block'>
          {label}
        </label>

        <input
          type={type}
          id={id}
          {...register(id, { required, minLength })}
          className='py-1 px-2 w-full bg-white border border-header rounded-lg focus:ring focus:ring-blue-300 focus:outline-none'
        />
      </div>
    );
  };

*/
