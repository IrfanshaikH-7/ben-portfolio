import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { ImageNode } from "./nodes/ImageNode";

const CustomEditor = ({ content, setContent }) => {
  const initialConfig = {
    namespace: "MyEditor",
    onError(error) {
      console.error(error);
    },
    nodes: [
      HeadingNode,
      QuoteNode,
      ListItemNode,
      ListNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      CodeNode,
      CodeHighlightNode,
      AutoLinkNode,
      LinkNode,
      ImageNode,
    ]
  };

  const handleSave = () => {
    setContent(content);
    console.log("Saved content:", content);
  };

  return (
    <div className="mx-auto my-5 p-5 border border-gray-300 rounded-lg max-w-3xl">
      <LexicalComposer initialConfig={initialConfig}>
        <div className="bg-white rounded-lg">
          <ToolbarPlugin />
          <div className="min-h-[200px] p-4">
            <RichTextPlugin
              contentEditable={
                <ContentEditable className="min-h-[200px] p-2 focus:outline-none" />
              }
              placeholder={
                <div className="absolute text-gray-400 p-2 pointer-events-none">
                  Enter some text...
                </div>
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <AutoFocusPlugin />
            <ListPlugin />
            <LinkPlugin />
          </div>
        </div>
      </LexicalComposer>
      <button 
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Save
      </button>
    </div>
  );
};

export default CustomEditor;
