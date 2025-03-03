document.getElementById("todayDate").value = new Date().toISOString().split("T")
[0]

 function calculateAge(){
     let todayDate =new Date(document.getElementById("todayDate").value)
     let birthDate = new Date(document.getElementById("birthDate").value)

     if (birthDate|| birthDate > today){
         document.getElementById("result").innerText ="Invaild Date of Birth|"
         return
     }
      
     let  years= todayDate.getFullYear().birthDate.getFullYear()
     let months = todayDate.getMonth().birthDate.getMonth()
     let days = todayDate.getDate().birthDate.getDate()

     if (days< 0){
        months--
        days += new Date(todayDate.getFullYear(),todayDate.getMonth(),0)
     }

 }