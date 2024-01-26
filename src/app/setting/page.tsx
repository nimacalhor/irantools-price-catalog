import IconButton from "@/components/IconButton";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { BrandSection } from "../../components/BrandSection";
import { SettingCard } from "../../components/SettingCard";
import { CategorySection } from "@/components/CategoriesSection";
import { Separator } from "@/ui/separator.ui";

type pageProps = {};

function page({}: pageProps) {
  return (
    <>
      <main className="max-w-screen-xl mx-auto mt-10">
        <h2 className="text-4xl mb-10">تنظیمات</h2>
        <div className="">
          <BrandSection></BrandSection>
          <Separator className="my-10"/>
          <CategorySection></CategorySection>
        </div>
      </main>
    </>
  );
}

export default page;
