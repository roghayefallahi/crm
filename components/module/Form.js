import FormInput from "../element/FormInput";
import ItemList from "./ItemList";

function Form({ form, setForm }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <div className="flex flex-wrap sm:gap-2 sm:flex-nowrap">
        <FormInput
          name="name"
          type="text"
          label="نام"
          value={form.name}
          onChange={changeHandler}
        />
        <FormInput
          name="lastName"
          type="text"
          label="نام خانوادگی"
          value={form.lastName}
          onChange={changeHandler}
        />
      </div>
      <div className="flex flex-wrap sm:gap-2 sm:flex-nowrap">
        <FormInput
          name="email"
          type="text"
          label="ایمیل"
          value={form.email}
          onChange={changeHandler}
        />
        <FormInput
          name="phone"
          type="text"
          label="شماره تماس"
          value={form.phone}
          onChange={changeHandler}
        />
      </div>
      <div className="flex flex-wrap sm:gap-2 sm:flex-nowrap">
        <FormInput
          name="postalCode"
          type="text"
          label="کد پستی"
          value={form.postalCode}
          onChange={changeHandler}
        />
        <FormInput
          name="date"
          type="date"
          label="تاریخ"
          value={form.date}
          onChange={changeHandler}
        />
      </div>
      <FormInput
        name="address"
        type="text"
        label="آدرس"
        value={form.address}
        onChange={changeHandler}
      />
      <ItemList form={form} setForm={setForm} />
    </div>
  );
}

export default Form;
