"use client";
import React, { useState } from "react";
import { SettingCard } from "./SettingCard";
import IconButton from "@/components/IconButton";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import type { Category, Brand } from "@/types/setting.type";
import { isArrayValid, removeLastItem } from "@/utils/array.util";


type CategoriesSectionProps = { categories?: Category[] };

export function CategorySection({ categories }: CategoriesSectionProps) {
  const [newCategories, setNewCategories] = useState<(Category | Brand)[]>([]);

  return (
    <div>
      <h2 className="text-2xl">دسته بندی ها</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-5 gap-5">
        {newCategories.map((ctg, i) => (
          <SettingCard
            onSave={deleteBrandHandler}
            cardType="دسته بندی"
            data={ctg}
            key={i}
          ></SettingCard>
        ))}
        {isArrayValid(categories) &&
          categories &&
          categories.map((ctg, i) => (
            <SettingCard cardType="دسته بندی" data={ctg} key={i}></SettingCard>
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
    setNewCategories((prevCategories) => [...prevCategories, emptyCategory]);
  }

  function deleteBrandHandler() {
    const newNewCategories = removeLastItem(newCategories);
    setNewCategories(newNewCategories);
  }
}
