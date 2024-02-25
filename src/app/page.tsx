import { getToolList } from "@/api/tools.api";
import ListSection from "@/components/ListSection";
import { DEFAULT_PAGE } from "@/constants/criteria.constants";
import { validateCriteria } from "@/utils/criteria.util";
import { getZodPersianErrorMessage } from "@/utils/error.util";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  console.log({ searchParams });
  const { page } = searchParams;
  const validateCriteriaResult = validateCriteria({ page });

  if (!validateCriteriaResult.success)
    throw new Error(getZodPersianErrorMessage(validateCriteriaResult.error));

  const toolListResponse = await getToolList(validateCriteriaResult.data);

  if (!toolListResponse.ok) throw new Error(toolListResponse.message);

  const { data: toolList, pagination } = toolListResponse;

  return (
    <>
      <section className="">
        <ListSection
          tools={toolList.map((tool) => ({ ...tool, image: tool.image.path }))}
        />
      </section>
    </>
  );
}
