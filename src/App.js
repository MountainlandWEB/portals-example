import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

class Modal extends React.Component{
  el = document.createElement('div')

  componentDidMount() {
    document.querySelector('#portal').appendChild(this.el)
  }
  
  componentWillUnmount() {
    document.querySelector('#portal').removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}

class App extends React.Component {
  state = {
    showModal: false
  }

  handleOpenModal = () => {
    this.setState({
      showModal: true
    })
  }
  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <div className="ui container">
        <button className="ui button primary" onClick={this.handleOpenModal}>Open</button>
        { this.state.showModal ? (
          <Modal>
            <div className="modal">
              <div className="ui cards">
                <div className="card">
                  <div className="content">
                    <div className="header">
                      Are you sure?
                    </div>
                    <div className="description">
                      This action can not be undone.
                    </div>
                  </div>
                  <div className="extra content">
                    <div className="ui two buttons">
                      <div className="ui basic button" onClick={this.handleCloseModal}>Cancel</div>
                      <div className="ui basic primary button" onClick={this.handleCloseModal}>Continue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        ) : null }
      </div>
    )
  }
}

export default App