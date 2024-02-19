"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form.ui";
import { Input } from "@/ui/input.ui";
import { FormType } from "./ToolForm";
import { ImageDropZone } from "./ImageDropZone";
import { ComponentProps } from "react";
import { SelectiveInfo } from "./SelectiveInfo";

export function MainInfo({
  form,
  brands,
  categories,
}: {
  form: FormType;
} & ComponentProps<typeof SelectiveInfo>) {
  return (
    <div>
      <h2 className="text-2xl mb-5">اطلاعات اصلی</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
        <div className="md:grid space-y-5 md:space-y-0 md:grid-cols-2 gap-5 lg:col-span-2 md:col-span-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="font-normal text-lg">نام ابزار</FormLabel>
                <FormControl>
                  <Input placeholder={"نام ابزار"} {...field} />
                </FormControl>
                <FormDescription>
                  نام اصلی ابزار که در بالای کارت نمایش داده میشود.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel className="font-normal text-lg">کد محصول</FormLabel>
                <FormControl>
                  <Input placeholder={"کد محصول"} {...field} />
                </FormControl>
                <FormDescription>شناسه اصلی و یکتا محصولات.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel className="font-normal text-lg">قیمت</FormLabel>
                <FormControl>
                  <Input type="number" placeholder={"قیمت محصول"} {...field} />
                </FormControl>
                <FormDescription>
                  <span>قیمت محصول به تومان. </span>
                  <span className="text-secondary-foreground">
                    در صورت ناموجودی خالی بگذاری
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <ImageDropZone />
      </div>
      <SelectiveInfo
        brands={brands}
        categories={categories}
        form={form}
      ></SelectiveInfo>
    </div>
  );
}
