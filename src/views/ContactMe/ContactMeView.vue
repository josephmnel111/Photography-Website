<script setup>
</script>
<template>
  <div class = "contact-me-container">
    <div class="contact-me">
    <h1>Contact Me</h1>
    <form action="//submit.form" id="ContactUs100" method="post" onsubmit="return ValidateForm(this);">
      <table style="width:100%;max-width:550px;border:0;" cellpadding="8" cellspacing="0">
      <tr> <td>
      <label for="Name">Name*:</label>
      </td> <td>
      <input name="Name" type="text" maxlength="60" style="width:100%;max-width:250px;" />
      </td> </tr> <tr> <td>
      <label for="PhoneNumber">Phone number:</label>
      </td> <td>
      <input name="PhoneNumber" type="text" maxlength="43" style="width:100%;max-width:250px;" />
      </td> </tr> <tr> <td>
      <label for="FromEmailAddress">Email address*:</label>
      </td> <td>
      <input name="FromEmailAddress" type="text" maxlength="90" style="width:100%;max-width:250px;" />
      </td> </tr> <tr> <td>
      <label for="Comments">Comments*:</label>
      </td> <td>
      <textarea name="Comments" rows="7" cols="40" style="width:100%;max-width:350px;"></textarea>
      </td> </tr> <tr> <td>
      * - required fields
      </td> <td>
      <div style="float:right"><a href="https://www.100forms.com" id="lnk100" title="form to email">form to email</a></div>
      <input name="skip_Submit" type="submit" value="Submit" />
      </td> </tr>
      </table>
    </form>
  </div>

  </div>
</template>

<style>

.contact-me-container {
  position: relative;
  height: 100vh;
  width: 100vw;
}

.contact-me {
  margin-top: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}

h1 {
  text-align: center;
}

</style>

