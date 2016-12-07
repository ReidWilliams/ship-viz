import React, { Component } from 'react'

// import local css as s.
import s from './styles.css'
// import global css as gs
import gs from './../../styles/grid.css'
import Card from '../../components/Card/Card'

const boundingBox = [
  [37.78170504295941, -122.38460540771484], // sw - lower
  [37.79934038764369, -122.32899312158202]  // ne - upper
]

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {ships: 'no ships yet'}
  }

  componentDidMount() {
    const _this = this
    setInterval(() => {
      _this.updateShipState()
    }, 5000)
  }

  updateShipState() {
    let _this = this
    fetch('http://localhost:9000').then(res => {
      return res.json()
    }).then(json => {
      console.log(json)
      _this.setState({ships: json})
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    // return (<div className={s.ship}></div>)
    return (<div>{JSON.stringify(this.state.ships)}</div>)
  }
}

export default HomePage
