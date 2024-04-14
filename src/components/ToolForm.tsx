"use client";
import { createToolAction } from "@/actions/tools.action";
import { useToast } from "@/hooks/useToast.hook";
import { toolZodSchema } from "@/schemas/tool.schema";
import { RootState } from "@/store";
import { CreateToolStore, actions } from "@/store/createTool.store";
import { Form } from "@/ui/form.ui";
import { Separator } from "@/ui/separator.ui";
import { cn } from "@/utils/chadcn.util";
import { uniqueDateStr, whitespaceTo_ } from "@/utils/string.util";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { UseFormReturn, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as z from "zod";
import { FormButtons } from "./FormButtons";
import { MainInfo } from "./MainInfo";
import { OptionalInfo } from "./OptionalInfo";
import TextEditor from "./TextEditor";
import { CreateToolRequestBody } from "@/types/tools.type";
import { OmitFields } from "@/types/common.type";
import { useRouter } from "next/navigation";

export type FormInputs = {
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
};

export type FormType = UseFormReturn<FormInputs, any, undefined>;
type ToolFormProps = {
  className?: string;
  brands?: { title: string; _id: string }[];
  categories?: { title: string; _id: string }[];
  values?: FormInputs;
  isEdit?: boolean;
};

function ToolForm({
  className,
  brands,
  categories,
  values,
  isEdit,
}: ToolFormProps) {
  //
  const formDefaultValues = {
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
  };

  values = values ? { ...formDefaultValues, ...values } : formDefaultValues;

  const form = useForm<z.infer<typeof toolZodSchema>>({
    resolver: zodResolver(toolZodSchema),
    defaultValues: formDefaultValues,
    values,
    mode: "onSubmit",
  });

  const { toast } = useToast();

  const { tool, imageFile } = useSelector(
    (state: RootState) => state.createTool
  );

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
              onImageDrop={previewHandler}
              form={form}
              brands={brands}
              categories={categories}
            />
            <Separator />
            <TextEditor onBlur={previewHandler} />
            <Separator className="mt-10" />
            <OptionalInfo form={form} />
            <FormButtons
              onPreviewClick={previewHandler}
              isEdit={isEdit}
            ></FormButtons>
          </form>
        </Form>
      </section>
    </>
  );
  async function onSubmit(values: z.infer<typeof toolZodSchema>) {
    if (!imageFile) return;

    const formData = new FormData();

    formData.set("image", imageFile);
    dispatch(actions.setPending(true));

    // const size =

    const createToolData: CreateToolRequestBody = {
      available: !values.price,
      brand: values.brand,
      category: values.category,
      detail: values.detail,
      price: values.price,
      code: values.code,
      name: values.name,

      description: JSON.stringify(tool.description) || "",
      size: tool.size || 1,
    };

    const createToolResponse = await createToolAction(createToolData, formData);
    if (!createToolResponse.ok) {
      toast({
        title: `محصول با موفقیت افزوده نشد ❌`,
        variant: "destructive",
        description: createToolResponse.message,
      });
    } else {
      toast({
        title: `محصول با موفقیت افزوده شد ✅`,
        // (open) {
        //   if (open) return;

        //   router.push("/");
        // },
      });
      form.reset();
      dispatch(actions.setTool());
    }
    dispatch(actions.setPending(false));
  }

  function previewHandler({
    description,
    image,
  }: {
    description?: CreateToolStore["tool"]["description"];
    image?: CreateToolStore["tool"]["image"];
  }) {
    const { name, brand, category, code, detail, price } = { ...form.watch() };
    //  temp log
    console.log("__________ detail in ToolForm", { detail });
    const newDescription = description ?? tool.description;
    const newImage = image ?? tool.image;
    const toolState: CreateToolStore["tool"] = {
      name,
      code,
      brand,
      price,
      detail,
      category,
      available: !!price,
      size: tool.size,
      image: newImage,
      description: newDescription,
    };

    dispatch(actions.setTool(toolState));
  }
}

export default ToolForm;
