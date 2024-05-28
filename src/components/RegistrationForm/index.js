import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    showLastNameError: false,
    isFormSubmitted: false,
    showFirstNameError: false,
  }

  onChangelastname = event => {
    this.setState({lastname: event.target.value})
  }

  onChangefirstname = event => {
    this.setState({firstname: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidLastname = this.validLastname()
    const isValidFirstname = this.validFastname()
    if (isValidLastname && isValidFirstname) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showLastNameError: !isValidLastname,
        showFirstNameError: !isValidFirstname,
        isFormSubmitted: false,
      })
    }
  }

  eventHandlerLastname = () => {
    const isValid = this.validLastname()
    this.setState({showLastNameError: !isValid})
  }

  eventHandlerfirstname = () => {
    const isValid = this.validFastname()
    this.setState({showFirstNameError: !isValid})
  }

  validLastname = () => {
    const {lastname} = this.state
    return lastname !== ''
  }

  validFastname = () => {
    const {firstname} = this.state
    return firstname !== ''
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstNameInput: '',
      lastNameInput: '',
    }))
  }

  renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {
      showLastNameError,
      showFirstNameError,
      isFormSubmitted,
      firstname,
      lastname,
    } = this.state
    const className1 = showLastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'
    const className2 = showFirstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <>
        <div className="app-container">
          <h1 className="Registration-heading">Registration</h1>

          {isFormSubmitted ? (
            this.renderSubmissionSuccessView()
          ) : (
            <form className="second-container" onSubmit={this.onSubmitForm}>
              <label htmlFor="firstname" className="input-label">
                FIRST NAME
              </label>
              <br />
              <input
                id="firstname"
                type="text"
                value={firstname}
                className={className2}
                onChange={this.onChangefirstname}
                onBlur={this.eventHandlerfirstname}
              />
              {showFirstNameError && <p className="error-message">Required</p>}
              <br />
              <label htmlFor="lastname" className="input-label">
                LAST NAME
              </label>
              <br />
              <input
                id="lastname"
                type="text"
                className={className1}
                value={lastname}
                onChange={this.onChangelastname}
                onBlur={this.eventHandlerLastname}
              />
              {showLastNameError && <p className="error-message">Required</p>}

              <div>
                <button className="button-style" type="submit">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </>
    )
  }
}
export default RegistrationForm
