// UI vars
const addBtn        = document.querySelector('.add-contact'),
      contacts      = document.querySelector('#contacts'),
      contactClick  = document.querySelector('.contact-click'),
      ruler         = document.querySelectorAll('.ruler');
      

// UI toggle options
let show= false;

// Add Contact Class
class AddContact {
    constructor(firstName, lastName, phone) {
        this.firstName  = firstName;
        this.lastName   = lastName;
        this.phone      = phone;
    }
}

// UI class
class UI {
    displayToUI(contactObj) {
        const a= document.createElement('a');
        a.setAttribute('href', '#');
        a.className= 'contact-click';
        a.innerHTML= `
            <div class="contact">
                <b>${contactObj.firstName} ${contactObj.lastName}</b>
            </div>
            <hr class="line">
        `;
        contacts.appendChild(a);
    }
}
// Init
const ui= new UI();


// add button event
addBtn.addEventListener('click', function(){
    const header        = document.querySelector('#add-contacts'),
          searchTitle   = document.querySelector('#search-title'),
          myNumber      = document.querySelector('#my-number'),
          contacts      = document.querySelector('#contacts'),
          line          = document.querySelector('.line'),
          nameFields    = document.querySelector('#nameFields'),
          addHTML       = document.querySelector('#addContact');

    // Remove UI
    header.style.display        = 'none';
    searchTitle.style.display   = 'none';
    myNumber.style.display      = 'none';
    contacts.style.display      = 'none';
    line.style.display          = 'none';
    
    ruler.forEach(function(rul){
        rul.style.display = 'none';
    });

    // Display Add options
    addHTML.setAttribute('style', 'display: block !important');

    // Add HTML into 'nameFields' variable
    nameFields.innerHTML= `
        <input type="text" id="firstName" placeholder="First Name">
        <input type="text" id="lastName" placeholder="Last Name">
        <input type="text" id="phoneNumber" placeholder="Phone">
    `;
    
    nameFields.setAttribute('style', 'display: block !important');

    // UI Elements Grab
    const parent= document.querySelector('.header-options');

    // if(parent.firstElementChild === document.querySelector('button')) {
    //     console.log("HI");
    // }

    const cancelBtn= nameFields.previousElementSibling.firstElementChild.firstElementChild;
    const doneBtn= nameFields.previousElementSibling.firstElementChild.lastElementChild;

    // Show Home State on Cancel Button click
    cancelBtn.addEventListener('click', function() {
        // console.log("Clicked");

        // Show UI
        header.style.display        = 'block';
        searchTitle.style.display   = 'block';
        myNumber.style.display      = 'block';
        contacts.style.display      = 'block';
        line.style.display          = 'block';

        ruler.forEach(function(rul){
            rul.style.display = 'inline';
        });

        // Hide Add options
        addHTML.setAttribute('style', 'display: none !important');

        // Hide input fields
        nameFields.setAttribute('style', 'display: none !important');

        document.querySelector('.ruler').style.width= '100%';
    });

    // Add Data
    doneBtn.addEventListener('click', function() {
        const firstName = document.getElementById('firstName').value,
              lastName  = document.getElementById('lastName').value,
              phone     = document.getElementById('phoneNumber').value;
        
        // Add Contact
        const contact= new AddContact(firstName, lastName, phone);

        
        // Add to UI
        ui.displayToUI(contact);

    });

});