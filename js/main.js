// navbar scroll effect

window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    document
      .getElementsByClassName('navbar')[0]
      .classList.add('navbar-scrolled');
    document;
    document
      .getElementsByClassName('contact_us_link')[0]
      .classList.add('onscroll-color');
  } else {
    document
      .getElementsByClassName('navbar')[0]
      .classList.remove('navbar-scrolled');
    document
      .getElementsByClassName('contact_us_link')[0]
      .classList.remove('onscroll-color');
  }
});

// var data = localStorage.getItem('queryData')
//   ? JSON.parse(localStorage.getItem('queryData'))
//   : [];

function formNextStep() {
  document.getElementById('form').innerHTML = `<div class="row m-0 p-0 ml-5">
  <h6
    class="col-12 pt-4 pl-2 pl-md-5 align-self-start font-weight-bold text-left"
  >
    Tell us about yourself
  </h6>
  <input
    type="text"
    placeholder="Enter Your Name"
    name="username"
    class="col-11 col-md-5 ml-2 ml-md-5 my-2 p-0 py-2"
    style="border: none; border-bottom: 1px solid black"
    required
  />
  <input
    type="text"
    placeholder="Enter Organization Name"
    name="organization"
    class="col-11 col-md-5 ml-2 ml-md-4 my-2 p-0 py-2"
    style="border: none; border-bottom: 1px solid black"
    required
  />
  <input
    type="email"
    placeholder="Enter Your Email"
    name="email"
    class="col-11 col-md-5 ml-2 ml-md-5 my-2 p-0 py-2"
    style="border: none; border-bottom: 1px solid black"
    required
  />
  <input
    type="number"
    placeholder="Enter Phone Number"
    name="phone"
    class="col-11 col-md-5 ml-2 ml-md-4 my-2 p-0 py-2"
    style="border: none; border-bottom: 1px solid black"
    required
  />
  <div
    class="col-12 col-lg-6 d-flex align-items-start justify-content-start p-0 pl-2 pl-md-5 pt-3"
  >
    <input type="checkbox" name="agreed" class="mt-1" />
    <label for="agreed" class="pl-1">
      I have read and agree to the terms under Privacy Policy and
      Terms of use. This site is protected by reCAPTCHA and the Google
      Privacy Policy and Terms of Service apply.
    </label>
  </div>
  <div class="col-12 p-0 pl-2 pl-md-5 mt-3">
    <span class="proceed-next-form-btn font-weight-bold" onclick="formPreStep()">
      <i class="far fa-arrow-alt-circle-left"></i>
      Back
    </span>
  </div>
  <button
    class="ml-2 ml-md-5 mt-4 form-submission-button"
    type="button"
    onclick="formSubmissionFunction()"
  >
    Submit
  </button>
</div>`;
}

function formPreStep() {
  document.getElementById('form').innerHTML = `<div class="row p-0 m-0">
  <h6 class="col-12 pt-4 pl-3 align-self-start font-weight-bold">
    How can we help?
  </h6>
  <div class="col-12 col-lg-6 pt-3">
    <input
      type="checkbox"
      name="Mobile App Development"
      class="checkbox-input"
    />
    <label for="Mobile App Development">Mobile App Development</label>
    <br />
    <input type="checkbox" name="UI/UX" class="checkbox-input" />
    <label for="UI/UX">UI/UX</label>
    <br />
    <input
      type="checkbox"
      name="Design Thinking"
      class="checkbox-input"
    />
    <label for="Design Thinking">Design Thinking</label>
  </div>
  <div class="col-12 col-lg-6">
    <input
      type="checkbox"
      name="Web App Development"
      class="checkbox-input"
    />
    <label for="Web App Development">Web App Development</label>
    <br />
    <input
      type="checkbox"
      name="Quality Assurance"
      class="checkbox-input"
    />
    <label for="Quality Assurance">Quality Assurance</label>
    <br />
    <input
      type="checkbox"
      name="Technical / Digital Consulting"
      class="checkbox-input"
    />
    <label for="Technical / Digital Consulting">
      Technical/Digital Consulting
    </label>
  </div>
  <div class="col-12 pt-4">
    <label for="description" class="font-weight-bold h6">
      Description
    </label>
    <br />
    <textarea
      name="description"
      class="w-100 pt-2"
      placeholder="Enter your project description here"
      style="border: none; border-bottom: 1px solid black"
      required
    ></textarea>
  </div>
  <div class="pl-3 pt-5">
    <span class="proceed-next-form-btn font-weight-bold">
      <i class="far fa-arrow-alt-circle-right"></i>
      Next
    </span>
  </div>
</div>`;
}

// if (localStorage.getItem('queryData')) {
//   formNextStep();
// }

// filling form 1

var checkboxInputs = document.querySelectorAll('.checkbox-input');

document
  .querySelector('.proceed-next-form-btn')
  .addEventListener('click', () => {
    var check = 0;
    for (i = 0; i < checkboxInputs.length; i++) {
      if (checkboxInputs[i].checked === true) {
        check = check + 1;
      }
    }
    if (check < 3) {
      alert('Kindly select minimum 3 options');
    } else {
      formNextStep();
    }
  });

// filling second form

var mobileAppDevelopment =
    document.forms['form']['Mobile App Development'].checked,
  UI_UX = document.forms['form']['UI/UX'].checked,
  designThinking = document.forms['form']['Design Thinking'].checked,
  webAppDevelopment = document.forms['form']['Web App Development'].checked,
  qualityAssurance = document.forms['form']['Quality Assurance'].checked,
  technical_DigitalConsulting =
    document.forms['form']['Technical / Digital Consulting'].checked,
  description = document.forms['form']['description'].value;

function formSubmissionFunction() {
  var username = document.forms['form']['username'].value,
    organization = document.forms['form']['organization'].value,
    email = document.forms['form']['email'].value,
    phone = document.forms['form']['phone'].value,
    agreed = document.forms['form']['agreed'].checked;

  console.log(
    mobileAppDevelopment,
    UI_UX,
    designThinking,
    webAppDevelopment,
    qualityAssurance,
    technical_DigitalConsulting,
    description,
    username,
    organization,
    email,
    phone,
    agreed,
  );
}
