const btnSave = document.querySelector("#btnSave")
btnSave.addEventListener ("click",async(e)=>{
    e.preventDefault()

    let allInputs = document.querySelectorAll(".inputValidator")
    allInputs = Array.from(allInputs)
    const result = allInputs.filter((input)=>{

        if(input.value.length<1){
            showToast("error","field required")
            // return false
        }

    })

    const usernameInput = document.querySelector('#user_name');
    const passwordInput = document.querySelector('#password');

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username.trim() === "demo" && password.trim() === "123") {
        console.log("Login successful");
        window.location.href='/admin/dashboard'
        // Add code here to navigate or perform actions after successful login
    } else {
        showToast("error", "Access denied. Please check your username and password.");
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