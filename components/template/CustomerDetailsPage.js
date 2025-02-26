import moment from "moment";
import React from "react";

function CustomerDetailsPage({ data }) {
  console.log(data);

  return (
    <div className="text-white my-10">
      <h4 className="mx-0 my-[20px] text-[1.2rem]">جزئیات مشتری</h4>
      <div className="bg-[#262836] p-[15px] rounded-[5px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        <div className="flex rounded-[5px] w-fit mx-0 my-5">
          <span className="text-[#57aac8] ml-[5px]">نام: </span>
          <p>{data.name}</p>
        </div>

        <div className="flex rounded-[5px] w-fit mx-0 my-5">
          <span className="text-[#57aac8] ml-[5px]">نام خانوادگی: </span>
          <p>{data.lastName}</p>
        </div>
        <div className="flex rounded-[5px] w-fit mx-0 my-5">
          <span className="text-[#57aac8] ml-[5px]">ایمیل: </span>
          <p>{data.email}</p>
        </div>
        <div className="flex rounded-[5px] w-fit mx-0 my-5">
          <span className="text-[#57aac8] ml-[5px]">شماره تماس: </span>
          <p>{data.phone}</p>
        </div>
        <div className="flex rounded-[5px] w-fit mx-0 my-5">
          <span className="text-[#57aac8] ml-[5px]">آدرس: </span>
          <p>{data.address}</p>
        </div>
        <div className="flex rounded-[5px] w-fit mx-0 my-5">
          <span className="text-[#57aac8] ml-[5px]">کدپستی: </span>
          <p>{data.postalCode}</p>
        </div>
        <div className="flex rounded-[5px] w-fit mx-0 my-5">
          <span className="text-[#57aac8] ml-[5px]">تاریخ تولد: </span>
          <p>{moment(data.date).utc().format("YYYY-MM-DD")}</p>
        </div>
      </div>
      <div className="bg-[#262836] mt-[50px] p-[15px] rounded-[5px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <p className="text-[#57aac8] mb-[25px]">نام محصول</p>
        <p className="text-[#57aac8] mb-[25px]">قیمت</p>
        <p className="text-[#57aac8] mb-[25px]">تعداد</p>
        {data.products.map((product, index) => (
          <React.Fragment key={index}>
            <span>{product.name}</span>
            <span>{product.price}</span>
            <span>{product.qty}</span>
            </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default CustomerDetailsPage;
