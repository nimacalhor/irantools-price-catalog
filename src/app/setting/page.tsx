import IconButton from "@/components/IconButton";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { BrandSection } from "../../components/BrandSection";
import { SettingCard } from "../../components/SettingCard";
import { CategorySection } from "@/components/CategoriesSection";
import { Separator } from "@/ui/separator.ui";
import { getBrandList } from "@/fetchers/brand.fetcher";
import { getCategoryList } from "@/fetchers/category.fetcher";

type pageProps = {};

async function page({}: pageProps) {
  const [brandListResult, categoryListResult] = await Promise.all([
    getBrandList(),
    getCategoryList(),
  ]);

  const { brands, ok: brandOk, message: brandMessage } = brandListResult;
  const {
    categories,
    ok: categoryOk,
    message: categoryMessage,
  } = categoryListResult;

  const ok = brandOk && categoryOk;
  const message = (brandMessage || "") + "  " + (categoryMessage || "");

  if (!ok) throw new Error(message);

  return (
    <>
      <main className="max-w-screen-xl mx-auto mt-10">
        <h2 className="text-4xl mb-10">تنظیمات</h2>
        <div className="">
          <BrandSection brands={brands}></BrandSection>
          <Separator className="my-10" />
          <CategorySection categories={categories}></CategorySection>
        </div>
      </main>
    </>
  );
}

export default page;
