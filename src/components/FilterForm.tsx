"use client";

import { filterSchema } from "@/schemas/filter.schema";
import { Button } from "@/ui/button.ui";
import { Input } from "@/ui/input.ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select.ui";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form.ui";
import { objectToParams } from "@/utils/string.util";
import { filterEmptyValues } from "@/utils/object.util";

type FilterFormProps = {
  brands: { _id: string; value: string }[];
  categories: { _id: string; value: string }[];
  onSubmit?: () => void;
};

function FilterForm({
  brands,
  categories,
  onSubmit: propOnSubmit,
}: FilterFormProps) {
  const form = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      brand: "",
      category: "",
      code: "",
      name: "",
    },
  });
  const router = useRouter();

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام محصول</FormLabel>
                  <FormControl>
                    <Input placeholder={"نام محصول"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>شناسه محصول</FormLabel>
                  <FormControl>
                    <Input placeholder={"شناسه محصول"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>برند محصول</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="برند محصول" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {brands.map(({ _id, value }, i) => (
                        <SelectItem key={i} value={_id}>
                          {value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>دسته بندی محصول</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="دسته بندی محصول" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map(({ _id, value }, i) => (
                        <SelectItem key={i} value={_id}>
                          {value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="h-16 flex justify-end items-center">
            <Button type="submit">ثبت</Button>
          </div>
        </form>
      </Form>
    </>
  );

  function onSubmit(values: z.infer<typeof filterSchema>) {
    const urlSearchParams = objectToParams(filterEmptyValues(values));
    const newUrl = `?${urlSearchParams}`;
    router.push(newUrl);
    if (propOnSubmit) propOnSubmit();
  }
}

export default FilterForm;

/*
{name:"some name", age: "3", job:"", lastName:""}
{name:"some name", age: "3"}
*/