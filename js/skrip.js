
        function validateForm() {
            var name =document.forms['message-form']['full-name'].value
            var date =document.forms['message-form']['birth-date'].value
            var radio =document.forms['message-form']['gender'].value
            var messages =document.forms['message-form']['messages'].value
            
            document.getElementById("sender-full-name").innerText=name
            document.getElementById("sender-birth-date").innerText=date
            document.getElementById("sender-gender").innerText=radio
            document.getElementById("sender-messages").innerText=messages
            return false;
        }

