"use client";
import React, { useState } from "react";
import { SettingCard } from "./SettingCard";
import IconButton from "@/components/IconButton";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { Brand, Category } from "@/types/setting.type";
import { isArrayValid, removeLastItem } from "@/utils/array.util";
import { cn } from "@/utils/chadcn.util";

export function BrandSection({ brands }: { brands?: Brand[] }) {
  const [newBrand, setNewBrand] = useState<(Brand | Category)[]>([]);
  const noBrand = !isArrayValid(newBrand, true) && !isArrayValid(brands, true);

  return (
    <div>
      <h2 className="text-2xl">برند ها</h2>
      <div className={cn("sm:grid-cols-3 mt-5 gap-5", noBrand ? "" : "grid")}>
        {noBrand && (
          <div className="bg-secondary rounded-md text-xl h-52 flex justify-center items-center ">
            <p>هنوز هیچ برندی ثبت نشده است 😟</p>
          </div>
        )}
        {newBrand.map((bran, i) => (
          <SettingCard
            onSave={deleteBrandHandler}
            data={bran}
            key={i}
          ></SettingCard>
        ))}

        {isArrayValid(brands) &&
          brands &&
          brands.map((bran, i) => (
            <SettingCard data={bran} key={i}></SettingCard>
          ))}
      </div>
      <div className="flex justify-center items-center h-32">
        <IconButton
          onClick={addBrandHandler}
          size={"lg"}
          variant={"secondary"}
          icon={faAdd}
        >
          افزودن برند
        </IconButton>
      </div>
    </div>
  );

  function addBrandHandler() {
    const emptyBrand: Brand | Category = { isNew: true, title: "" };
    setNewBrand((prevBrands) => [...prevBrands, emptyBrand]);
  }

  function deleteBrandHandler() {
    const newNewBrands = removeLastItem(newBrand);
    setNewBrand(newNewBrands);
  }
}
