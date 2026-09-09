"use client";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { contact } from "@/utils/constent";

interface BookingFormData {
  name: string;
  countryCode: string;
  phone: string;
  email: string;
  checkIn?: string;
  checkOut?: string;
  message?: string;
  city?: string;
  [key: string]: string | undefined;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  checkIn?: string;
  checkOut?: string;
  city?: string;
  [key: string]: string | undefined;
}

interface UseBookingFormProps {
  includeCheckIn?: boolean;
  includeCheckOut?: boolean;
  includeMessage?: boolean;
  formHid?: string;
  onSubmitSuccess?: () => void;
}

const initialFormData: BookingFormData = {
  name: "",
  countryCode: "+91",
  phone: "",
  email: "",
  checkIn: "",
  checkOut: "",
  message: "",
  city: "",
};

const useBookingForm = ({
  includeCheckIn,
  includeCheckOut,
  includeMessage,
  formHid,
  onSubmitSuccess,
}: UseBookingFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  const debouncedEmail = useDebounce(formData.email, 500);
  const debouncedPhone = useDebounce(formData.phone, 500);
  const debouncedName = useDebounce(formData.name, 500);

  const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const validatePhone = (phone: string): boolean => {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone.trim());
  };

  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name cannot be empty";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Phone must be 10-15 digits";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (includeCheckIn && !formData.checkIn) {
      newErrors.checkIn = "Check-in date is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, [formData, includeCheckIn]);

  // handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // Clear error for this field when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const setFieldValue = (field: keyof BookingFormData, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));

    if (errors[field as keyof FormErrors]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: undefined,
      }));
    }
  };

  // reset form
  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  // handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const descriptionPart = [];
      if (includeCheckIn) {
        descriptionPart.push(`Check-in: ${formData.checkIn}`);
      }
      if (includeCheckOut) {
        descriptionPart.push(`Check-out: ${formData.checkOut}`);
      }
      if (includeMessage) {
        descriptionPart.push(`Message: ${formData.message}`);
      }
      if (formData.city) {
        descriptionPart.push(`City: ${formData.city}`);
      }
      const description = descriptionPart.join("\n");

      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: contact.formDomain,
          Name: formData.name,
          email: formData.email,
          Contact: formData.countryCode + formData.phone,
          check_in: formData.checkIn,
          check_out: formData.checkOut,
          Description: description,
          created_from: "webform",
          source_url: window.location.href,
          hId: contact.formHid ? contact.formHid : formHid,
        },
      );

      if (data.Status) {
        setSubmitSuccess(true);
        resetForm();
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
        window.open("/thank-you/", "_blank");
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (e) {
      console.error(e);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    errors,
    isSubmitting,
    setIsSubmitting,
    submitSuccess,
    setSubmitSuccess,
    includeCheckIn,
    includeCheckOut,
    includeMessage,
    onSubmitSuccess,
    handleChange,
    setFieldValue,
    handleSubmit,
  };
};

export default useBookingForm;
