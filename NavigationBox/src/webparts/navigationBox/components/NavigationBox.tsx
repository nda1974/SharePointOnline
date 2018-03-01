import * as React from 'react';
import styles from './NavigationBox.module.scss';
import { INavigationBoxProps } from './INavigationBoxProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class NavigationBox extends React.Component<INavigationBoxProps, {}> {
  public render(): React.ReactElement<INavigationBoxProps> {
    let color=null;
    if(this.props.color=='Primary')
    {
        color=true;
    }
    return (
      
      <div className={ styles.navigationBox }>
        
        <a href={this.props.linkUrl}>
        
        {(() => {
        switch (this.props.color) {
          case "Primary":   return <div className={styles.containerPrimary}> {this.props.linkText}</div>;
          case "Secondary": return <div className={styles.containerDark}> {this.props.linkText}</div>;
          default:      return "#FFFFFF";
        }
      })()}

        </a>
        
      </div>
    );
  }
}
