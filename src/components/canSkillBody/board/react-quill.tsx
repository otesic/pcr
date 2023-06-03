import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRef, useMemo } from "react";

export default function QuillEditor() {
  const quillRef = useRef(null);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
          ["image"],
        ],
        handlers: {},
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  );

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "align",
    "image",
  ];

  return (
    <ReactQuill
      ref={quillRef}
      //   onChange={}
      //   className={styles.quill}
      modules={modules}
      formats={formats}
      //   value={html}
      placeholder={"후원받고자 하는 동물의 자세한 정보를 입력해주세요!"}
      theme="snow"
    />
  );
}
