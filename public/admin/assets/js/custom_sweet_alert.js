const btnSave = document.querySelector("#btnSave")
btnSave.addEventListener ("click",async(e)=>{
    e.preventDefault()

    let allInputs = document.querySelectorAll(".inputValidator")
    allInputs = Array.from(allInputs)
    const result = allInputs.filter((input)=>{
        if(input.value.length<1){
            showToast("error","field required")
            return false
        }
        return console.log('Working') 
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