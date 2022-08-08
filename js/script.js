function bt_submit(){

    var checkSuccess = true;

    //Reset input
    document.getElementById("fullName_error").innerText = "";
    document.getElementById("email_error").innerText = "";
    document.getElementById("phone_error").innerText = "";
    document.getElementById("country").style.border = "";
    document.getElementById("country_error").innerText = "";
    
    //Get value
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var country = document.getElementById("country");
    var country_err = country.options[country.selectedIndex].value;

    //Check full name 
    if (fullName == "") {
        document.getElementById("fullName_error").innerHTML = "❌ Vui lòng nhập họ tên<br>";
        checkSuccess = false;
    }
    if (/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/.test(fullName)){
        checkSuccess = false;
    } else if (fullName != ""){
        document.getElementById("fullName_error").innerHTML = "❌ Họ tên nhập chưa đúng định dạng<br>";
        checkSuccess = false;
    }

    //Check email 
    if (email == "") {
        document.getElementById("email_error").innerHTML = "❌ Vui lòng nhập email<br>";
        checkSuccess = false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
        checkSuccess = false;
    } else if (email != ""){
        document.getElementById("email_error").innerHTML = "❌ Email nhập chưa đúng định dạng<br>";
        checkSuccess = false;
    }

    //Check phone number 
    if (phone == "") {
        document.getElementById("phone_error").innerHTML = "❌ Vui lòng nhập số điện thoại<br>";
        checkSuccess = false;
    }
    if (/^[a-zA-Z0-9\-().\s]{10,15}$/.test(phone))
    {
        checkSuccess = false;
    } else if (phone != ""){
        document.getElementById("phone_error").innerHTML = "❌ Số điện thoại nhập chưa đúng, hoặc thiếu<br>";
        checkSuccess = false;
    }

    //Check country
    if (country_err == "null") {
        document.getElementById("country").style.border = "2px solid red";
        document.getElementById("country_error").innerHTML = "❌ Vui lòng chọn quốc gia<br>";
        checkSuccess = false;
    }

    if(fullName != "" && email != "" && phone != "" && country_err != "null" && document.getElementById("fullName_error").innerHTML == "" && document.getElementById("email_error").innerHTML == "" && document.getElementById("phone_error").innerHTML == ""){
        checkSuccess = true;
    }
    if (checkSuccess == false){
        document.getElementById("success").innerHTML = "";
    }
    if (checkSuccess == true){
        document.getElementById("success").innerHTML = "✅ Thành công<br>";

        var submitList = [];
        var newFullName = document.getElementById('fullName').value;
        var newEmail = document.getElementById('email').value;
        var newPhone = document.getElementById('phone').value;
        var newGender = document.getElementById('gender').value;
        var newCountry = document.getElementById('country').value;
        var newComment = document.getElementById('comment').value;

        submitList.push({
            Name: newFullName,
            Email: newEmail,
            Phone: newPhone,
            Gender: newGender,
            Country: newCountry,
            Comment: newComment,
        })

        localStorage.setItem("Items", JSON.stringify(submitList)); // store as a string
        console.log(window.localStorage.getItem('Items'))

        for (var i = 0; i < submitList.length; i++) {
            
            let li = document.createElement("li")
            li.classList.add("submitListItems")

            myUL.appendChild(li)

            let printFullName = document.createElement("p")
            printFullName.classList.add("printFullName")
            printFullName.innerHTML = `${"▪ " + submitList[i].Name }`
            myUL.appendChild(printFullName)

            let printEmail = document.createElement("p")
            printEmail.classList.add("printEmail")
            printEmail.innerHTML = `${submitList[i].Email}`
            myUL.appendChild(printEmail)

            let printPhone = document.createElement("p")
            printPhone.classList.add("printPhone")
            printPhone.innerHTML = `${submitList[i].Phone}`
            myUL.appendChild(printPhone)

            let printGender = document.createElement("p")
            printGender.classList.add("printGender")
            printGender.innerHTML = `${submitList[i].Gender}`
            myUL.appendChild(printGender)

            let printCountry = document.createElement("p")
            printCountry.classList.add("printCountry")
            printCountry.innerHTML = `${submitList[i].Country}`
            myUL.appendChild(printCountry)

            let printComment = document.createElement("p")
            printComment.classList.add("printComment")
            printComment.innerHTML = `${submitList[i].Comment}`
            myUL.appendChild(printComment)

            let div = document.createElement("div")
            div.classList.add("tools")

            let text = document.createTextNode("X")
            let btn = document.createElement("button")
            btn.classList.add("delBtn")
            btn.setAttribute("onclick", "deleteBtn("+ i +")")
            btn.appendChild(text)
            div.appendChild(btn)

            li.appendChild(div)
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////
}



function bt_reset(){
    document.getElementById("fullName_error").innerText = "";
    document.getElementById("email_error").innerText = "";
    document.getElementById("phone_error").innerText = "";
    document.getElementById("country").style.border = "";
    document.getElementById("country_error").innerText = "";
    document.getElementById("success").innerText = "";
}
