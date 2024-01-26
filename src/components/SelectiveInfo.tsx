"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form.ui";
import { FormType } from "./ToolForm";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select.ui";
import IconButton from "./IconButton";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

export function SelectiveInfo({ form }: { form: FormType }) {
  return (
    <div className="grid grid-cols-3 gap-5 mt-5">
      <div>
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal text-lg">برند</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="انتخاب برند محصول" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <IconButton  type="button"className="mt-1" variant={"ghost"} size={"sm"} icon={faAdd}>
          افزودن برند
        </IconButton>
      </div>
      <div>
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal text-lg">دسته بندی</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="انتخاب دسته بندی محصول" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <IconButton type="button" className="mt-1" variant={"ghost"} size={"sm"} icon={faAdd}>
          افزودن دسته بندی
        </IconButton>
      </div>
    </div>
  );
}
