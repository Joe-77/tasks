import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Menu({ links }: any) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShow(false);
      }
    };

    if (show) {
      document.body.classList.add("overflow-hidden");
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [show]);

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setShow(true)}
        className="cursor-pointer group flex items-center gap-1 "
      >
        <span
          className={`duration-500 text-2xl flex items-center justify-center  flex-col gap-1 ${
            show && "w-8 h-8  bg-black rounded-full text-white"
          }`}
        >
          <GiHamburgerMenu />
        </span>
      </button>

      <div
        className={`fixed top-0 ${
          show ? "right-0" : "-right-[400px]"
        } duration-500 bg-header shadow-lg max-w-[300px] w-full min-h-screen z-[999] bg-white`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setShow(false)}
            className="text-xl w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:scale-95 transition cursor-pointer"
          >
            <IoClose />
          </button>
        </div>

        <ul className="mt-8  flex flex-col gap-3 font-poppins px-5">
          {links?.map((e: any) => (
            <li key={e.id} className="text-lg pb-5 w-full">
              <Link
                to={e.href}
                onClick={() => setShow(false)}
                className={`duration-500 hover:text-[#0a58ca] flex items-center gap-2 rtl:hover:-translate-x-2.5 ltr:hover:translate-x-2.5 `}
              >
                {e.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {show && (
        <div
          onClick={() => setShow(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-[888]"
        ></div>
      )}
    </div>
  );
}
