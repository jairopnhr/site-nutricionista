import { TypeArtigo } from "../enuns/type-artigo";

export interface Artigo {
    id:number|string;
    caption:string;
    title:string;
    data:Date;
    typeArtigo:TypeArtigo
    imagePath:string,
    imageDescription:string,
    paragraph:string[]
}
