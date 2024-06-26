 const form=document.getElementById('form');
 const username=document.getElementById('username');
 const email=document.getElementById('email');
 const phonenumber=document.getElementById('phonenumber');
 const dob=document.getElementById('dateofbirth');
 const password=document.getElementById('password');
 const password2=document.getElementById('confirmpassword');
 var popup=document.getElementById('popup');
 function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
 }
 function showSuccess(input){
    formControl=input.parentElement;
    formControl.className='form-control success';
 }
 
 function checkRequired(inputArr){
   inputArr.forEach(function (input){
      if(input.value.trim()===""){
         showError(input,`${getFieldName(input)} is Required`);
      }
      else{
         showSuccess(input);
      }
   });
 }
 function getFieldName(input){
   return input.id;
 }
 function checkEmail(email){
   const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
   if(!regex.test(email.value.trim())){
      showError(email,'Enter valid Email');
   }
   else{
      showSuccess(email);
   }
 }
 function checkLength(input,min){
   if(input.value.length<min){
      showError(input,`username must be atleast ${min} characters`)
   }
   else{
      showSuccess(input);
   }
 }
 function checkPassword(input,username,input1,min){
   if(input.value==username.value){
      showError(input,'password and username cant be same');
   }
   else if(input.value.length<min){
      showError(input,`${getFieldName(input)} must be atleast ${min} characters`)
   }
   else if(input.value!==input1.value){
      showError(input1,'password do not match')
   }
   else{
      popup.classList.add("open-slide");
      showSuccess(input);
   }
 }
 function checkPhoneNumber(input){
   if(input.value=='123456789'){
      showError(input,'phone cant be 123456789');
   }
   else if(input.value.length!=10){
      showError(input,'phone number must have 10 numbers');
   }
   else{
      showSuccess(input);
   }
 }

 form.addEventListener('submit',function(e) {
    e.preventDefault();
    checkRequired([username,email,phonenumber,dob,password,password2]);
    checkLength(username,5);
    checkPhoneNumber(phonenumber);
    checkEmail(email); 
    checkPassword(password,username,password2,8);
 });