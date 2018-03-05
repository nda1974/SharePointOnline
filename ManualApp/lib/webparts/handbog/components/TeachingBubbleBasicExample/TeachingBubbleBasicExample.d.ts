import * as React from 'react';
export interface ITeachingBubbleBasicExampleState {
    isTeachingBubbleVisible?: boolean;
}
export interface ITeachingBubbleBasicExampleState {
    text?: string;
}
export declare class TeachingBubbleBasicExample extends React.Component<ITeachingBubbleBasicExampleState, ITeachingBubbleBasicExampleState> {
    private _menuButtonElement;
    constructor(props: {});
    render(): JSX.Element;
    private _onDismiss(ev);
}
