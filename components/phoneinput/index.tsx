import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const PhoneInputField: React.FC<Props> = ({ value, onChange }) => {
  return (
    <PhoneInput
      country={"ng"} // Default country: Nigeria
      value={value}
      onChange={onChange}
      inputStyle={{
        width: "100%",
        height: "48px",
        borderRadius: "8px",
        fontSize: "16px",
        borderColor: "#B0B8BC",
      }}
      containerStyle={{
        width: "100%",
      }}
      buttonStyle={{
        borderRadius: "8px 0 0 8px",
      }}
      placeholder="your phone number"
      inputClass="font-gilmer text-[1rem] font-[400] text-[#001928] placeholder:text-[#001928] placeholder:font-gilmer placeholder:font-[400] placeholder:text-[1rem]"
    />
  );
};

export default PhoneInputField;
