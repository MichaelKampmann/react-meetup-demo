import { useRef } from 'react'

import classes from './NewMeetupForm.module.css'

import Card from "../ui/card";

function NewMeetupForm(props) {
  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const addressInputRef = useRef()
  const descriptionInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault()

    const enteredTitle = titleInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredAddress = addressInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const data = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    }

    props.onAddMeetup(data)
  }

  return (
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='title'>Title</label>
            <input type="text" required id='title' ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='image'>Image</label>
            <input type="url" required id='image' placeholder='URL' ref={imageInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='address'>Address</label>
            <input type="text" required id='address' ref={addressInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='description'>Description</label>
            <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button>Add</button>
          </div>
        </form>
      </Card>
  )
}

export default NewMeetupForm
