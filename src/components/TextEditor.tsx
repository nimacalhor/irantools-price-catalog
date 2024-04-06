"use client";
import { actions } from "@/store/createTool.store";
import { Separator } from "@/ui/separator.ui";
import BulletList from "@tiptap/extension-bullet-list";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useDispatch, useSelector } from "react-redux";
import EditorButtons from "./EditorButtons";
import { RootState } from "@/store";
import { useEffect, useState } from "react";
import { Transaction } from "@tiptap/pm/state";
import { isObjectEmpty } from "@/utils/object.util";

const defaultContent = ``;

type TextEditorProps = {};

function TextEditor({}: TextEditorProps) {
  const { description } = useSelector(
    (state: RootState) => state.createTool.tool
  );
  const dispatch = useDispatch();

  const [editor, setEditor] = useState<Editor | null>(
    new Editor({
      extensions: [
        StarterKit,
        // BulletList,
        Highlight,
        Table,
        TableCell,
        TableHeader,
        TableRow,
        // Heading.configure({
        //   levels: [1, 2, 3],
        // }),
      ],
      content: defaultContent,
      onBlur({ editor }) {
        // INFO :
        debugger;
        //
        const result = editor.getJSON();

        dispatch(actions.setTool({ description: result }));
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
          // BulletList,
          Highlight,
          Table,
          TableCell,
          TableHeader,
          TableRow,
          // Heading.configure({
          //   levels: [1, 2, 3],
          // }),
        ],
        content: _description,
        onBlur({ editor }) {
           
          const result = editor.getJSON();

          dispatch(actions.setTool({ description: result }));
        },
      })
    );
  }, [description, dispatch, editor]);

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
