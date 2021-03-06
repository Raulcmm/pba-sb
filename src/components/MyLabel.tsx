
import './mylabel.css'


type sizes = 'normal' | 'h1' | 'h2' | 'h3'

export interface Props{
    /**
    * Title of the component
    */
    label?: string;
    /**
    * Title´s sizes of component
    */
    size  : sizes ;
    /**
    * Capitalize the word
    */
    allCaps?  : boolean;
    /**
    * Color label
    */
    color?: 'primary' | 'secondary' | 'tertiary'

    fontColor?: string
}

export const MyLabel = ( {
        label ='No label',
        size = 'h1',
        allCaps = true,
        color = 'secondary',
        fontColor = '#a5a5'
    } : Props ) => {
    return (
        <span className={`label ${size} text-${color}`} style={{color:fontColor}}>
            {allCaps?label.toUpperCase():label}
        </span>
    )
}

export default MyLabel
