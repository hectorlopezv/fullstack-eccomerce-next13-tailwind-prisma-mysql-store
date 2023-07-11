"use client";
import PreviewModal from "@/components/preview-modal";
import useIsMounted from "@/hooks/use-is-mounted";
import React from "react";

type Props = {};

export default function ModalProvider({}: Props) {
  const isMounted = useIsMounted();
  if (!isMounted) {
    return null;
  }
  return <PreviewModal />;
}
