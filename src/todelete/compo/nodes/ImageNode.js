import { DecoratorNode } from "lexical";

export class ImageNode extends DecoratorNode {
  static getType() {
    return "image";
  }

  static clone(node) {
    return new ImageNode(node.__src, node.__key);
  }

  constructor(src, key) {
    super(key);
    this.__src = src;
  }

  createDOM() {
    const img = document.createElement("img");
    img.src = this.__src;
    return img;
  }

  updateDOM() {
    return false;
  }
}
