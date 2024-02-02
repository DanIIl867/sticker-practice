import { StickerList } from "components/Sticker/StickerList";
import {Choice} from "./Sticker/Choice"
import stickerData from './stickerData.json'
import { Component } from "react";

export class App extends Component{

  state = {
    label: '',
  }

  handleChange = (newLabel) => {
    this.setState({
      label: newLabel
    })
  }

  render(){
    return(
      <>
        <Choice label={this.state.label}/>
        <StickerList handleChange={this.handleChange} stickerData={stickerData}/>
      </>
    )
  }
};