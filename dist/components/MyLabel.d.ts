/// <reference types="react" />
import './mylabel.css';
declare type sizes = 'normal' | 'h1' | 'h2' | 'h3';
export interface Props {
    /**
    * Title of the component
    */
    label?: string;
    /**
    * Title´s sizes of component
    */
    size: sizes;
    /**
    * Capitalize the word
    */
    allCaps?: boolean;
    /**
    * Color label
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: Props) => JSX.Element;
export default MyLabel;
