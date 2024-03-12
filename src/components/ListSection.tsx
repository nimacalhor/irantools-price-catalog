"use client";
import PrintComponent from "@/components/PrintComponent";
import { ComponentProps, useRef, useState } from "react";
import MainButtons from "../components/MainButtons";

type ListSectionProps = {
  groupedTools?: ComponentProps<typeof PrintComponent>["groupedTools"];
  pagination?: ComponentProps<typeof MainButtons>["pagination"];
  filterProps?: ComponentProps<typeof MainButtons>["dialogFormProps"];
};

function ListSection({ groupedTools, pagination, filterProps }: ListSectionProps) {
  return (
    <>
      <MainButtons
        dialogFormProps={filterProps}
        pagination={pagination}
      ></MainButtons>
      <PrintComponent groupedTools={groupedTools} />
    </>
  );
}

export default ListSection;
