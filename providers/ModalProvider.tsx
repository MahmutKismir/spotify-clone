"use client";


import { useEffect, useState } from "react";
import AuthModal from "@/components/AuthModal";
import UplodaModal from "@/components/UploadModal";
import SubscribeModal from "@/components/SubscribeModal";
import { ProductWidthPrice } from "@/types";

interface ModalProviderProps {
  products: ProductWidthPrice[]
}

const ModalProvider: React.FC<ModalProviderProps> = ({ products }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UplodaModal />
      <SubscribeModal products={products} />
    </>
  );
};

export default ModalProvider;
