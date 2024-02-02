
type TextNode = {
  type: "text";
  text: string;
  marks?: { type: "highlight" | "bold" }[];
};

type HeadingNode = {
  type: "heading";
  attrs: {
    level: 1 | 2 | 3;
  };
  content: (TextNode | HardBreakNode)[];
};

type HardBreakNode = {
  type: "hardBreak";
};

type ParagraphNode = {
  type: "paragraph";
  content?: (TextNode | ParagraphNode)[];
};

type ListItemNode = {
  type: "listItem";
  content: ParagraphNode[];
};

type BulletListNode = {
  type: "bulletList";
  content: ListItemNode[];
};

type TableHeaderNode = {
  type: "tableHeader";
  attrs: {
    colspan: number;
    rowspan: number;
    colwidth: null;
  };
  content: ParagraphNode[];
};

type TableCellNode = {
  type: "tableCell";
  attrs: {
    colspan: number;
    rowspan: number;
    colwidth: null;
  };
  content: ParagraphNode[];
};

type TableRowNode = {
  type: "tableRow";
  content: (TableHeaderNode | TableCellNode)[];
};

type TableNode = {
  type: "table";
  content: TableRowNode[];
};

type DocNode = {
  type: "doc";
  content: (HeadingNode | ParagraphNode | BulletListNode | TableNode)[];
};

export type ToolDescription =
  | TextNode
  | HardBreakNode
  | HeadingNode
  | ParagraphNode
  | ListItemNode
  | BulletListNode
  | TableHeaderNode
  | TableCellNode
  | TableRowNode
  | TableNode
  | DocNode;
