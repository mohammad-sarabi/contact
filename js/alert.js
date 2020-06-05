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

let contactList=[{id:'1',name:'mohammad',lastName:'sarabi',phone:'09908183572',email:'isdbv@gmail.com',birthday:'80/1/28',details:'nonthing'}
];


  document.getElementById("contactForm").addEventListener("submit",function (event){
      event.preventDefault();
      const new_contactDate= new FormData(document.querySelector('form'));
      let newContact = {};
      for(item of new_contactDate.entries()){
          console.log(item)
          newContact[item[0]]=item[1]
      }
      contactList=[...contactList,newContact]
      console.log(newContact)
  })