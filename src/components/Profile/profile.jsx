import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName, toggleCheckbox } from "../../store/profile/action";
import { selectCheckBox, selectName } from "../../store/profile/selectors";

export const Prifile = () => {
  const state = useSelector(selectCheckBox)
  const name = useSelector(selectName)
  const [value, setValue] = useState(name)
  const dispatch = useDispatch()

  const hendelChangeText = (e) => {
    setValue(e.target.value)
  }

  const hendelChange = () => {
    dispatch(toggleCheckbox)
  }

  const hendiSubmit = (e) => {
    e.preventDefault()
    dispatch(changeName(value))
    setValue('')
  }

  return (
    <>
      <h2>Profile</h2>
      <input type='checkbox' checked={state.checkbox} onChange={hendelChange}/>
    <form onSubmit={hendiSubmit}>
      <input type="text" value={value} onChange={hendelChangeText} />
      <input type="submit" />
    </form>
      </>
  )
}