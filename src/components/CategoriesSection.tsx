"use client";
import React, { useState } from "react";
import { SettingCard } from "./SettingCard";
import IconButton from "@/components/IconButton";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { Category, Brand } from "@/types/setting.type";

const categories: Category[] = [{}, {}, {}, {}];

export function CategorySection() {
  const [newCategory, setNewCategory] = useState<(Category | Brand)[]>([]);

  return (
    <div>
      <h2 className="text-2xl">دسته بندی ها</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-5 gap-5">
        {newCategory.map((bran, i) => (
          <SettingCard cardType="دسته بندی" data={bran} key={i}></SettingCard>
        ))}
        {categories.map((bran, i) => (
          <SettingCard cardType="دسته بندی" data={bran} key={i}></SettingCard>
        ))}
      </div>
      <div className="flex justify-center items-center h-32">
        <IconButton
          onClick={addCategoryHandler}
          size={"lg"}
          variant={"secondary"}
          icon={faAdd}
        >
          افزودن دسته بندی
        </IconButton>
      </div>
    </div>
  );

  function addCategoryHandler() {
    const emptyCategory: Category | Category = { isNew: true, title: "" };
    setNewCategory((prevCategories) => [...prevCategories, emptyCategory]);
  }
}
