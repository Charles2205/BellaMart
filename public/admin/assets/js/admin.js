const btnSave = document.querySelector('#btn-Save')
btnSave.addEventListener('click',async(event)=>{
    event.preventDefault()
    let allInputs = document.querySelectorAll(".inputValidator")
    allInputs = Array.from(allInputs)

    const result = allInputs.filter((input) => {
        return input.value.length < 1;
    })
    
    if (result.length < 0) {
      showToast('error',"Missing fields")
    } else { 
        const fullName = document.querySelector(".fullName").value
      const email = document.querySelector(".email").value
      const password = document.querySelector(".password").value
      const phoneNumber = document.querySelector(".phoneNumber").value
      const role = document.querySelector(".role").value
      // console.log(fullName,email,phoneNumber,password,role);
      const res = await axios.post("auth", {fullName,email,password,phoneNumber,role}) .then(response => {
            showToast('success','Administrator added Successfully')
          //    Assuming a successful response from the server
              window.location.reload()
              
           })
           .catch(error => {
             console.error('Error:', error);
             showToast('error', 'Failed to add Administrator');
           });
    }


})
// edit and save 
const btnEdits = document.querySelectorAll(".btn-edit")
btnEdits.forEach((btnEdit)=>{
btnEdit.addEventListener('click',(e)=>{
const tr= e.srcElement.parentNode.parentNode;
const fullName = tr.children[1].textContent
const email = tr.children[2].textContent
const phoneNumber = tr.children[4].textContent
const id = tr.children[0].value
console.log(id);
document.querySelector('#fullName').value = fullName
document.querySelector('#email').value = email
document.querySelector('#phoneNumber').value = phoneNumber
document.querySelector('.holdId').value = id 
console.log(id);
// updating or edit records 
const btnSaveChanges = document.querySelector('#btnSave')
btnSaveChanges.addEventListener('click',async(e)=>{
  e.preventDefault() 
console.log(id);
try {
  return await axios.put("auth",{id,fullName,email,phoneNumber}) .then(response => {
    console.log(id);
    showToast('success','Administrator edited Successfully')
  //    Assuming a successful response from the server
      window.location.reload()
      
   })
  
   .catch(error => {
     console.error('Error:', error);
     showToast('error', 'Failed to edit administrator details');
   });
} catch (error) {
  console.log(error);
}
})
})
})






function showToast(status,msg){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: status,
        title: msg
      })
}