import IconButton from "@/components/IconButton";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { BrandSection } from "../../components/BrandSection";
import { SettingCard } from "../../components/SettingCard";
import { CategorySection } from "@/components/CategoriesSection";
import { Separator } from "@/ui/separator.ui";
import { getBrandList } from "@/api/brand.api";
import { getCategoryList } from "@/api/category.api";

type pageProps = {};

async function page({}: pageProps) {
  const [brandListResult, categoryListResult] = await Promise.all([
    getBrandList(),
    getCategoryList(),
  ]);

  // INFO : after fetching
  debugger;
  //

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

  // INFO : after fetch validation
  debugger;
  //

  return (
    <>
      <main className="max-w-screen-xl mx-auto mt-10">
        <h2 className="text-4xl mb-10">تنظیمات</h2>
        <div className="">
          <BrandSection
            brands={brands.map((brn) => ({
              title: brn.title,
              image: brn.image.path,
              id: brn._id,
            }))}
          ></BrandSection>
          <Separator className="my-10" />
          <CategorySection
            categories={categories.map((ctg) => ({
              title: ctg.title,
              image: ctg.image.path,
              id: ctg._id,
            }))}
          ></CategorySection>
        </div>
      </main>
    </>
  );
}

export default page;
