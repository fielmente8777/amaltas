"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useBookingForm from "@/src/hooks/useBookingForm";
import {
  CalendarIcon,
  CallIcon,
  MailIcon,
  UserIcon,
  BookingCalenderIcon,
} from "@/src/utils/formIcons";
import { countries } from "@/src/utils/constent";

interface Form1Props {
  gridView?: boolean;
}

const Form1: React.FC<Form1Props> = ({ gridView = false }) => {
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
  });

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start) {
      setFieldValue("checkIn", start.toISOString().split("T")[0]);
    } else {
      setFieldValue("checkIn", "");
    }
    if (end) {
      setFieldValue("checkOut", end.toISOString().split("T")[0]);
    } else {
      setFieldValue("checkOut", "");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`flex flex-wrap ${
        gridView
          ? "flex-col gap-3.5 w-full"
          : "flex-col sm:flex-row items-center justify-center gap-3 sm:gap-x-4 sm:gap-y-3 w-full"
      } font-open-sans font-normal text-[14px] leading-[20px] tracking-normal bg-transparent`}
    >
      {/* 1. Name Field */}
      <div className={`flex ${gridView ? "flex-col gap-1 w-full" : "flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 w-full sm:w-auto"}`}>
        <div className={`flex items-center gap-2 bg-[#FAF8F5] ${gridView ? "w-full" : "w-full sm:w-[224px]"} h-[36px] p-[8px] rounded-[4px] border-[0.5px] border-[#D6D2C7] focus-within:border-gray-400 shrink-0`}>
          <label className="text-gray-700 text-sm shrink-0 flex items-center justify-center">
            <UserIcon />
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-transparent outline-none text-gray-800 placeholder-gray-500 font-open-sans font-normal text-[14px] leading-[20px] tracking-normal w-full"
          />
        </div>
        {errors.name && (
          <span className="text-red-500 font-open-sans font-normal text-[14px] leading-[20px] tracking-normal whitespace-nowrap">
            {errors.name}
          </span>
        )}
      </div>

      {/* 2. Phone Field with Country Code */}
      <div className={`flex ${gridView ? "flex-col gap-1 w-full" : "flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 w-full sm:w-auto"}`}>
        <div className={`flex items-center gap-1.5 bg-[#FAF8F5] ${gridView ? "w-full" : "w-full sm:w-[224px]"} h-[36px] p-[8px] rounded-[4px] border-[0.5px] border-[#D6D2C7] focus-within:border-gray-400 shrink-0`}>
          <label className="text-gray-700 text-sm shrink-0 flex items-center justify-center">
            <CallIcon />
          </label>
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="bg-transparent outline-none text-gray-800 font-open-sans font-normal text-[14px] leading-[20px] cursor-pointer shrink-0 max-w-[65px]"
          >
            {countries.map((country, index) => (
              <option
                key={`${country.name}-${country.code}-${index}`}
                value={country.code}
                className="bg-white text-gray-900"
              >
                {country.code}
              </option>
            ))}
          </select>
          <input
            type="tel"
            name="phone"
            placeholder="Ph Number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-transparent outline-none text-gray-800 placeholder-gray-500 font-open-sans font-normal text-[14px] leading-[20px] tracking-normal w-full"
          />
        </div>
        {errors.phone && (
          <span className="text-red-500 font-open-sans font-normal text-[14px] leading-[20px] tracking-normal whitespace-nowrap">
            {errors.phone}
          </span>
        )}
      </div>

      {/* 3. Email Field */}
      <div className={`flex ${gridView ? "flex-col gap-1 w-full" : "flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 w-full sm:w-auto"}`}>
        <div className={`flex items-center gap-2 bg-[#FAF8F5] ${gridView ? "w-full" : "w-full sm:w-[224px]"} h-[36px] p-[8px] rounded-[4px] border-[0.5px] border-[#D6D2C7] focus-within:border-gray-400 shrink-0`}>
          <label className="text-gray-700 text-sm shrink-0 flex items-center justify-center">
            <MailIcon />
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent outline-none text-gray-800 placeholder-gray-500 font-open-sans font-normal text-[14px] leading-[20px] tracking-normal w-full"
          />
        </div>
        {errors.email && (
          <span className="text-red-500 font-open-sans font-normal text-[14px] leading-[20px] tracking-normal whitespace-nowrap">
            {errors.email}
          </span>
        )}
      </div>

      {/* 4. Check-in & out Date Field */}
      <div className={`flex ${gridView ? "flex-col gap-1 w-full" : "flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 w-full sm:w-auto"}`}>
        <div className={`flex items-center gap-2 bg-[#FAF8F5] ${gridView ? "w-full" : "w-full sm:w-[224px]"} h-[36px] p-[8px] rounded-[4px] border-[0.5px] border-[#D6D2C7] focus-within:border-gray-400 shrink-0`}>
          <label className="text-gray-700 text-sm shrink-0 flex items-center justify-center">
            <CalendarIcon />
          </label>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={handleDateChange}
            placeholderText="Check-in & out"
            className="bg-transparent outline-none text-gray-800 placeholder-gray-500 font-open-sans font-normal text-[14px] leading-[20px] tracking-normal w-full"
            minDate={new Date()}
            dateFormat="dd MMM yyyy"
          />
        </div>
        {errors.checkIn && (
          <span className="text-red-500 font-open-sans font-normal text-[14px] leading-[20px] tracking-normal whitespace-nowrap">
            {errors.checkIn}
          </span>
        )}
      </div>

      {/* 5. Submit Button */}
      <div className={`flex ${gridView ? "w-full mt-2" : "w-full sm:w-auto sm:items-center"}`}>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-[#B58A4A] hover:bg-[#9e773c] text-white ${gridView ? "w-full" : "w-full sm:w-[180px]"} h-[36px] px-[16px] py-[8px] rounded-[4px] font-open-sans font-normal text-[14px] leading-[20px] tracking-normal flex items-center justify-center text-center gap-[8px] transition-all shadow-md cursor-pointer active:scale-95 disabled:opacity-75 whitespace-nowrap shrink-0`}
        >
          <BookingCalenderIcon /> {isSubmitting ? "Submitting..." : "Book Now"}
        </button>
      </div>
    </form>
  );
};

export default Form1;
