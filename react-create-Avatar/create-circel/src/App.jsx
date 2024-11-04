import { useRef, useState } from 'react'

import './App.css'
import Wrapper from './components/Wrapper'
import AvatarContainer from './components/AvatarContainer'
import Form from './components/Form'
import { randomColor } from "./utils/utils"
import Avatar from './components/Avatar'
import DeleteModalAvatar from './components/DeleteModalAvatar'

function App() {
  const [formStatus, setFormStatus] = useState(false);
  const [delelteModalDisplay, setDeleteModalDisplay] = useState(false)
  const [input, setInput] = useState("");
  const [avatarData, setAvatarData] = useState([]);
  const [deleteModalId, setDeleteModalId] = useState("")
  

  function addAvatarBtnHandler() {
    setFormStatus(true)
  }

  function cancelForm() {
    setFormStatus(false)
    setDeleteModalDisplay(false)
  }

  function formHandler(e) {
    e.preventDefault();

   if(input.length > 0){
    let color = randomColor();
    console.log(color);

    let firstChar = input.slice(0, 1).toUpperCase();

    setAvatarData((prev) => [...prev, { id: Date.now(), text: firstChar, color }])

    setInput("");
    setFormStatus(false)

   }

  }

  function deletePreviewHandler(id) {
    console.log(id);

    setDeleteModalDisplay(true)
    setDeleteModalId(id);
  }

  function deleteHandler(id) {

    let filterArr = avatarData.filter((item) => item.id !== id)
    setAvatarData(filterArr)
    cancelForm()
  }

  return (
    <Wrapper >
      <AvatarContainer addAvatarBtnHandler={addAvatarBtnHandler} setFormStatus={setFormStatus} avatarData={avatarData} deletePreviewHandler={deletePreviewHandler} />
      <Form formStatus={formStatus} cancelForm={cancelForm} formHandler={formHandler} input={input} setInput={setInput} />
      {delelteModalDisplay ? <DeleteModalAvatar id={deleteModalId} deleteHandler={deleteHandler} cancelForm={cancelForm} /> : ""}
    </Wrapper>
  )
}

export default App
