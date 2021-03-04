// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {

  constructor(){
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    } 
  }

  changeBitrate = () => {
    this.setState({settings: Object.assign({}, this.state.settings, {bitrate: 12})}, () => console.log(this.state.settings.bitrate))
  }

  changeRes = () => {
    this.setState({settings: Object.assign({}, this.state.settings, {video: {resolution: '720p'}})}, () => console.log(this.state.settings.video.resolution))
  }

  render(){
    return(
      <div id="youtube-debugger">
        <button className="bitrate" onClick={this.changeBitrate}>Change Bitrate</button>
        <button className="resolution" onClick={this.changeRes}>Change Resolution</button>
      </div>
    )
  }

}