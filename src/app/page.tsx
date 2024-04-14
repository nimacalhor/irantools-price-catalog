import { getBrandList } from "@/api/brand.api";
import { getCategoryList } from "@/api/category.api";
import { getToolList } from "@/api/tools.api";
import ListSection from "@/components/ListSection";
import { pickFirstPresent } from "@/utils/array.util";
import { validateCriteria } from "@/utils/criteria.util";
import { getZodPersianErrorMessage } from "@/utils/error.util";
import { filterEmptyValues } from "@/utils/object.util";
import { groupItemsBySize } from "@/utils/tool.util";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  // pagination
  const { page, name, category, brand, code } = searchParams;
  const validateCriteriaResult = validateCriteria(
    filterEmptyValues({
      page,
      name,
      category,
      brand,
      code,
    })
  );

  if (!validateCriteriaResult.success)
    throw new Error(getZodPersianErrorMessage(validateCriteriaResult.error));

  // entity fetching
  const [brandListResult, categoryListResult, toolListResult] =
    await Promise.all([
      getBrandList(),
      getCategoryList(),
      getToolList(validateCriteriaResult.data),
    ]);

  // entity validation
  const { ok: brandOk } = brandListResult;
  const { ok: categoryOk } = categoryListResult;
  const { ok: toolOk } = toolListResult;

  if (!brandOk || !categoryOk || !toolOk)
    throw new Error(
      pickFirstPresent<string>([
        (brandListResult as any).message,
        (categoryListResult as any).message,
        (toolListResult as any).message,
      ])
    );

  // transforming entities
  const brands = brandListResult.data.map((brand) => ({
    _id: brand._id,
    value: brand.title,
  }));
  const categories = categoryListResult.data.map((ctg) => ({
    _id: ctg._id,
    value: ctg.title,
  }));

  const { data: toolList, pagination } = toolListResult;
  const toolListWithImage = toolList
    .filter((tool) => tool.image && tool.image.path)
    .map((tool) => ({ ...tool, image: tool.image.path, id: tool._id }));
  const groupedTools = groupItemsBySize(toolListWithImage);

  return (
    <>
      <section className="">
        <ListSection
          filterProps={{ brands, categories }}
          pagination={{ ...pagination, baseHref: "" }}
          groupedTools={groupedTools}
        />
      </section>
    </>
  );
}
