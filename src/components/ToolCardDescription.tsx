"use client"
import { ToolDescription } from "@/types/toolDescription.type";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/table.ui";

import React, { CSSProperties } from "react";

export function ToolCardDescription({
  description,
  parentW,
}: {
  description?: ToolDescription;
  parentW?: number;
}) {
   
  if (!parentW) return null;
  if (!description) return null;

  const headingStyles: { [key: string]: CSSProperties } = {
    h1: { fontSize: parentW / 45 + "px" },
    h2: { fontSize: parentW / 50 + "px" },
    h3: { fontSize: parentW / 55 + "px" },
  };
  const headingClasses: { [key: string]: string } = {
    h1: "tracking-tighter",
    h2: "tracking-tighter",
    h3: "tracking-tighter",
  };
  return (
    <div className="col-span-9 h-full pr-2 text-right">{renderNode(description, 0)}</div>
  );

  function renderNode(node: ToolDescription, index: number): React.ReactNode {
    if (!parentW) return null;

    switch (node.type) {
      case "doc":
        return (
          <div key={index} className="text-right">
            {node.content.map(function (contentNode, contentIndex) {
              return renderNode(contentNode, contentIndex);
            })}
          </div>
        );

      case "heading": {
        const headingLevel = `h${node.attrs.level}`;
        return React.createElement(
          headingLevel,
          {
            key: index,
            style: headingStyles[headingLevel],
            className: `${headingClasses[headingLevel]}`,
          },
          node?.content?.map(function (contentNode, contentIndex) {
            return renderNode(contentNode, contentIndex);
          })
        );
      }

      case "paragraph":
        return (
          <p
            style={{ fontSize: parentW / 55 + "px" }}
            className="tracking-tighter font-[380]"
            key={index}
          >
            {node.content?.map(function (contentNode, contentIndex) {
              return renderNode(contentNode, contentIndex);
            })}
          </p>
        );

      case "text":
        return (
          <span key={index} className={getMarksClass(node.marks)}>
            {node.text}
          </span>
        );

      case "bulletList":
        return (
          <div key={index} className="pr-6">
            <ul className="list-none gap-0 flex flex-col h-min" key={index}>
              {node.content.map(function (listItem, listItemIndex) {
                return (
                  <li className="p-0 h-min m-0 translate-x-3 relative" key={listItemIndex}>
                    <span className="absolute -top-1 -right-3">-</span>
                    {listItem.content?.map(function (
                      contentNode,
                      contentIndex
                    ) {
                      return renderNode(contentNode, contentIndex);
                    })}
                  </li>
                );
              })}
            </ul>
          </div>
        );

      case "table":
        return (
          <Table key={index} className="table-auto mt-1 rounded-md overflow-hidden">
            <TableBody className="border border-border">
              {node.content.map(function (row, rowIndex) {
                return (
                  <TableRow className="" key={rowIndex}>
                    {row.content.map(function (cell, cellIndex) {
                      return renderNode(cell, cellIndex);
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        );

      case "tableHeader":
        return (
          <TableHead
            className="text-right bg-secondary border-border border"
            key={index}
            // colSpan={node.attrs.colspan}
            // rowSpan={node.attrs.rowspan}
          >
            {node.content.map(function (contentNode, contentIndex) {
              return renderNode(contentNode, contentIndex);
            })}
          </TableHead>
        );

      case "tableCell":
        return (
          <TableCell
          style={{
            padding: "4px"
            // padding:0
          }}
            className="text-right border border-border"
            key={index}
            // colSpan={node.attrs.colspan}
            // rowSpan={node.attrs.rowspan}
          >
            {node.content.map(function (contentNode, contentIndex) {
              return renderNode(contentNode, contentIndex);
            })}
          </TableCell>
        );

      default:
        return null;
    }
  }

  function getMarksClass(marks?: { type: string }[]) {
    if (!marks) return "";
    return marks
      .map(function (mark) {
        return mark.type;
      })
      .join(" ");
  }
}
