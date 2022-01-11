import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyLabel, { Props } from "../../components/MyLabel";

export default {
    title:'UI/MyLabel',
    component:MyLabel,
    argTypes: {
        color       : { control : 'color'  },
        size        : { control : 'select' },
        fontColor   : { control : 'color' },
    },

} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel>= ( args ) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
    label:'Hola basic',
    size:'h1',
    allCaps:false,
    color:'primary',

}

export const AllCaps = Template.bind({});
AllCaps.args = {
    label:'Hola mundo',
    size:'normal',
    allCaps:true
}
export const Secondary = Template.bind({});
Secondary.args={
    label:'Secondary',
    size:'normal',
    color:'secondary',
}
export const Tertiary = Template.bind({});

Tertiary.args={
    label:'Tertiary',
    size:'normal',
    color:'tertiary',
}

export const CustomFontcolor = Template.bind({})

Tertiary.args={
    fontColor:'#000000',
}