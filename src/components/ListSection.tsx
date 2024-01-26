"use client";
import PrintComponent from "@/components/PrintComponent";
import { useRef, useState } from "react";
import MainButtons from "../components/MainButtons";

type ListSectionProps = {};

function ListSection({}: ListSectionProps) {

  return (
    <>
      <MainButtons></MainButtons>
      <PrintComponent />
    </>
  );


}

export default ListSection;
