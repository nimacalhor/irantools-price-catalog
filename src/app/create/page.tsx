import A4 from "@/components/A4";
import ToolForm from "@/components/ToolForm";
import { ScrollArea } from "@/ui/scroll-area.ui";

type pageProps = {};

function page({}: pageProps) {
  return (
    <>
      <section className="xl:grid grid-cols-12 gap-5 relative">
        <ToolForm className="xl:col-span-7 pt-10" />
        <section className="xl:col-span-5 h-screen xl:sticky top-0 bottom-0 right-0 left-0 relative flex justify-center items-center">
          <div className="p-4 absolute top-8 bottom-8 right-0 left-0 bg-gradient-to-bl rounded-sm border border-border">
            <ScrollArea className="h-full">
              <A4 className="w-full mx-auto" />
            </ScrollArea>
          </div>
        </section>
      </section>
    </>
  );
}

export default page;
