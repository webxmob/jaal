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

function formNextStep() {
  document.querySelector('.form-main').innerHTML = `<div
class="container d-flex flex-column align-items-center justify-content-center"
>
<p>We’re tingling to learn about your</p>
<h1 class="font-weight-bold">New Project</h1>
<form class="row user-info-form p-0 m-0 ml-xl-5" id="form2">
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
  />
  <input
    type="text"
    placeholder="Enter Organization Name"
    name="organization"
    class="col-11 col-md-5 ml-2 ml-md-4 my-2 p-0 py-2"
    style="border: none; border-bottom: 1px solid black"
  />
  <input
    type="email"
    placeholder="Enter Your Email"
    name="email"
    class="col-11 col-md-5 ml-2 ml-md-5 my-2 p-0 py-2"
    style="border: none; border-bottom: 1px solid black"
  />
  <input
    type="number"
    placeholder="Enter Phone Number"
    name="phone"
    class="col-11 col-md-5 ml-2 ml-md-4 my-2 p-0 py-2"
    style="border: none; border-bottom: 1px solid black"
  />
  <div
    class="col-12 col-lg-6 d-flex align-items-start justify-content-start p-0 pl-2 pl-md-5 pt-3"
  >
    <input type="checkbox" name="agreed" />
    <label for="agreed" class="pl-1">
      I have read and agree to the terms under Privacy Policy and Terms
      of use. This site is protected by reCAPTCHA and the Google Privacy
      Policy and Terms of Service apply.
    </label>
  </div>
  <div class="col-12 p-0 pl-2 pl-md-5 mt-3">
    <span class="proceed-next-form-btn font-weight-bold" onclick="formPreStep()">
      <i class="far fa-arrow-alt-circle-left"></i>
      Back
    </span>
  </div>
  <button
    type="submit"
    class="ml-2 ml-md-5 mt-4 form-submission-button"
  >
    Submit
  </button>
</form>
</div>`;
}

function formPreStep() {
  document.querySelector('.form-main').innerHTML = `<div
  class="container d-flex flex-column align-items-center justify-content-center"
>
  <p>We’re tingling to learn about your</p>
  <h1 class="font-weight-bold">New Project</h1>
  <form class="row query-topic-checkboxes p-0 m-0" id="form1">
    <h6 class="col-12 pt-4 pl-3 align-self-start font-weight-bold">
      How can we help?
    </h6>
    <div class="col-12 col-lg-6 pt-3">
      <input type="checkbox" name="Mobile App Development" />
      <label for="Mobile App Development">Mobile App Development</label>
      <br />
      <input type="checkbox" name="UI/UX" />
      <label for="UI/UX">UI/UX</label>
      <br />
      <input type="checkbox" name="Design Thinking" />
      <label for="Design Thinking">Design Thinking</label>
    </div>
    <div class="col-12 col-lg-6">
      <input type="checkbox" name="Web App Development" />
      <label for="Web App Development">Web App Development</label>
      <br />
      <input type="checkbox" name="Quality Assurance" />
      <label for="Quality Assurance">Quality Assurance</label>
      <br />
      <input type="checkbox" name="Technical / Digital Consulting" />
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
      <span
        class="proceed-next-form-btn font-weight-bold"
        onclick="formNextStep()"
      >
        <i class="far fa-arrow-alt-circle-right"></i>
        Next
      </span>
    </div>
  </form>
</div>`;
}
