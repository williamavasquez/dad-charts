import React, {Component} from 'react'
import "./homePage.scss"
import TOformCreation from 'componentsfolder/TOformCreation/TOformCreation.js'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div>
        <p> Hello World 2 </p>
        <TOformCreation />
      </div>
    )
  }
}

export default HomePage