"use client";
import * as z from "zod";
import { useEffect } from "react";
import { RootState } from "@/store";
import { Form } from "@/ui/form.ui";
import { MainInfo } from "./MainInfo";
import TextEditor from "./TextEditor";
import { cn } from "@/utils/chadcn.util";
import { FormButtons } from "./FormButtons";
import { Separator } from "@/ui/separator.ui";
import { OptionalInfo } from "./OptionalInfo";
import { useToast } from "@/hooks/useToast.hook";
import { actions } from "@/store/createTool.store";
import { uniqueDateStr, whitespaceTo_ } from "@/utils/string.util";
import { createToolAction } from "@/actions/tools.action";
import { toolZodSchema } from "@/schemas/tool.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Brand, Category } from "@/types/setting.type";
import { useDispatch, useSelector } from "react-redux";
import { UseFormReturn, useForm } from "react-hook-form";

export type FormType = UseFormReturn<
  {
    name: string;
    code: string;
    brand: string;
    category: string;
    price?: string | undefined;
    detail?:
      | {
          weight?: string | undefined;
          amountInSet?: string | undefined;
          amountInBulk?: string | undefined;
          length?: string | undefined;
          material?: string | undefined;
        }
      | undefined;
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
  const form = useForm<z.infer<typeof toolZodSchema>>({
    resolver: zodResolver(toolZodSchema),
    defaultValues: {
      name: "",
      brand: "",
      category: "",
      code: "",
      price: "",
      detail: {
        amountInBulk: "",
        amountInSet: "",
        length: "",
        material: "",
        weight: "",
      },
    },
    mode: "onSubmit",
  });

  const { toast } = useToast();

  const { tool, imageFile } = useSelector(
    (state: RootState) => state.createTool
  );

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(form.formState);
  }, [form.formState]);

  return (
    <>
      <section className={cn("", className)}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mb-10"
          >
            <MainInfo form={form} brands={brands} categories={categories} />
            <Separator />
            <TextEditor />
            <Separator className="mt-10" />
            <OptionalInfo form={form} />
            <FormButtons form={form}></FormButtons>
          </form>
        </Form>
      </section>
    </>
  );
  async function onSubmit(values: z.infer<typeof toolZodSchema>) {
    if (!imageFile) return;
    const brandName = brands?.find((brn) => brn._id === values.brand);
    const categoryName = categories?.find((ctg) => ctg._id === values.category);
    const fileExtension = imageFile.name.split(".").pop();

    const imageName = `${whitespaceTo_(brandName?.title || "")}_${whitespaceTo_(
      categoryName?.title || ""
    )}_${whitespaceTo_(values.name)}_${uniqueDateStr()}.${fileExtension}`;

    debugger;
    const formData = new FormData();
    formData.set(
      "toolData",
      JSON.stringify({
        ...values,
        description: JSON.stringify(tool.description),
      })
    );
    formData.set("image", imageFile);
    formData.set("imageName", imageName);
    debugger;
    dispatch(actions.setPending(true));
    const { ok, message } = await createToolAction(formData);
    if (!ok) {
      toast({
        title: `محصول با موفقیت افزوده نشد ❌`,
        variant: "destructive",
        description: message,
      });
    } else {
      toast({
        title: `محصول با موفقیت افزوده شد ✅`,
      });
      form.reset();
    }
    dispatch(actions.setPending(false));

    console.log(values);
  }
}

export default ToolForm;
