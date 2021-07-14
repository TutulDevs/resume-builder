//import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup.object().shape({
//   firstName: yup.string().required(),
//   age: yup.number().min(4).max(8).positive().integer().required(),
// });

const Form = (props) => {
  //const [showSocial, setShowSocial] = useState(false);
  // const [showSkills, setShowSkills] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //{resolver: yupResolver(schema)}

  const onSubmit = (data) => props.onSubmitForm(data);

  const inputIsValid =
    "py-1 px-2 w-full bg-white border border-blue-200 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none";
  const inputIsInvalid =
    "py-1 px-2 w-full bg-white border border-red-300 rounded-lg focus:ring focus:ring-red-300 focus:outline-none";

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Header elements */}
      <h2 className='border-b border-header text-header text-xl font-medium mt-4'>
        Basic Information
      </h2>
      <div className='basicInfo'>
        <div className='my-2'>
          <label htmlFor='fullName'>First Name</label>
          <input
            name='fullName'
            id='fullName'
            type='text'
            {...register("fullName", { required: true })}
            className={errors.fullName ? inputIsInvalid : inputIsValid}
          />
        </div>

        <div className='my-2'>
          <label htmlFor='jobTitle'>Job Title</label>
          <input
            name='jobTitle'
            id='jobTitle'
            type='text'
            {...register("jobTitle", { required: true })}
            className={errors.jobTitle ? inputIsInvalid : inputIsValid}
          />
        </div>
      </div>

      <div className='my-4'>
        <button
          type='submit'
          className='py-2 px-6 bg-header text-white rounded-lg transition duration-100 focus:ring-4 focus:ring-blue-400'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;

/*


      
      <h2
        onClick={() => setShowSocial(!showSocial)}
        className='border-b border-header text-header text-xl font-medium mt-4'>
        Social Handlers {showSocial ? "+" : "-"}
      </h2>

      <div
        className={`${
          showSocial && "hidden"
        } socials grid gap-2 sm:grid-flow-col`}>
        <div className='my-2'>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            id='email'
            type='email'
            {...register("email", { required: true })}
            className={errors.email ? inputIsInvalid : inputIsValid}
          />
        </div>

        <div className='my-2'>
          <label htmlFor='linkedIn'>LinkedIn</label>
          <input
            name='linkedIn'
            id='linkedIn'
            type='text'
            placeholder='e.g. tutuldevs'
            {...register("linkedIn", { required: true })}
            className={errors.linkedIn ? inputIsInvalid : inputIsValid}
          />
        </div>

        <div className='my-2'>
          <label htmlFor='github'>GitHub</label>
          <input
            name='github'
            id='github'
            type='text'
            placeholder='e.g. tutuldevs'
            {...register("github", { required: true })}
            className={errors.github ? inputIsInvalid : inputIsValid}
          />
        </div>

        <div className='my-2'>
          <label htmlFor='portfolio'>Portfolio Site</label>
          <input
            name='portfolio'
            id='portfolio'
            type='url'
            placeholder='Optional'
            {...register("portfolio")}
            className={errors.portfolio ? inputIsInvalid : inputIsValid}
          />
        </div>
      </div>

      <h2
        onClick={() => setShowSkills(!showSkills)}
        className='border-b border-header text-header text-xl font-medium mt-4'>
        Skills {showSkills ? "+" : "-"}
      </h2>

      <div className={`${showSkills && "hidden"} skills`}>
        <div className='my-2'>
          <label htmlFor='specializations'>Specializations</label>
          <input
            name='specializations'
            id='specializations'
            type='text'
            placeholder='e.g. Single Page Application, Front-End Development, RWD'
            {...register("specializations", { required: true })}
            className={errors.specializations ? inputIsInvalid : inputIsValid}
          />
        </div>

        <div className='my-2'>
          <label htmlFor='development'>Development</label>
          <input
            name='development'
            id='development'
            type='text'
            placeholder='e.g. HTML, CSS, SASS, JavaScript, React, Redux'
            {...register("development", { required: true })}
            className={errors.development ? inputIsInvalid : inputIsValid}
          />
        </div>

        <div className='my-2'>
          <label htmlFor='tools'>Tools</label>
          <input
            name='tools'
            id='tools'
            type='text'
            placeholder='e.g. VS Code, Git, GitHub, ZenHub, Netlify, Firebase'
            {...register("tools")}
            className={errors.tools ? inputIsInvalid : inputIsValid}
          />
        </div>
      </div>

*/
