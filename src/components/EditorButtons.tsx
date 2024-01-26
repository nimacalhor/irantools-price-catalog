"use client"
import { Editor } from "@tiptap/react";
import ChainButton from "./ChainButton";
import {
  faBold,
  faGripLines,
  faHighlighter,
  faListUl,
  faRotateLeft,
  faRotateRight,
  faTable,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";

type EditorButtonsProps = {
  editor: Editor;
};

function EditorButtons({ editor }: EditorButtonsProps) {
  return (
    <div className="min-h-10 gap-3 flex justify-evenly items-center mb-3 flex-wrap">
      <ChainButton
        icon={faGripLines}
        onClick={() => editor.chain().focus().deleteRow().run()}
        isDelete
      />
      <ChainButton
        icon={faTableColumns}
        onClick={() => editor.chain().focus().deleteColumn().run()}
        isDelete
      />
      <ChainButton
        icon={faTable}
        onClick={() => editor.chain().focus().deleteTable().run()}
        isDelete
      />
      <ChainButton
        icon={faGripLines}
        onClick={() => editor.chain().focus().addRowAfter().run()}
      />
      <ChainButton
        icon={faTableColumns}
        onClick={() => editor.chain().focus().addColumnAfter().run()}
      />
      <ChainButton
        icon={faTable}
        onClick={() =>
          editor
            .chain()
            .focus()
            .insertTable({
              rows: 3,
              cols: 3,
              withHeaderRow: true,
            })
            .run()
        }
      />
      <ChainButton
        icon={faHighlighter}
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        isActive={editor.isActive("highlight")}
      />
      <ChainButton
        text={"hr"}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      />
      <ChainButton
        icon={faListUl}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList")}
      />
      <ChainButton
        text={"T"}
        onClick={() => editor.chain().focus().setParagraph().run()}
        isActive={editor.isActive("paragraph")}
      />
      <ChainButton
        icon={faRotateRight}
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      />
      <ChainButton
        icon={faRotateLeft}
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      />
      <ChainButton
        icon={faBold}
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold")}
      />
      <ChainButton
        text={"H3"}
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({
              level: 3,
            })
            .run()
        }
        isActive={editor.isActive("heading", {
          level: 3,
        })}
      />
      <ChainButton
        text={"H2"}
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({
              level: 2,
            })
            .run()
        }
        isActive={editor.isActive("heading", {
          level: 2,
        })}
      />
      <ChainButton
        text={"H1"}
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({
              level: 1,
            })
            .run()
        }
        isActive={editor.isActive("heading", {
          level: 1,
        })}
      />
    </div>
  );
}

export default EditorButtons;
