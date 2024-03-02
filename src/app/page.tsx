import { getToolList } from "@/api/tools.api";
import ListSection from "@/components/ListSection";

export default async function Home() {
  const toolListResponse = await getToolList();

  if (!toolListResponse.ok) throw new Error(toolListResponse.message);

  const { data: toolList, pagination } = toolListResponse;

  return (
    <>
      <section className="">
        <ListSection
          pagination={{ ...pagination }}
          tools={toolList.map((tool) => ({ ...tool, image: tool.image.path }))}
        />
      </section>
    </>
  );
}
