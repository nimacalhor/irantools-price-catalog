import { getBrandList } from "@/api/brand.api";
import { getCategoryList } from "@/api/category.api";
import A4 from "@/components/A4";
import ToolForm from "@/components/ToolForm";
import { initialState as createToolInitialState } from "@/store/createTool.store";
import { ScrollArea } from "@/ui/scroll-area.ui";

type pageProps = {};

async function page({}: pageProps) {
  const [brandListResult, categoryListResult] = await Promise.all([
    getBrandList(),
    getCategoryList(),
  ]);

  const { ok: brandOk } = brandListResult;
  const { ok: categoryOk } = categoryListResult;

  if (!brandOk || !categoryOk)
    throw new Error(
      `${(brandListResult as any).message || ""} , ${
        (categoryListResult as any).message || ""
      }`
    );

  const brands = brandListResult.data;
  const categories = categoryListResult.data;

  return (
    <>
      <section className="xl:grid grid-cols-12 gap-5 relative">
        <ToolForm
          brands={brands}
          categories={categories}
          className="xl:col-span-7 pt-10"
        />
        <section className="xl:col-span-5 h-screen xl:sticky top-0 bottom-0 right-0 left-0 relative flex justify-center items-center">
          <div className="p-4 absolute top-8 bottom-8 right-0 left-0 bg-gradient-to-bl rounded-sm border border-border">
            <ScrollArea className="h-full">
              <A4 readFromState={true} className="w-full mx-auto" />
            </ScrollArea>
          </div>
        </section>
      </section>
    </>
  );
}

export default page;
