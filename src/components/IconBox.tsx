import React,{Component} from "react"
import Icon from '@mdi/react'
import { mdiAccount } from '@mdi/js'


class IconBox extends Component {
    render() {
      return (
        <Icon path={mdiAccount}
          size={1}
          horizontal
          vertical
          rotate={90}
          color="red"/>
      );
    }
  } 
export default IconBox;