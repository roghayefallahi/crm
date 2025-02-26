import { useRouter } from "next/router";
import { useState } from "react";
import Form from "../module/Form";
import moment from "moment";
import { toast } from "react-toastify";

function CustomerEditPage({ data, id }) {
    const router = useRouter();
    const [form, setForm] = useState({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone || "",
        address:data.address || "",
        postalCode: data.postalCode || "",
        date: data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "",
        products: data.products || [],
      });
    
     
    
      const saveHandler = async () => {
        const res = await fetch(`/api/edit/${id}`, {
          method: "PATCH",
          body: JSON.stringify({ data: form }),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        console.log(data);
        if (data.status === "success") {
          toast.success("اطلاعات مشتری با موفقیت به روزرسانی شد.");
          router.push("/");
        } else {
          toast.error("خطا رخ داد!");
        }
      };
    
      const cancelHandler = () => {
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

export default CustomerEditPage;
