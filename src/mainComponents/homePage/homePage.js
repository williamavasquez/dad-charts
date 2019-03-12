import React, {Component} from 'react'
import FormWrapper from "componentsfolder/formWrapper/formWrapper"
import "./homePage.scss"

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div>
        <FormWrapper />
      </div>
    )
  }
}

export default HomePage