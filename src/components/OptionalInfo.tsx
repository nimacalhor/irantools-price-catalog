"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/ui/form.ui";
import { Input } from "@/ui/input.ui";
import { FormType } from "./ToolForm";

export function OptionalInfo({ form }: { form: FormType; }) {
  return (
    <div>
      <h2 className="text-2xl mb-5">اطلاعات اختیاری</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-5">
        <FormField
          control={form.control}
          name="detail.weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-normal">وزن</FormLabel>
              <FormControl>
                <Input type="number" placeholder={"وزن محصول"} {...field} />
              </FormControl>
              <FormDescription>وزن محصول به گرم.</FormDescription>
              <FormMessage />
            </FormItem>
          )} />
        <FormField
          control={form.control}
          name="detail.length"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-normal">طول</FormLabel>
              <FormControl>
                <Input type="number" placeholder={"طول محصول"} {...field} />
              </FormControl>
              <FormDescription>طول محصول به میلی متر.</FormDescription>
              <FormMessage />
            </FormItem>
          )} />
        <FormField
          control={form.control}
          name="detail.material"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-normal">جنس</FormLabel>
              <FormControl>
                <Input type="text" placeholder={"جنس محصول"} {...field} />
              </FormControl>
              <FormDescription>جنس سازنده محصول</FormDescription>
              <FormMessage />
            </FormItem>
          )} />
        <FormField
          control={form.control}
          name="detail.amountInSet"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-normal">تعداد در جعبه</FormLabel>
              <FormControl>
                <Input type="number" placeholder={"تعداد در جعبه"} {...field} />
              </FormControl>
              <FormDescription>تعداد ابزار در جعبه های فروشی</FormDescription>
              <FormMessage />
            </FormItem>
          )} />
        <FormField
          control={form.control}
          name="detail.amountInBulk"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-normal">تعداد در کارتن</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder={"تعداد در کارتن"}
                  {...field} />
              </FormControl>
              <FormDescription>تعداد جعبه در کارتن های ارسالی.</FormDescription>
              <FormMessage />
            </FormItem>
          )} />
      </div>
    </div>
  );
}
