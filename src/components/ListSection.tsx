"use client";
import PrintComponent from "@/components/PrintComponent";
import { ComponentProps, useRef, useState } from "react";
import MainButtons from "../components/MainButtons";

type ListSectionProps = {
  tools?: ComponentProps<typeof PrintComponent>["tools"];
  pagination?: ComponentProps<typeof MainButtons>["pagination"];
  filterProps?: ComponentProps<typeof MainButtons>["dialogFormProps"];
};

function ListSection({ tools, pagination, filterProps }: ListSectionProps) {
  return (
    <>
      <MainButtons
        dialogFormProps={filterProps}
        pagination={pagination}
      ></MainButtons>
      <PrintComponent tools={tools} />
    </>
  );
}

export default ListSection;
