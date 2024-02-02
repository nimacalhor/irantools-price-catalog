"use client";
import { Separator } from "@/ui/separator.ui";
import BulletList from "@tiptap/extension-bullet-list";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorButtons from "./EditorButtons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "@/store/createTool.store";

type TextEditorProps = {};

function TextEditor({}: TextEditorProps) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const editor = useEditor({
    extensions: [
      StarterKit,
      BulletList,
      Highlight,
      Table,
      TableCell,
      TableHeader,
      TableRow,
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
    content: "<p>Hello World! 🌎️</p>",
    onBlur({ editor }) {
      const result = editor.getJSON()
      dispatch(actions.setTool({ description: result }));
      console.log({ result });
    },
  });

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
        <EditorContent className="min-h-32" editor={editor} />
      </section>
    </section>
  );

  function sfkdl() {
    editor?.getJSON();
  }
}

export default TextEditor;
