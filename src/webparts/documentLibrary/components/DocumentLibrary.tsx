import * as React from 'react';
import styles from './DocumentLibrary.module.scss';
import { IDocumentLibraryProps } from './IDocumentLibraryProps';

export default class DocumentLibrary extends React.Component<IDocumentLibraryProps, {}> {
  public render(): React.ReactElement<IDocumentLibraryProps> {
    return (
      <div className={ styles.documentLibrary }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Document Library</span>
              {this.props.documents.map((document, index) => (
                <div key={index} className={ styles.documentItem }>
                  <span className={ styles.documentTitle }>{document.title}</span>
                  <span className={ styles.documentDate }>{document.date.toLocaleDateString()}</span>
                  <a href={document.url} className={ styles.documentLink }>Open Document</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}