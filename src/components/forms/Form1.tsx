"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useBookingForm from "@/src/hooks/useBookingForm";
import { CalendarIcon, CallIcon, MailIcon, UserIcon, BookingCalenderIcon } from "@/src/utils/formIcons";

interface Form1Props {
  gridView?: boolean;
}

const Form1: React.FC<Form1Props> = ({ gridView = false }) => {
  const { isSubmitting, errors, handleSubmit, formData, handleChange, setFieldValue } = useBookingForm({
    includeCheckIn: true,
    includeCheckOut: true,
  });

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start) setFieldValue("checkIn", start.toISOString().split("T")[0]);
    if (end) setFieldValue("checkOut", end.toISOString().split("T")[0]);
  };

  const formFields = [
    { name: "name", label: "Full Name", type: "text", value: formData.name, onChange: handleChange, icon: <UserIcon /> },
    { name: "phone", label: "Ph Number", type: "tel", value: formData.phone, onChange: handleChange, icon: <CallIcon /> },
    { name: "email", label: "Email ID", type: "email", value: formData.email, onChange: handleChange, icon: <MailIcon /> },
    { name: "checkIn", label: "Check-in & out", type: "date", value: formData.checkIn || "", icon: <CalendarIcon /> },
  ];

  return (
    <form onSubmit={handleSubmit} className={`grid ${gridView ? "grid-cols-1" : "grid-cols-1 md:grid-cols-5"} items-center gap-3.5 font-sans bg-transparent`}>
      {formFields.map((field, index) => (
        <React.Fragment key={index}>
          {field.type === "date" ? (
            <div className="bg-[#FAF8F5] flex items-center gap-2.5 py-3 px-3.5 rounded-lg border border-[#D6D2C7] focus-within:ring-2 focus-within:ring-[#B58A4A]">
              <label className="text-[#B58A4A] text-sm shrink-0">{field.icon}</label>
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                placeholderText={field.label}
                className="placeholder:text-gray-500 text-[#192118] outline-none w-full bg-transparent text-sm font-medium"
              />
            </div>
          ) : (
            <div className="flex bg-[#FAF8F5] items-center gap-2.5 py-3 px-3.5 rounded-lg border border-[#D6D2C7] focus-within:ring-2 focus-within:ring-[#B58A4A]">
              <label className="text-[#B58A4A] text-sm shrink-0">{field.icon}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.label}
                className="w-full placeholder:text-gray-500 outline-none text-[#192118] font-medium bg-transparent text-sm"
                value={field.value}
                onChange={field.onChange}
              />
            </div>
          )}
        </React.Fragment>
      ))}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#B58A4A] hover:bg-[#9e773c] w-full rounded-lg text-white font-medium py-3.5 transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2 text-sm uppercase tracking-wide shrink-0"
      >
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <span className="flex items-center justify-center gap-2">
            <BookingCalenderIcon /> Book Now
          </span>
        )}
      </button>
    </form>
  );
};

export default Form1;
