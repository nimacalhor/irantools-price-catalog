import { getBrandList } from "@/api/brand.api";
import { getCategoryList } from "@/api/category.api";
import { getToolDetail } from "@/api/tools.api";
import A4 from "@/components/A4";
import ToolForm from "@/components/ToolForm";
import { ScrollArea } from "@/ui/scroll-area.ui";
import { pickFirstPresent } from "@/utils/array.util";

type pageProps = {} & Record<string, any>;

async function page({ params }: pageProps) {
  const { productId } = params;
  const [brandListResult, categoryListResult, toolDetailResult] =
    await Promise.all([
      getBrandList(),
      getCategoryList(),
      getToolDetail(productId),
    ]);

  const { ok: brandOk } = brandListResult;
  const { ok: categoryOk } = categoryListResult;
  const { ok: toolDetailOk } = toolDetailResult;

  if (!brandOk || !categoryOk || !toolDetailOk)
    throw new Error(
      pickFirstPresent([
        (brandListResult as any).message || "",
        (categoryListResult as any).message || "",
        (toolDetailOk as any).message || "",
      ])
    );

  const brands = brandListResult.data;
  const categories = categoryListResult.data;
  const toolDetail = {
    ...toolDetailResult.data,
    image: toolDetailResult.data.image.path,
    id: toolDetailResult.data._id,
  };

  const { brand, category, __v, _id, image, ...formDefaultValues } = toolDetail;

  return (
    <section className="xl:grid grid-cols-12 gap-5 relative">
      <ToolForm
        brands={brands}
        categories={categories}
        className="xl:col-span-7 pt-10"
        isEdit={true}
        values={{
          ...formDefaultValues,
          brand: brand?._id || "",
          category: category?._id || "",
        }}
      />
      <section className="xl:col-span-5 h-screen xl:sticky top-0 bottom-0 right-0 left-0 relative flex justify-center items-center">
        <div className="p-4 absolute top-8 bottom-8 right-0 left-0 bg-gradient-to-bl rounded-sm border border-border">
          <ScrollArea className="h-full">
            <A4
              toolDetail={toolDetail}
              readFromState={true}
              className="w-full mx-auto"
            />
          </ScrollArea>
        </div>
      </section>
    </section>
  );
}

export default page;
