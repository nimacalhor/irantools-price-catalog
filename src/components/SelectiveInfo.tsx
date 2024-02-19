import { Brand, Category } from "@/types/setting.type";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form.ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select.ui";
import { isArrayValid } from "@/utils/array.util";
import { faAdd, faGear } from "@fortawesome/free-solid-svg-icons";
import IconButton from "./IconButton";
import { FormType } from "./ToolForm";
import Link from "next/link";

export function SelectiveInfo({
  form,
  brands,
  categories,
}: {
  form: FormType;
  brands?: Brand[];
  categories?: Category[];
}) {
  return (
    <div className="grid md:grid-cols-3 gap-5 mt-5">
      <div>
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal text-lg">برند</FormLabel>
              {isArrayValid(brands) && (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب برند محصول" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {brands?.map(({ title, _id }, i) => (
                      <SelectItem key={i} value={_id || ""}>
                        {title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div>
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal text-lg">دسته بندی</FormLabel>
              {isArrayValid(categories) && categories && (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب دسته بندی محصول" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map(({ _id, title }, i) => (
                      <SelectItem key={i} value={_id || ""}>
                        {title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="h-full flex justify-start items-end">
        <Link href={"/setting"} passHref>
          <IconButton variant={"secondary"} icon={faGear}>افزودن برند یا دسته بندی</IconButton>
        </Link>
        <div>

        </div>
      </div>
    </div>
  );
}
