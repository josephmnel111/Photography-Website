<script>

  import { defineComponent } from 'vue';
  import emailjs from 'emailjs-com';

  export default defineComponent({

    data: function() {
      return {
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        comment: '',

        valid: true,
        success: false,

        firstNameInvalid: false,
        lastNameInvalid: false,
        emailInvalid: false,
        commentInvalid: false
      }
    },
    methods: {
      sendEmail(e) {
        try {
          emailjs.sendForm('service_7yp64md', 'template_7zt70h6', e.target,
          'JZwARAYCRy4wAr2jr', {
            firstName: this.firstName,
            lastName: this.lastName,
            emailAddress: this.emailAddress,
            phoneNumber: this.phoneNumber,
            comment: this.comment
        })

      } catch(error) {
          console.log({error})
      }

      },
      clearValues() {
          document.getElementById('firstName').value = ''
          document.getElementById('lastName').value = ''
          document.getElementById('emailAddress').value = ''
          document.getElementById('phoneNumber').value = ''
          document.getElementById('comment').value = ''
      },
      checkFormFilled() { //Checks to see if the required inputs are filled
        this.valid = true
        if (this.firstName == '') {
          this.valid = false
          this.firstNameInvalid = true
        } else {
          this.firstNameInvalid = false
        }
        if (this.lastName == '') {
          this.valid = false
          this.lastNameInvalid = true
        } else {
          this.lastNameInvalid = false
        }
        if (this.emailAddress == '') {
          this.valid = false
          this.emailInvalid = true
        } else {
          this.emailInvalid = false
        }
        if (this.comment == '') {
          this.valid = false
          this.commentInvalid = true
        } else {
          this.commentInvalid = false
        }

        if (this.valid == true) { //Changes all values to '' on successful submit

          this.success = true;
          setTimeout(()=>{  //Sets a successful submit message for 2 seconds                   
            this.success = false;
          }, 2000);
          return true
        } else {
          return false
        }

      },

      submitValues(submitEvent) { //Changes all the values on submit
        this.firstName = submitEvent.target.elements.firstName.value
        this.lastName = submitEvent.target.elements.lastName.value
        this.emailAddress = submitEvent.target.elements.emailAddress.value
        this.phoneNumber = submitEvent.target.elements.phoneNumber.value
        this.comment = submitEvent.target.elements.comment.value

        let success = this.checkFormFilled()

        if (success == true) { //If message can be successfully sent, send to email
          this.sendEmail(submitEvent)
          this.clearValues()
        }

      }
    }
  })

</script>
<template>
  <div class = "contact-me-container">
    <div class="contact-me">
    <h1>Contact Me</h1>
    <form @submit.prevent="submitValues" id = "submission-form">

      <div class = "name-container">
        
        <div class = "input-container">
          <label class = "input-box-label" for="FirstName">FIRST NAME</label>
          <textarea id = "firstName" class = "input-box" :class='{"error": firstNameInvalid}' name="firstName" type="text"></textarea>
        </div>

        <div class = "input-container">
          <label class = "input-box-label" for="LastName">LAST NAME</label>
          <textarea id = "lastName" class = "input-box" :class='{"error": lastNameInvalid}' name="lastName" type="text"></textarea>
        </div>
      </div>


      <div class = "contact-info-container">

        <div class = "input-container">
          <label class = "input-box-label" for="FromEmailAddress">EMAIL ADDRESS</label>
          <textarea id = "emailAddress" class = "input-box" :class='{"error": emailInvalid}' name="emailAddress" type="text"></textarea>
        </div>

        <div class = "input-container">
          <label class = "input-box-label" for="PhoneNumber">PHONE NUMBER</label>
          <textarea id = "phoneNumber" class = "input-box" name="phoneNumber" type="text"></textarea>
        </div>

      </div>

      <div class = "input-container">
        <label class = "input-box-label" for="Comments">COMMENTS</label>
        <textarea id = "comment" class = "comment-box" name="comment" :class='{"error": commentInvalid}' rows="7" cols="40" type = "text"></textarea>
      </div>
      <div class = "error-container" :class='{"hide-error": valid}'>
        Please fill in the required sections.
      </div>
      <div class = "success-container" :class='{"hide-success": !success}'>
        Information Successfully sent.
      </div>
      <div class = "button-container">
        <input class = "submit-button" name="skip_Submit" type="submit" value="Submit" />
      </div>
    </form>
  </div>

  </div>
</template>

<style>

.contact-me-container {
  font-family: 'Gotham';
  position: relative;
  height: 100vh;
  width: 100vw;
}

.contact-me {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}
.name-container {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}
.input-container {
  display: flex;
  flex-direction: column;
  margin: 10px;
}
.input-box-label {
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
}
.input-box {
  border-color: black;
  height: 30px;
  width: 200px;
  border-radius: 8px;
}
.comment-box {
  border-radius: 8px;
}
.button-container {
  margin-top: 15px;
  text-align: center;
}
.submit-button {
  background-color: #243B2A;
  height: 40px;
  width: 160px;
  border-radius: 8px;
  color: white;
  font-weight: 600;
}
.contact-info-container {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}
.comment-container {
  margin-top: 20px;
}
.error {
  border-color: red;
}
.error-container {
  text-align: center;
  color: red;
}
.hide-error {
  display: none;
}
.success-container {
  text-align: center;
  color: green;
}
.hide-success {
  display: none;
}
h1 {
  text-align: center;
}
textarea {
  resize: none;
}
</style>

