"use client";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import Table from "@tiptap/extension-table";
import { useEffect, useState } from "react";
import EditorButtons from "./EditorButtons";
import StarterKit from "@tiptap/starter-kit";
import { Separator } from "@/ui/separator.ui";
import TableRow from "@tiptap/extension-table-row";
import { isObjectEmpty } from "@/utils/object.util";
import Highlight from "@tiptap/extension-highlight";
import TableCell from "@tiptap/extension-table-cell";
import { Editor, EditorContent } from "@tiptap/react";
import TableHeader from "@tiptap/extension-table-header";
import { CreateToolStore } from "@/store/createTool.store";

const defaultContent = ``;

type TextEditorProps = {
  onBlur?: (params: {
    description: CreateToolStore["tool"]["description"];
  }) => void;
};

function TextEditor({ onBlur }: TextEditorProps) {
  const { description } = useSelector(
    (state: RootState) => state.createTool.tool
  );

  const [editor, setEditor] = useState<Editor | null>(
    new Editor({
      extensions: [
        StarterKit,
        Highlight,
        Table,
        TableCell,
        TableHeader,
        TableRow,
      ],
      content: defaultContent,
      onBlur({ editor }) {
        const result = editor.getJSON();
        if (onBlur) onBlur({ description: result });
      },
    })
  );

  useEffect(() => {
    if (!description) return;
    if (!editor) return;

    const editorJsonContent = editor.getJSON();

    if (!isObjectEmpty(editorJsonContent)) return;

    let _description = description;
    try {
      _description = JSON.parse(description);
    } catch (error) {}

    setEditor(
      new Editor({
        extensions: [
          StarterKit,
          Highlight,
          Table,
          TableCell,
          TableHeader,
          TableRow,
        ],
        content: _description,
        onBlur({ editor }) {
          const result = editor.getJSON();

          if (onBlur) onBlur({ description: result });
        },
      })
    );
  }, [description, editor]);

  if (!editor) return null;

  return (
    <section className="mt-10">
      <h2 className="text-2xl mb-3">توضیحات</h2>
      <section
        id="EDITOR"
        className="w-full border-border bg-muted border rounded-md min-h-44 p-3"
      >
        <div className="mb-4">
          <EditorButtons editor={editor}></EditorButtons>
          <Separator className="w-full" />
        </div>
        <EditorContent content="" className="min-h-32" editor={editor} />
      </section>
    </section>
  );
}

export default TextEditor;
