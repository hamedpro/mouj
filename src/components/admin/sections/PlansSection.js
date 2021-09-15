import { Component } from "react";
import IntroBox from "../../IntroBox/component"
import Option from "../../Option/Option"
export default class SettingPagePlansSection extends Component{
    render = ()=>(
        <div>
            <IntroBox title="hamed" info="negin" />
            <Option title="title i" content="negin is here">something</Option>
        </div>
    )
}