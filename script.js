

      var httpRequest = new XMLHttpRequest();
      
      function sendGetRequest() {
         httpRequest.onreadystatechange = writeContent;
      
         httpRequest.open('GET', 'https:/\/codeliber.com/test-server.php');
         httpRequest.send();
      }
      
      function writeContent() {
         if(httpRequest.readyState === 4) {
            if(httpRequest.status == 200) {
               var response = httpRequest.responseText;
               document.getElementById("demo").innerHTML = response;
            } else {
               alert('There was a problem with the request.');
            }
         } else {
            // response not ready yet
         }
      }




















