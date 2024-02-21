"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { getFSStyle } from "@/utils/style.util";
import { Tool } from "@/types/tools.type";

export function ToolCardOptionalInfo({
  parentW,
  detail,
}: {
  parentW?: number | null;
  detail: Tool["detail"];
}) {
  if (!parentW) return null;

  const fontW = parentW / 30 + "px";
  const fontH = parentW / 30 + "px";
  const amountFS = parentW / 60 + "px";

  const { amountInBulk, amountInSet, length, material, weight } = detail;

  return (
    <div className="col-span-3">
      <div className="row-span-8 flex justify-end items-start flex-wrap gap-2 pt-2 px-2">
        <span className="flex-col gap-1 overflow-hidden w-1/4 flex justify-between items-center">
          <FontAwesomeIcon
            icon={faTools}
            style={{ width: fontW, height: fontH }}
            className="text-foreground/70"
          />
          <span style={getFSStyle(amountFS)} className="">
            1231241
          </span>
        </span>
        <span className="flex-col gap-1 overflow-hidden w-1/4 flex justify-between items-center">
          <FontAwesomeIcon
            icon={faTools}
            style={{ width: fontW, height: fontH }}
            className="text-foreground/70"
          />
          <span style={getFSStyle(amountFS)} className="">
            1231241
          </span>
        </span>
        <span className="flex-col gap-1 overflow-hidden w-1/4 flex justify-between items-center">
          <FontAwesomeIcon
            icon={faTools}
            style={{ width: fontW, height: fontH }}
            className="text-foreground/70"
          />
          <span style={getFSStyle(amountFS)} className="">
            1231241
          </span>
        </span>
        <span className="flex-col gap-1 overflow-hidden w-1/4 flex justify-between items-center">
          <FontAwesomeIcon
            icon={faTools}
            style={{ width: fontW, height: fontH }}
            className="text-foreground/70"
          />
          <span style={getFSStyle(amountFS)} className="">
            1231241
          </span>
        </span>
        <span className="flex-col gap-1 overflow-hidden w-1/4 flex justify-between items-center">
          <FontAwesomeIcon
            icon={faTools}
            style={{ width: fontW, height: fontH }}
            className="text-foreground/70"
          />
          <span style={getFSStyle(amountFS)} className="">
            1231241
          </span>
        </span>
      </div>
    </div>
  );
}
