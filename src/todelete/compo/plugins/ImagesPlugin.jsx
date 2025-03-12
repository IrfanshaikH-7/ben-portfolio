import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createImageNode } from '@lexical/rich-text';
import { $insertNodes } from 'lexical';

export default function ImagePlugin() {
  const [editor] = useLexicalComposerContext();

  const insertImage = (url) => {
    editor.update(() => {
      const imageNode = $createImageNode({ src: url, altText: 'Image' });
      $insertNodes([imageNode]);
    });
  };

  return null;
}
