"use client";
import { ToolCardOptionalInfo } from "./ToolCardOptionalInfo";
import { ToolCardDescription } from "./ToolCardDescription";
import { ToolCardHeader } from "./ToolCardHeader";
import ToolCardImage from "./ToolCardImage/ToolCardImage";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { RefObject, useEffect, useMemo, useState } from "react";
import { useEditor } from "@tiptap/react";
import { Tool } from "@/types/tools.type";

const toolDescription = JSON.parse(`
{
  "type": "doc",
  "content": [
    {
      "type": "heading",
      "attrs": {
        "level": 1
      },
      "content": [
        {
          "type": "text",
          "text": "this is heading one with "
        },
        {
          "type": "text",
          "marks": [
            {
              "type": "highlight"
            }
          ],
          "text": "highlight "
        },
        {
          "type": "text",
          "text": "and "
        },
        {
          "type": "text",
          "marks": [
            {
              "type": "bold"
            }
          ],
          "text": "bold "
        },
        {
          "type": "text",
          "text": "message"
        }
      ]
    },
    {
      "type": "heading",
      "attrs": {
        "level": 2
      },
      "content": [
        {
          "type": "hardBreak"
        },
        {
          "type": "text",
          "text": "this is heading 2 with "
        },
        {
          "type": "text",
          "marks": [
            {
              "type": "bold"
            }
          ],
          "text": "bold "
        },
        {
          "type": "text",
          "text": "message"
        }
      ]
    },
    {
      "type": "heading",
      "attrs": {
        "level": 3
      },
      "content": [
        {
          "type": "text",
          "text": "this is heading 3 with "
        },
        {
          "type": "text",
          "marks": [
            {
              "type": "highlight"
            }
          ],
          "text": "highligh"
        }
      ]
    },
    {
      "type": "paragraph"
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "marks": [
            {
              "type": "bold"
            }
          ],
          "text": "this is bold message"
        }
      ]
    },
    {
      "type": "paragraph"
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "marks": [
            {
              "type": "highlight"
            }
          ],
          "text": "this is highlight"
        }
      ]
    },
    {
      "type": "bulletList",
      "content": [
        {
          "type": "listItem",
          "content": [
            {
              "type": "paragraph",
              "content": [
                {
                  "type": "text",
                  "text": "his is list"
                }
              ]
            }
          ]
        },
        {
          "type": "listItem",
          "content": [
            {
              "type": "paragraph",
              "content": [
                {
                  "type": "text",
                  "marks": [
                    {
                      "type": "highlight"
                    }
                  ],
                  "text": "this is highligh list"
                }
              ]
            }
          ]
        },
        {
          "type": "listItem",
          "content": [
            {
              "type": "paragraph",
              "content": [
                {
                  "type": "text",
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "text": "this is bold lis "
                }
              ]
            },
            {
              "type": "paragraph"
            }
          ]
        }
      ]
    },
    {
      "type": "paragraph"
    },
    {
      "type": "table",
      "content": [
        {
          "type": "tableRow",
          "content": [
            {
              "type": "tableHeader",
              "attrs": {
                "colspan": 1,
                "rowspan": 1,
                "colwidth": null
              },
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    {
                      "type": "text",
                      "marks": [
                        {
                          "type": "bold"
                        }
                      ],
                      "text": "bold table header"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableHeader",
              "attrs": {
                "colspan": 1,
                "rowspan": 1,
                "colwidth": null
              },
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    {
                      "type": "text",
                      "marks": [
                        {
                          "type": "highlight"
                        }
                      ],
                      "text": "highlight rable header"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableHeader",
              "attrs": {
                "colspan": 1,
                "rowspan": 1,
                "colwidth": null
              },
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    {
                      "type": "text",
                      "text": "table header"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableHeader",
              "attrs": {
                "colspan": 1,
                "rowspan": 1,
                "colwidth": null
              },
              "content": [
                {
                  "type": "heading",
                  "attrs": {
                    "level": 1
                  },
                  "content": [
                    {
                      "type": "text",
                      "text": "heading 1 table"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableHeader",
              "attrs": {
                "colspan": 1,
                "rowspan": 1,
                "colwidth": null
              },
              "content": [
                {
                  "type": "heading",
                  "attrs": {
                    "level": 2
                  },
                  "content": [
                    {
                      "type": "text",
                      "text": "heading 2"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableHeader",
              "attrs": {
                "colspan": 1,
                "rowspan": 1,
                "colwidth": null
              },
              "content": [
                {
                  "type": "heading",
                  "attrs": {
                    "level": 3
                  },
                  "content": [
                    {
                      "type": "text",
                      "text": "heading 3"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "content": [
            {
              "type": "tableCell",
              "attrs": {
                "colspan": 1,
                "rowspan": 1,
                "colwidth": null
              },
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    {
                      "type": "text",
                      "text": "table content"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "attrs": {
                "colspan": 1,
                "rowspan": 1,
                "colwidth": null
              },
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    {
                      "type": "text",
                      "marks": [
                        {
                          "type": "bold"
                        }
                      ],
                      "text": "bold table content"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "attrs": {
                "colspan": 1,
                "rowspan": 1,
                "colwidth": null
              },
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    {
                      "type": "text",
                      "marks": [
                        {
                          "type": "highlight"
                        }
                      ],
                      "text": "highligh table content"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "attrs": {
                "colspan": 1,
                "rowspan": 1,
                "colwidth": null
              },
              "content": [
                {
                  "type": "heading",
                  "attrs": {
                    "level": 2
                  },
                  "content": [
                    {
                      "type": "text",
                      "text": "table content heading 2"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "attrs": {
                "colspan": 1,
                "rowspan": 1,
                "colwidth": null
              },
              "content": [
                {
                  "type": "heading",
                  "attrs": {
                    "level": 3
                  },
                  "content": [
                    {
                      "type": "text",
                      "text": "table content heading 3"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "attrs": {
                "colspan": 1,
                "rowspan": 1,
                "colwidth": null
              },
              "content": [
                {
                  "type": "heading",
                  "attrs": {
                    "level": 1
                  },
                  "content": [
                    {
                      "type": "text",
                      "text": "table cotnent heading 1"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "tableRow",
          "content": [
            {
              "type": "tableCell",
              "attrs": {
                "colspan": 1,
                "rowspan": 1,
                "colwidth": null
              },
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    {
                      "type": "text",
                      "text": "normal conetnt"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "attrs": {
                "colspan": 1,
                "rowspan": 1,
                "colwidth": null
              },
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    {
                      "type": "text",
                      "marks": [
                        {
                          "type": "bold"
                        }
                      ],
                      "text": "bold content"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "attrs": {
                "colspan": 1,
                "rowspan": 1,
                "colwidth": null
              },
              "content": [
                {
                  "type": "heading",
                  "attrs": {
                    "level": 2
                  },
                  "content": [
                    {
                      "type": "text",
                      "text": "h2 content"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "attrs": {
                "colspan": 1,
                "rowspan": 1,
                "colwidth": null
              },
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    {
                      "type": "text",
                      "marks": [
                        {
                          "type": "highlight"
                        }
                      ],
                      "text": "highlight content"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "attrs": {
                "colspan": 1,
                "rowspan": 1,
                "colwidth": null
              },
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    {
                      "type": "text",
                      "text": "normal content"
                    }
                  ]
                }
              ]
            },
            {
              "type": "tableCell",
              "attrs": {
                "colspan": 1,
                "rowspan": 1,
                "colwidth": null
              },
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    {
                      "type": "text",
                      "text": "normal content"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
`);

export function ToolCard({ tool }: { tool: Tool }) {
  const { a4Ref } = useSelector((state: RootState) => state.toolList);
  const width = (a4Ref as RefObject<HTMLDivElement>)?.current?.clientWidth;
  const a4w = useMemo(() => {
    return width;
  }, [width]);

  const {
    name,
    price,
    code,
    image,
    brand,
    category,
    description,
    detail,
    available,
    size,
  } = tool;

  return (
    <div className="border border-border grid grid-cols-12 w-full h-full rounded-md overflow-hidden row-span-2 text-foreground">
      <div className="col-span-9 flex flex-col justify-start gap-2">
        <ToolCardHeader
          name={name}
          code={code}
          price={price + ""}
          parentW={a4w}
        ></ToolCardHeader>
        <div className="row-span-3 gap-2 grid grid-cols-12">
          <ToolCardDescription
            parentW={a4w}
            description={JSON.parse(description)}
          ></ToolCardDescription>
          <ToolCardOptionalInfo
            detail={detail}
            parentW={a4w}
          ></ToolCardOptionalInfo>
        </div>
      </div>
      <ToolCardImage></ToolCardImage>
    </div>
  );
}
