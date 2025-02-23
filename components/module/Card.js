import Link from "next/link";
import { useRouter } from "next/router";
import { Pencil, ReceiptText, Trash2 } from "lucide-react";
// import toast from "react-hot-toast";

function Card({ customer }) {
  const router = useRouter();

  const deleteHandler = async () => {
    const res = await fetch(`/api/delete/${customer._id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.status === "success") {
      // toast.success("با موفقیت حذف شد.")
      router.reload();
    }
  };

  return (
    <div className="bg-[#262836] text-[#57aac8] mx-0 my-[10px] py-5 px-[10px] rounded-md flex justify-between">
      <div className="flex">
        <p className="mr-[15px]">
          {customer.name} {customer.lastName}
        </p>
        <p className="mr-[30px]">{customer.email}</p>
      </div>
      <div className="flex">
        <button
          onClick={deleteHandler}
          className=" text-[#f0394b] ml-4 rounded-md cursor-pointer"
        >
          <Trash2 />
        </button>
        <Link
          href={`/edit/${customer._id}`}
          className="font-extralight text-[#8af1aa] ml-4 rounded-md cursor-pointer"
        >
          <Pencil />
        </Link>
        <Link
          href={`/customer/${customer._id}`}
          className="font-extralight text-blue-600 ml-4 rounded-md cursor-pointer"
        >
          <ReceiptText />
        </Link>
      </div>
    </div>
  );
}

export default Card;
