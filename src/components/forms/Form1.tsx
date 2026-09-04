"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";
import { countries } from "../../utils/constent";
import useBookingForm from "@/src/hooks/useBookingForm";
import { getDateInputLimits } from "@/src/hooks/getDateInputLimits";
import { BookingCalenderIcon, CalendarIcon, CallIcon, MailIcon, UserIcon } from "@/src/utils/formIcons";


interface Props {
  gridView?: boolean;
}
const locationOptions = [
  { value: "", label: "" },
  { value: "", label: "" },
];
interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  options: typeof locationOptions;
  error?: string;
  className?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  value,
  onChange,
  placeholder = "Preferred Location",
  options,
  error,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter options based on search term
  const filteredOptions = useMemo(() => {
    if (!searchTerm) return options;
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, options]);

  // Get selected label
  const selectedLabel = useMemo(() => {
    const selected = options.find((opt) => opt.value === value);
    return selected ? selected.label : "";
  }, [value, options]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle selection
  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      <div
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <input
          ref={inputRef}
          type="text"
          value={isOpen ? searchTerm : selectedLabel}
          onChange={(e) => {
            if (!isOpen) setIsOpen(true);
            setSearchTerm(e.target.value);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full placeholder:text-secondarya focus:outline-none text-secondarya bg-transparent"
          aria-label="Location"
        />
        <IoIosArrowDown
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute z-50 -left-4 w-[110%] mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors ${
                  value === option.value ? "bg-primary/10 text-primary" : ""
                }`}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No locations found</div>
          )}
        </div>
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
const Form1 = ({ gridView }: Props) => {
  const {
    isSubmitting,
    errors,
    handleSubmit,
    formData,
    handleChange,
    setFieldValue,
  } = useBookingForm({
    includeCheckIn: true,
    includeCheckOut: true,
    onSubmitSuccess: () => {
      setStartDate(null);
      setEndDate(null);
    },
  });
  const { min, max } = getDateInputLimits({
    showPast: false,
    showFuture: true,
  });

  const minDate = min ? new Date(min) : undefined;
  const maxDate = max ? new Date(max) : undefined;

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);

    if (start) {
      setFieldValue("checkIn", start.toISOString().split("T")[0]);
    }

    if (end) {
      setFieldValue("checkOut", end.toISOString().split("T")[0]);
    }
  };
  const handleLocationChange = (value: string) => {
    setFieldValue("city", value);
  };

  const formFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      value: formData.name,
      onChange: handleChange,
      icon: <UserIcon />,
    },
    {
      name: "phone",
      label: "Ph Number",
      type: "tel",
      value: formData.phone,
      onChange: handleChange,
      icon: <CallIcon />,
    },
    {
      name: "email",
      label: "Email ID",
      type: "email",
      value: formData.email,
      onChange: handleChange,
      icon: <MailIcon />,
    },
    {
      name: "checkIn",
      label: "Check-in & out",
      type: "date",
      value: formData.checkIn || "",
      onChange: handleChange,
      icon: <CalendarIcon />,
    },
    // {
    //   name: "city",
    //   label: "Location",
    //   type: "dropdown",
    //   value: formData.city || "",
    //   icon: <LocationIcon />,
    // },
  ];
  // useEffect(() => {
  //   if (submitSuccess) {
  //     setStartDate(null);
  //     setEndDate(null);
  //   }
  // }, [submitSuccess]);

  return (
    <form
      onSubmit={handleSubmit}
      className={`${gridView ? "flex flex-col gap-2" : "grid md:grid-cols-5 items-center gap-3.5 "} font-body max_width bg-transparent  max-md:divide-y divide-p1`}
    >
      {formFields.map((field, index) => (
        <React.Fragment key={index}>
          {field.type === "date" ? (
            <div
              className={`bg-secondary flex items-center gap-2.5 lg:shadow lg:rounded-lg ${gridView ? "p-4" : "py-2.5 px-3 lg:px-2"}`}
              key={index}
            >
              <label className="text-dark">{field.icon}</label>
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                minDate={minDate}
                maxDate={maxDate}
                placeholderText={field.label}
                calendarClassName="!z-[99999]"
                popperClassName="!z-[99999]"
                className={`pointer-events-auto placeholder:text-grey text-[#303030] outline-none w-full h-full bg-transparent text-base font-medium`}
                wrapperClassName="w-full h-full !flex items-center"
              />
            </div>
          ) 
          // : field.type === "dropdown" ? (
          //   <div
          //     className={`lg:bg-secondary flex items-center gap-2.5 lg:shadow border-light/30 lg:rounded-lg ${gridView ? "p-4" : "max-md:pb-4 max-md:pt-2 py-3 lg:px-2"}`}
          //   >
          //     <label className="text-secondary">{field.icon}</label>
          //     <CustomDropdown
          //       value={field.value}
          //       onChange={handleLocationChange}
          //       placeholder="Preferred Location"
          //       options={locationOptions}
          //       error={errors.city}
          //     />
          //   </div>
          // ) 
          : field.type === "tel" ? (
            <div
              className={`bg-secondary flex items-center gap-2.5 lg:shadow lg:rounded-lg ${gridView ? "p-4" : "py-2.5 px-3 lg:px-2"}`}
              key={index}
            >
              <label className="text-dark">{field.icon}</label>
              <div className="relative">
                <select
                  className="ps-2 cursor-pointer border-p1 appearance-none w-full placeholder:text-grey focus:outline-none text-[#303030] font-medium bg-transparent"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={(e) => setFieldValue("countryCode", e.target.value)}
                  style={{ width: `${formData.countryCode.length * 2}ch` }}
                  aria-label="Country Code"
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country.code} className="text-[#303030] bg-white">
                      {country.code}
                    </option>
                  ))}
                </select>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-dark">
                  <IoIosArrowDown />
                </span>
              </div>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.label}
                className={`w-full placeholder:text-grey focus:outline-none text-[#303030] font-medium bg-transparent`}
                value={field.value}
                onChange={field.onChange}
              />
            </div>
          ) : (
            <div
              className={`flex bg-secondary items-center gap-2.5 lg:shadow lg:rounded-lg ${gridView ? "p-4" : "py-2.5 px-3 lg:px-2"}`}
              key={index}
            >
              <label className="text-dark">{field.icon}</label>
              <input
                key={index}
                type={field.type}
                name={field.name}
                placeholder={field.label}
                className={`w-full placeholder:text-grey focus:outline-none text-[#303030] font-medium bg-transparent`}
                value={field.value}
                onChange={field.onChange}
              />
            </div>
          )}

          {errors[field.name] && (
            <p className="text-red-500">{errors[field.name]}</p>
          )}
        </React.Fragment>
      ))}
      <button
        type="submit"
        className=" bg-p1 w-full rounded-lg text-white text-md py-3"
      >
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <span className="flex items-center justify-center gap-2">
            <span className="">
              <BookingCalenderIcon />
            </span>{" "}
            Book Now{" "}
          </span>
        )}
      </button>
    </form>
  );
};

export default Form1;
