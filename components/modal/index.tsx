import React from "react";
import dynamic from "next/dynamic";
import { GoPersonFill } from "react-icons/go";
import { IoMail } from "react-icons/io5";
const Icon = dynamic(() => import("@/components/icons/icons"));
import PhoneInputField from "@/components/phoneinput";

interface ModalProps {
  isOpen?: boolean;
  handleCloseScheduleModal: () => void;
  children?: React.ReactNode;
}

const optionData = [
  { id: 1, name: "Tech" },
  { id: 2, name: "Finance" },
  { id: 3, name: "Telecommunication" },
  { id: 4, name: "Transportation" },
  { id: 5, name: "Aviation" },
  { id: 6, name: "Oil and Gas" },
  { id: 6, name: "Audit" },
  { id: 6, name: "Marketing" },
  { id: 6, name: "Retail" },
];

const Modal: React.FC<ModalProps> = ({ handleCloseScheduleModal }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex animate-[slide-down-fade_1s_ease-in-out] items-center justify-center"
      onClick={handleCloseScheduleModal}
    >
      <div className="fixed inset-0 bg-black opacity-30"></div>
      <div
        className="relative h-full sm:h-[90%] lg:h-[85%] w-full rounded-3xl bg-white p-6 sm:w-[55%] xl:w-[600px] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex justify-end items-center cursor-pointer"
          onClick={handleCloseScheduleModal}
        >
          <Icon name="close" />
        </div>
        <div>
          <div>
            <div>
              <h5 className="text-[1.55rem] sm:text-[2rem] font-gilmer font-[600] text-center mt-2">
                Fill in your enquiries
              </h5>
              <p className="font-gilmer text-[1rem] font-[400] text-[#001928] text-center mb-6">
                Send us a message using the contact form below
              </p>
            </div>
            <div className="px-6">
              <form>
                <div className="relative mb-4">
                  <input
                    type="text"
                    value=""
                    onChange={() => {}}
                    placeholder="Business Name"
                    className="indent-9 outline-0 ring-0 w-full border border-[#B0B8BC] rounded-lg py-3 font-gilmer text-[1rem] font-[400] text-[#001928] placeholder:text-[#001928] placeholder:font-gilmer placeholder:font-[400] placeholder:text-[1rem]"
                  />
                  <GoPersonFill className="absolute text-[#B0B8BC] top-[17px] left-[10px]" />
                </div>
                <div className="relative mb-4">
                  <input
                    type="text"
                    value=""
                    onChange={() => {}}
                    placeholder="Your email address"
                    className="indent-9 outline-0 ring-0 w-full border border-[#B0B8BC] rounded-lg py-3 font-gilmer text-[1rem] font-[400] text-[#001928] placeholder:text-[#001928] placeholder:font-gilmer placeholder:font-[400] placeholder:text-[1rem]"
                  />
                  <IoMail className="absolute text-[#B0B8BC] top-[17px] left-[10px]" />
                </div>
                <div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2 sr-only">
                      Phone Number
                    </label>
                    <PhoneInputField value={""} onChange={() => {}} />
                  </div>
                </div>
                <div className="relative mb-4 ">
                  <select
                    onChange={() => {}}
                    className="px-4 outline-0 ring-0 w-full border border-[#B0B8BC] rounded-lg py-3 font-gilmer text-[1rem] font-[400] text-[#001928] placeholder:text-[#001928] placeholder:font-gilmer placeholder:font-[400] placeholder:text-[1rem]"
                  >
                    <option className="">Select your industry</option>
                    {optionData.map((option) => (
                      <option
                        key={option.id}
                        value={option.name}
                        className="px-4"
                      >
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <textarea
                    onChange={() => {}}
                    name="description"
                    value={""}
                    maxLength={100}
                    placeholder="Brief Overview"
                    className="px-4 outline-0 ring-0 w-full border border-[#B0B8BC] rounded-lg py-3 font-gilmer text-[1rem] font-[400] text-[#001928] placeholder:text-[#001928] placeholder:font-gilmer placeholder:font-[400] placeholder:text-[1rem]"
                  ></textarea>{" "}
                </div>
                <div className="flex justify-center items-center mt-6">
                  <button className="bg-[#002211] w-fit font-gilmer  text-[1rem] font-[400] rounded-md px-6 py-4 text-white">
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
