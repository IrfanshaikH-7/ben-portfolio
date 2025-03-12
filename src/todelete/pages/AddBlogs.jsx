import { useState } from "react";
import CustomEditor from "../compo/LexicalEditor";

const AddBlog = () => {
    const [editorContent, setEditorContent] = useState('');
    return (
      <div>
        <h2>Add New Blog</h2>
        <CustomEditor content={editorContent} setContent={setEditorContent} />
      </div>
    );
  };
  
  export default AddBlog;
  