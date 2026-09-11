"use client";

import { createContext, useContext, useState } from "react";

interface OpenGalleryProps {
  images: string[];
  index?: number;
}

interface WebContextType {
  isOpenFormPopUp: boolean;
  setIsOpenFormPopUp: (open: boolean) => void;

  openImageModal: boolean;
  setOpenImageModal: (open: boolean) => void;

  passImagesArray: string[];
  setPassImagesArray: (images: string[]) => void;

  imageCurrentIndex: number;
  setImageCurrentIndex: (index: number) => void;

  openGallery: ({ images, index }: OpenGalleryProps) => void;
  closeGallery: () => void;
}

const WebContext = createContext<WebContextType>({
  isOpenFormPopUp: false,
  setIsOpenFormPopUp: () => {},

  openImageModal: false,
  setOpenImageModal: () => {},

  passImagesArray: [],
  setPassImagesArray: () => {},

  imageCurrentIndex: 0,
  setImageCurrentIndex: () => {},

  openGallery: () => {},
  closeGallery: () => {},
});

interface WebProviderProps {
  children: React.ReactNode;
}

export const WebProvider = ({ children }: WebProviderProps) => {
  const [isOpenFormPopUp, setIsOpenFormPopUp] = useState(false);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [passImagesArray, setPassImagesArray] = useState<string[]>([]);
  const [imageCurrentIndex, setImageCurrentIndex] = useState(0);

  const openGallery = ({ images, index = 0 }: OpenGalleryProps) => {
    setPassImagesArray(images);
    setImageCurrentIndex(index);
    setOpenImageModal(true);
  };

  const closeGallery = () => {
    setOpenImageModal(false);
    setPassImagesArray([]);
    setImageCurrentIndex(0);
  };

  return (
    <WebContext.Provider
      value={{
        isOpenFormPopUp,
        setIsOpenFormPopUp,
        openImageModal,
        setOpenImageModal,
        passImagesArray,
        setPassImagesArray,
        imageCurrentIndex,
        setImageCurrentIndex,
        openGallery,
        closeGallery,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};

export const useWebContext = () => {
  const context = useContext(WebContext);

  if (context === undefined) {
    throw new Error("useWebContext must be used within a WebProvider");
  }

  return context;
};
