import React from "react";
import Image from "next/image";

function Footer() {
  const copyrightYear = new Date();
  return (
    <div className=" flex justify-center h-20 bg-slate-800 text-white font-black">
      <div className="flex m-2 ">
        <span className="pt-4">
          EmbedtheDead &copy;{copyrightYear.getFullYear()}
        </span>
        <Image
          className="rounded-full"
          src={"/assets/embedthedead.jpeg"}
          width={100}
          height={100}
          alt="creators company logo"
        />
      </div>
    </div>
  );
}

export default Footer;
