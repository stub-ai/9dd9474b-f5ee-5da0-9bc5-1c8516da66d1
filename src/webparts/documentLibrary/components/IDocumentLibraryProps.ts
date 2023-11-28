export interface IDocument {
  title: string;
  date: Date;
  url: string;
}

export interface IDocumentLibraryProps {
  documents: IDocument[];
}