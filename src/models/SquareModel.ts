import { ReactNode } from "react";

class SquareModel {
  id: string;
  imageUrl: string;
  title: string;
  found: boolean;
  children: ReactNode;

  constructor(id: string, imageUrl: string, title: string) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.title = title;
    this.found = false;
  }

  find() {
    this.found = true;
  }
}

export default SquareModel;
