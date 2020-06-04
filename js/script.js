// function showForm() {
//   let el = document.getElementById("form");
//   if (el.classList.contains("d-none")) {
//     el.classList.remove("d-none");
//   }
// }
// function hideForm() {
//   let el = document.getElementById("form");
//   if (el.classList.contains("d-none")) {
//     el.classList.add("d-none");
//   }
// }


// alert function
function deleteContact(){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}
// end

function renderTable(){
  contactList=[{id='1',name='mohammad',lastName='sarabi',phone='09908183572',email='isdbv@gmail.com',birthday='80/1/28',details='nonthing'}]
}
