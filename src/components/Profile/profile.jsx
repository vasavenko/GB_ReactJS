import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCheckbox } from "../../store/profile/action";

export const Prifile = () => {
  // const state = store.getState()
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const hendelChange = () => {
    dispatch(toggleCheckbox)
  }

  return (
    <>
      <h2>Profile</h2>
      <input type='checkbox' checked={state.checkbox} onChange={hendelChange}/>
      <span>{state.name}</span>
      </>
  )
}