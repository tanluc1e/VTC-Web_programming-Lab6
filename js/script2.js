/* Save Code

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
        var element = document.createElement("li")
        element.textContent = localStorage.getItem(localStorage.key(submitList[i]))
        var deleteTask = document.createElement('input');
        deleteTask.setAttribute('type', 'submit');
        deleteTask.setAttribute('value', 'X');
        deleteTask.setAttribute('id', 'delete')
        element.appendChild(deleteTask);
        myUL.appendChild(element)

        deleteTask.addEventListener('click', function() {
            var index = localStorage.getItem(localStorage.key(submitList[i]))
            submitList.splice(index, 1);
            myUL.removeChild();
        });
    }



*/