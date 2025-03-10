import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="font-vazir flex justify-between items-center text-white mt-5 mx-0 mb-10">
        <h2 className="font-bold">سیستم مدیریت مشتریان</h2>
        <Link
          href="/add-customer"
          className="bg-[#8af1aa]  text-[#262836] px-[10px] py-[5px] font-bold rounded-md border-2 border-solid border-[#8af1aa]"
        >
          افزودن مشتری
        </Link>
      </header>

      <div className="font-vazir min-h-24">{children}</div>
      <footer className="font-vazir bg-[#111111] text-center text-white py-5 px-[10px] rounded-[10px]">
        توسعه داده شده با ❤️
      </footer>
    </>
  );
}

export default Layout;
