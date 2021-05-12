import React, {Fragment, useState} from 'react'

const Form = (props) => {

  const initialState = {
    name:''
  }

  const [fields, setFields] = useState(initialState)

  const handleFiledsChange = (e) => setFields(
    {...fields, [e.currentTarget.name]: e.currentTarget.value}
  )
  const handleSubmit = event => {
    props.addSatellite(fields)
    event.preventDefault()
    setFields(initialState)
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Satelite Name: </label>
          <input id='name' type='text' name='name' value={fields.name} onChange={handleFiledsChange} />
        </div>
        <br/>
        <input type='submit' />
      </form>
    </Fragment>
  )
}

export default Form
