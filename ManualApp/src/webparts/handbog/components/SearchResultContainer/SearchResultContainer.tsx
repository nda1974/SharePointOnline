import * as React from "react";
import * as ReactDom from 'react-dom';
import {
    DocumentCard,
    DocumentCardActivity,
    DocumentCardPreview,
    DocumentCardTitle,
    IDocumentCardPreviewProps,
    DocumentCardType
  } from 'office-ui-fabric-react/lib/DocumentCard';
  import {
    HoverCard,
    IExpandingCardProps
  } from 'office-ui-fabric-react/lib/HoverCard';
  import { Link } from 'office-ui-fabric-react/lib/Link';
  import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
import { PrimaryButton, DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';

  import { DetailsList, buildColumns, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
  import { DirectionalHint } from 'office-ui-fabric-react/lib/common/DirectionalHint';
  import { autobind } from 'office-ui-fabric-react/lib/Utilities';


import { ISearchResultContainerProps } from "./ISearchResultContainerProps";
import { ISearchResultContainerState } from "./ISearchResultContainerState";
import { ISearchInputContainerState } from "../SearchInputContainer/ISearchInputContainerState";
import {TeachingBubbleBasicExample} from '../TeachingBubbleBasicExample/TeachingBubbleBasicExample'
import {ITeachingBubbleBasicExampleState}from '../TeachingBubbleBasicExample/TeachingBubbleBasicExample'
import SPSearchService from '../../Services/SPSearchService'

export default class SearchResultContainer extends React.Component<ISearchResultContainerProps, ISearchResultContainerState> {
    private queryText:string;
    public constructor(props:ISearchResultContainerProps,state:ISearchResultContainerState){  
            super(props);  
    }
    

    public render(): React.ReactElement<ISearchResultContainerProps> {  
        
        return(
            <div>
                {this.props.results.map(function(item,key){ 
                                             return (
                                    
                                                        <div  key={key} className="ms-Grid-row">  
                                                                        <div >
                                                                            <h2>
                                                                                <Link href={item.Path}>{item.Title}</Link>
                                                                            </h2>
                                                                        </div>       
                                                                           
                                                                        <MessageBar
                                                                            messageBarType={ MessageBarType.info }
                                                                            isMultiline={ false }
                                                                            >
                                                                            {item.IndboCategory} 
                                                                        </MessageBar>    
                                                                        
                                                                        {/* <MessageBar
                                                                            messageBarType={ MessageBarType.severeWarning }
                                                                            isMultiline={ false }
                                                                            >
                                                                            Ankenævnskendelse
                                                                            
                                                                        </MessageBar>     */}
                                                                        <br/>
                                                                        <div>
                                                                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 
                                                                            "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                                                                        </div>      
                                                                        <br/>
                                                                        <TeachingBubbleBasicExample  text='Aenean id eros ut ante ultricies malesuada a vel erat. Donec a molestie nisl, non blandit enim. Mauris sit amet urna nisl. Nulla facilisi. Nullam laoreet auctor neque, sed vestibulum mi porta nec. Sed id augue a est commodo luctus non sit amet arcu. Vestibulum congue risus at mauris pharetra, eu fringilla arcu tincidunt. Aenean sed magna vitae sapien ultricies varius. Duis turpis dui, laoreet ac purus dictum, ornare aliquet tellus. Nulla eu sodales justo. Mauris sodales mauris quis justo tincidunt, eget dignissim risus venenatis.'    />
                                                                        
                                                        </div>
                                                        
                                                    )}
                                                )}
            </div>
            
            
        );
    }
    
    
    
  }