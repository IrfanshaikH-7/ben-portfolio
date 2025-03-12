import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
} from "@lexical/list";
import {
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
} from "lexical";
import { 
  $createParagraphNode, 
  $getSelection,
  $isRangeSelection 
} from 'lexical';

const ToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext();

  const formatText = (formatType) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, formatType);
  };

  const formatAlignment = (alignment) => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, alignment);
  };

  return (
    <div className="flex flex-wrap gap-2 p-2 border-b border-gray-200">
      <button
        onClick={() => formatText("bold")}
        className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
      >
        Bold
      </button>
      <button
        onClick={() => formatText("italic")}
        className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
      >
        Italic
      </button>
      <button
        onClick={() => formatText("underline")}
        className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
      >
        Underline
      </button>
      <button
        onClick={() => editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND)}
        className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
      >
        Ordered List
      </button>
      <button
        onClick={() => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND)}
        className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
      >
        Bullet List
      </button>
      <button
        onClick={() => formatAlignment("left")}
        className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
      >
        Left
      </button>
      <button
        onClick={() => formatAlignment("center")}
        className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
      >
        Center
      </button>
      <button
        onClick={() => formatAlignment("right")}
        className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
      >
        Right
      </button>
      <button
        onClick={() => formatAlignment("justify")}
        className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
      >
        Justify
      </button>
      <button
        onClick={() => editor.dispatchCommand(UNDO_COMMAND)}
        className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
      >
        Undo
      </button>
      <button
        onClick={() => editor.dispatchCommand(REDO_COMMAND)}
        className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
      >
        Redo
      </button>
    </div>
  );
};

export default ToolbarPlugin;
