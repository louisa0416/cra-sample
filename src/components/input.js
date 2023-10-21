const Input = ({ id, value, onChangeHandler, text }) => {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input id={id} value={value} onChange={onChangeHandler} />
    </>
  );
};

export default Input;
