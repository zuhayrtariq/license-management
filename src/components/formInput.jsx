const FormInput = ({ children, title, spanText, ...rest }) => {
  return (
    <>
      <div className='group'>
        <h2 className='text-md font-semibold group-focus-within:text-primary  '>
          {title}
        </h2>
        <input
          onClick={(event) => event.target.removeAttribute('placeholder')}
          {...rest}
          placeholder=''
          className='peer  w-full py-2 outline outline-neutral-700 outline-2 px-2 rounded-md  shadow-sm  invalid:outline-red-500 placeholder-shown:!outline-neutral-700 focus:!outline-primary'></input>
        <span className=' block mb-4 text-xs mt-1 pl-1 text-gray-700 font-medium  '>
          {spanText}
        </span>
      </div>
    </>
  );
};
export default FormInput;
