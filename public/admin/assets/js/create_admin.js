// Swal.fire({
//     title: "Good job!",
//     text: "You clicked the button!",
//     icon: "success",
//     showCancelButton: !0,
//     confirmButtonColor: "#556ee6",
//     cancelButtonColor: "#f46a6a",
//   });

const btnSave = document.querySelector('#btn-Save')
btnSave.addEventListener('click',async(event)=>{
    // event.preventDefault()
    let allInputs = document.querySelectorAll(".inputValidator")
    allInputs = Array.from(allInputs)

    const result = allInputs.filter((input) => {
        return input.value.length < 1;
    })
   
    if (result.length > 0) {
        showToast("error", "Missing fields");
    } else {
       
        
        const fullName = document.querySelector(".fullName").value
        const email = document.querySelector(".email").value
        const password = document.querySelector(".password").value
        const phoneNumber = document.querySelector(".phoneNumber").value
        const role = document.querySelector(".role").value
        // console.log(fullName,email,phoneNumber,password,role);
        const res = await axios.post("create-admin", {fullName,email,password,phoneNumber,role}) .then(response => {
            //    Assuming a successful response from the server
                showToast('success','Administrator added Successfully')
                window.location.reload()
                
             })
             .catch(error => {
               console.error('Error:', error);
               showToast('error', 'Failed to add Administrator');
             });
    }


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