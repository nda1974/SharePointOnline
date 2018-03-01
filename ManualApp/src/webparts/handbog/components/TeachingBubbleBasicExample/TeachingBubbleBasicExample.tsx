/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import styles from './TeachingBubbleBasicExample.module.scss'
import { style } from 'glamor';
export interface ITeachingBubbleBasicExampleState {
  isTeachingBubbleVisible?: boolean;
  
}
export interface ITeachingBubbleBasicExampleState{
    text?:string;
}
export class TeachingBubbleBasicExample extends React.Component<ITeachingBubbleBasicExampleState, ITeachingBubbleBasicExampleState> {
  private _menuButtonElement: HTMLElement;

  constructor(props: {}) {
    super(props);

    this._onDismiss = this._onDismiss.bind(this);

    this.state = {
      isTeachingBubbleVisible: false,
      text:'',
    };
  }

  public render() {
    let { isTeachingBubbleVisible } = this.state;
    let examplePrimaryButton: IButtonProps = {
      children: 'Åbn vilkår',
      href:'http://www.dr.dk',
      target:'_blank'
      
    };
    let exampleSecondaryButtonProps: IButtonProps = {
      children: 'Luk',
      onClick: this._onDismiss
      
    };

    return (
      <div className='ms-TeachingBubbleExample'>
        <span className='ms-TeachingBubbleBasicExample-buttonArea' ref={ (menuButton) => this._menuButtonElement = menuButton! }>
          <DefaultButton
            onClick={ this._onDismiss }
            text={ isTeachingBubbleVisible ? 'Skjul' : 'Vis mere..' }
            
          />
        </span>
        { isTeachingBubbleVisible ? (
          <div className={styles.MyWidth}>
            <TeachingBubble 
              targetElement={ this._menuButtonElement }
              primaryButtonProps={ examplePrimaryButton }
              secondaryButtonProps={ exampleSecondaryButtonProps }
              onDismiss={ this._onDismiss }
              headline='Information omkring det aktuelle vilkår'
            >


                <div><h1>Afsnit 1</h1>
                </div>
                <div>{this.props.text}
                </div>
                
                <Link href='http://dev.office.com/fabric/components/link'>Se afgørelse.</Link>
              
                <h1>Afsnit 2</h1>                
                <div>{this.props.text}</div>
                
                <Link href='http://dev.office.com/fabric/components/link'>Se afgørelse.</Link>
              
            </TeachingBubble>
          </div>
        ) : (null) }
      </div>
    );
  }

  private _onDismiss(ev: any) {
    this.setState({
      isTeachingBubbleVisible: !this.state.isTeachingBubbleVisible
    });
  }
}