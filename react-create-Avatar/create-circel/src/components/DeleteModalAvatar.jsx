import React from 'react'
// function createDeleteModal(elem) {
//     const deleteMain = document.createElement("div");
//     deleteMain.className = "deleteMain";
//     const deleConfirmDiv = document.createElement("div");
//     deleConfirmDiv.className = "deleConfirmDiv";
//     const heading = document.createElement("h1");
//     heading.innerHTML = "Are You Sure You Want to Delete This Avatar?";

//     const formButtonMain = document.createElement("div");
//     formButtonMain.className = "formButtonMain";
//     const confirmDeleteBtn = document.createElement("button");
//     confirmDeleteBtn.type = "button";
//     confirmDeleteBtn.className = "confirmDeleteBtn";
//     confirmDeleteBtn.innerHTML = "Yes, Delete";

//     const cancelModal = document.createElement("button");
//     cancelModal.type = "button";
//     cancelModal.className = "cancelModal";
//     cancelModal.innerHTML = "Cancel";

//     formButtonMain.appendChild(confirmDeleteBtn);
//     formButtonMain.appendChild(cancelModal);
//     deleConfirmDiv.appendChild(heading);
//     deleConfirmDiv.appendChild(formButtonMain);
//     deleteMain.appendChild(deleConfirmDiv);

//     wrapper.appendChild(deleteMain);

//     confirmDeleteBtn.addEventListener("click", () => deleteAvatar(elem));

//     cancelModal.addEventListener("click", () => removeDeleteModal());
// }
export default function DeleteModalAvatar({cancelForm,id,deleteHandler}) {
    return (
        <div className='deleteMain'>
            <div className="deleConfirmDiv">
                <h1>Are You Sure You Want to Delete This Avatar?</h1>
                <div className='formButtonMain'>
                    <button type='button' className='confirmDeleteBtn' onClick={()=>deleteHandler(id)}>
                        Yes, Delete
                    </button>

                    <button type='button' className='cancelModal' onClick={cancelForm}>
                        Cancel
                    </button>

                </div>
            </div>
        </div>
    )
}
