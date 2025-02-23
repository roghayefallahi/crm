import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

import Form from "../module/Form";

function AddCustomerPage() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  });

  const router = useRouter();

  const saveHandler = async () => {
    const res = await fetch("/api/customer", {
      method: "POST",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "success") {
      toast.success("مشتری جدید با موفقیت اضافه شد.");
      router.push("/");
    } else {
      toast.error("خطا رخ داد!");
    }
  };

  const cancelHandler = () => {
    setForm({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      date: "",
      products: [],
    });
    router.push("/");
  };

  return (
    <div>
      <h4 className="text-white mx-0 my-20 text-[1.2rem]">افزودن مشتری جدید</h4>
      <Form form={form} setForm={setForm} />
      <div className="flex justify-end mb-[50px]">
        <button
          className="bg-black rounded-md font-bold text-[1.1rem] py-[10px] px-[30px] cursor-pointer border-[3px] border-[#f0394b] border-solid ml-3"
          onClick={cancelHandler}
        >
          لغو
        </button>
        <button
          className="bg-black rounded-md font-bold text-[1.1rem] py-[10px] px-[30px] cursor-pointer border-[3px] border-[#8af1aa] border-solid"
          onClick={saveHandler}
        >
          ذخیره
        </button>
      </div>
    </div>
  );
}

export default AddCustomerPage;
