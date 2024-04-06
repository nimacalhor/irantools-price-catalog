"use client";
import { getFSStyle } from "@/utils/style.util";
import {
  faCube,
  faCubes,
  faPuzzlePiece,
  faRulerHorizontal,
  faWeightScale
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ToolCardOptionalInfo({
  parentW,
  detail,
}: {
  parentW?: number | null;
  detail?: {
    amountInBulk?: string | number;
    amountInSet?: string | number;
    length?: string | number;
    material?: string | number;
    weight?: string | number;
  };
}) {
  if (!parentW) return null;
  if (!detail) return null;

  const fontW = parentW / 30 + "px";
  const fontH = parentW / 30 + "px";
  const amountFS = parentW / 60 + "px";

  const { amountInBulk, amountInSet, length, material, weight } = detail;

  return (
    <div className="col-span-3">
      <div className="row-span-8 flex justify-end items-start flex-wrap gap-2 pt-2 px-2 pl-3">
        {length && (
          <span className=" flex-col gap-1 w-1/4 flex justify-between items-center">
            <FontAwesomeIcon
              icon={faRulerHorizontal}
              style={{ width: fontW, height: fontH }}
              className="text-foreground/70"
            />
            <span style={getFSStyle(amountFS)} className="">
              {length}
            </span>
          </span>
        )}
        {material && (
          <span className=" flex-col gap-1 w-1/4 flex justify-between items-center">
            <FontAwesomeIcon
              icon={faPuzzlePiece}
              style={{ width: fontW, height: fontH }}
              className="text-foreground/70"
            />
            <span style={getFSStyle(amountFS)} className="">
              {material}
            </span>
          </span>
        )}
        {weight && (
          <span className=" flex-col gap-1 w-1/4 flex justify-between items-center">
            <FontAwesomeIcon
              icon={faWeightScale}
              style={{ width: fontW, height: fontH }}
              className="text-foreground/70"
            />
            <span style={getFSStyle(amountFS)} className="">
              {weight}
            </span>
          </span>
        )}
        {amountInBulk && (
          <span className=" flex-col gap-1 w-1/4 flex justify-between items-center">
            <FontAwesomeIcon
              icon={faCubes}
              style={{ width: fontW, height: fontH }}
              className="text-foreground/70"
            />
            <span style={getFSStyle(amountFS)} className="">
              {amountInBulk}
            </span>
          </span>
        )}
        {amountInSet && (
          <span className=" flex-col gap-1 w-1/4 flex justify-between items-center">
            <FontAwesomeIcon
              icon={faCube}
              style={{ width: fontW, height: fontH }}
              className="text-foreground/70"
            />
            <span style={getFSStyle(amountFS)} className="">
              {amountInSet}
            </span>
          </span>
        )}
      </div>
    </div>
  );
}
