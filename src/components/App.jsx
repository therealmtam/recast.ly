class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currentVid: window.exampleVideoData[0]
    };
  }
  
  componentDidMount() {
    this.getYouTubeVideos('cute kittens');
  }
  
  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query,
      max: 5
    };
    
    this.props.searchYouTube(options, (videos) => { 
      this.setState({
        videos: videos,
        currentVid: videos[0]
      });
    });
  }
  
  handleTitleClick(video) {
    this.setState({
      currentVid: video
    });
  }
  
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search handleInputChange={this.getYouTubeVideos.bind(this)} /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVid}/></div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList 
                videos={this.state.videos}
                handleTitleClick={this.handleTitleClick.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
