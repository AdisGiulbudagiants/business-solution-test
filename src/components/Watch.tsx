import { Component } from "react"

interface WatchState {
  time: string
}

class Watch extends Component<Record<string, never>, WatchState> {
  timerID: NodeJS.Timeout | undefined

  constructor(props: Record<string, never>) {
    super(props)
    this.state = { time: new Date().toLocaleTimeString() }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    })
  }

  render() {
    return <span className="text-5xl font-bold">{this.state.time}</span>
  }
}

export default Watch
