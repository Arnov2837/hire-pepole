import React from "react";
import cta from "@/app/asset/images/cta-bg.png";

const UpFooter = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#000000] px-4 py-16 sm:px-6 md:py-20 lg:py-24"
      style={{
        backgroundImage: `url(${cta.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-10 mx-auto p-20 flex w-full max-w-[900px] flex-col items-center gap-10 text-center">

        {/* Heading + Subtitle */}
        <div className="flex w-full flex-col items-center gap-4 text-white">
          <h2
            className="
              max-w-[688px]
              text-[40px]
              font-medium
              leading-[1.2]
              tracking-[-1px]
              sm:text-[48px]
              md:text-[56px]
              lg:text-[64px]
              lg:tracking-[-1.5px]
            "
            style={{ fontFamily: "Rethink Sans, sans-serif" }}
          >
            Your next role is
            <br />
            already looking for you
          </h2>

          <p
            className="
              max-w-[760px]
              text-[16px]
              font-normal
              leading-[1.6]
              text-white/70
              sm:text-[18px]
              md:text-[20px]
            "
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Build a profile in three minutes. The matches start arriving
            tomorrow morning.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="
              w-full rounded-[12px]
              border border-[rgba(9,10,21,0.1)]
              bg-white px-6 py-4
              text-[17px] font-semibold
              leading-[1.45] text-[#0b0b14]
              shadow-[inset_0px_3px_10px_0px_rgba(255,255,255,0.2)]
              transition-all duration-300
              hover:-translate-y-0.5 hover:shadow-lg
              sm:w-auto sm:text-[18px]
            "
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Create a free account
          </button>

          <button
            type="button"
            className="
              w-full rounded-[12px]
              border border-[rgba(215,215,215,0.3)]
              bg-[#0e0b16] px-6 py-4
              text-[17px] font-medium
              leading-[1.45] text-white
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-white/50
              hover:bg-[#15121d]
              sm:w-auto sm:text-[18px]
            "
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            View pricing
          </button>
        </div>

      </div>
    </section>
  );
};

export default UpFooter;