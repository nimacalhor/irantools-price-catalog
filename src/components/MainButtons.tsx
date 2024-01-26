"use client";
import IconButton from "@/components/IconButton";
import { RootState } from "@/store";
import { faFilter, faPrint } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import FilterDialog from "./FilterDialog";

type MainButtonsProps = {};

function MainButtons({}: MainButtonsProps) {
  const { printComponentRef } = useSelector((state: RootState) => state.print);

  return (
    <>
      <section className="flex justify-center items-center gap-3 mt-7 mb-10 flex-wrap">
        <FilterDialog>
          <IconButton
            icon={faFilter}
            size={"lg"}
            className=""
            variant={"secondary"}
          >
            فیلتر محصولات
          </IconButton>
        </FilterDialog>
        <ReactToPrint
          trigger={() => (
            <IconButton
              icon={faPrint}
              size={"lg"}
              className=""
              variant={"default"}
            >
              پرینت
            </IconButton>
          )}
          content={() => printComponentRef?.current}
        />
      </section>
    </>
  );
}

export default MainButtons;
