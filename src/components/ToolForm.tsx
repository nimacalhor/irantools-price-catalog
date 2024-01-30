"use client";
import { toolZodSchema } from "@/schemas/tool.schema";
import { Form } from "@/ui/form.ui";
import { Separator } from "@/ui/separator.ui";
import { cn } from "@/utils/chadcn.util";
import { faEye, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import * as z from "zod";
import IconButton from "./IconButton";
import TextEditor from "./TextEditor";
import { MainInfo } from "./MainInfo";
import { OptionalInfo } from "./OptionalInfo";
import { ComponentProps, useState } from "react";
import { Brand, Category } from "@/types/setting.type";
import { CreateToolStore, actions } from "@/store/createTool.store";
import { useDispatch } from "react-redux";

export type FormType = UseFormReturn<
  {
    code: string;
    name: string;
    brand: string;
    category: string;
    detail: {
      weight?: string | undefined;
      amountInSet?: string | undefined;
      amountInBulk?: string | undefined;
      length?: string | undefined;
      material?: string | undefined;
    };
    description: string;
    price?: string | undefined;
  },
  any,
  undefined
>;
type ToolFormProps = {
  className?: string;
  brands?: Brand[];
  categories?: Category[];
};

function ToolForm({ className, brands, categories }: ToolFormProps) {
  const [image, setImage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof toolZodSchema>>({
    resolver: zodResolver(toolZodSchema),
    defaultValues: {},
    mode: "onSubmit",
  });

  const dispatch = useDispatch();

  return (
    <>
      <section className={cn("", className)}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mb-10"
          >
            <MainInfo
              onImageDelete={imageDeleteHandler}
              image={image}
              onImageAdd={imageAddHandler}
              form={form}
              brands={brands}
              categories={categories}
            />
            <Separator />
            <TextEditor />
            <Separator className="mt-10" />
            <OptionalInfo form={form} />
            <div className="flex justify-end gap-2">
              <IconButton
                size={"lg"}
                icon={faEye}
                type="button"
                variant={"secondary"}
                onClick={previewClickHandler}
              >
                اعمال تغییرات
              </IconButton>
              <IconButton icon={faFloppyDisk} size={"lg"} type="submit">
                ذخیره
              </IconButton>
            </div>
          </form>
        </Form>
      </section>
    </>
  );

  function imageAddHandler(result: string | null) {
    console.log({ result });
    setImage(result);
  }

  function imageDeleteHandler(e: any) {
    e.preventDefault();
    setImage(null);
  }

  function onSubmit(values: z.infer<typeof toolZodSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  function previewClickHandler() {
    const { name, brand, category, code, description, detail, price } =
      form.getValues();
      
    const toolState: CreateToolStore["tool"] = {
      name,
      code,
      brand,
      price,
      detail,
      category,
      description,
      available: !!price,
      image: image || undefined,
    };

    dispatch(actions.setTool(toolState));
  }
}

export default ToolForm;
