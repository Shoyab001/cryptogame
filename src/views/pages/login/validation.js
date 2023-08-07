const Validation = (fieldsObject, setErrorObject) => {
    switch (true) {
      case !fieldsObject.mobile_number || fieldsObject.mobile_number === '':
        setErrorObject((prev) => ({ ...prev, Username: 'Please provide mobile_number.' }))
        break
  
      case !fieldsObject.password || fieldsObject.password === '':
        setErrorObject((prev) => ({ ...prev, password: 'Please provide password.' }))
        break
      default:
        break
    }
  }
  export default Validation
  