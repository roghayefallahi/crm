import FormInput from "../element/FormInput";

function ItemList({ form, setForm }) {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  };

  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({ ...form, products: newProducts });
  };
  const deleteHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({ ...form, products: newProducts });
  };

  return (
    <div className="border-[2px] border-solid border-[#262836] p-[10px] my-[50px] mx-0 rounded-[10px]">
      <p className="text-white text-[1.2rem] ">محصولات خریداری شده</p>
      {products.map((product, index) => (
        <ProductItem
          product={product}
          key={index}
          changeHandler={(e) => changeHandler(e, index)}
          deleteHandler={() => deleteHandler(index)}
        />
      ))}
      <button
        onClick={addHandler}
        className="border-[1px] border-solid border-[#8af1aa] text-[#8af1aa] bg-black rounded-[5px] w-full mt-[50px] p-[15px] text-[1.1rem] cursor-pointer"
      >
        افزودن
      </button>
    </div>
  );
}

export default ItemList;

function ProductItem({ product, changeHandler, deleteHandler }) {
  return (
    <div className="border-2 border-solid border-[#262836] p-[10px] mt-[50px] rounded-[10px]">
      <FormInput
        name="name"
        label="نام محصول"
        type="text"
        value={product.name}
        onChange={changeHandler}
      />
      <div className="flex flex-wrap sm:gap-2 sm:flex-nowrap">
        <FormInput
          name="price"
          label="قیمت"
          type="text"
          value={product.price}
          onChange={changeHandler}
        />
        <FormInput
          name="qty"
          label="تعداد"
          type="text"
          value={product.qty}
          onChange={changeHandler}
        />
      </div>
      <button
        onClick={deleteHandler}
        className="border-[1px] border-solid border-[#f0394b] text-[#f0394b] bg-black rounded-[5px]  mt-[20px] py-[5px] px-[8px] text-[.8rem] cursor-pointer w-full"
      >
        حذف
      </button>
    </div>
  );
}
