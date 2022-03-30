export default () => {
  new LifesycleForm({
    formId: "uqZJLy5L06", // Indicates the identity of this form. is a required field.
  
    showLoading: true, // if true shows a full page loading screen when submit button clicked,
  
    showPopup: true,
  
    beforeSend: () => {
      // triggered just before form data is submitted
      console.log("beforeSend");
    },
  
    afterSend: (event, response) => {
      // triggered shortly after form data is submitted
      console.log("afterSend");
    },
  
    onSuccess: (event, response) => {
      // overrides lifesycles default operations like showing success messages and redirecting after successfull request, you can use lifesycle_response as callback data to manage your operations.
      console.log("onSuccess");
    },
  
    onError: (event, response) => {
      // overrides lifesycles default operations like showing error messages after unsuccessfull request, you can use lifesycle_response as callback data to manage your operations.
      console.log("onError");
    },
  
    validate: (form) => {
      // You can control the required fields in the form in this optional function.
  
      return true;
    },
  });
  
}