function FormInput({ name, label, type, value, onChange }) {
  return (
    <div className="flex flex-col mb-[30px] text-[#57aac8] w-full">
      <label htmlFor={name} className="mb-[10px]">{label}</label>
      <input className="bg-[#262836] border-none rounded-[5px] p-3 text-white text-[1rem] outline-none"
        type={type}
        value={value}
        name={name}
        id={name}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
