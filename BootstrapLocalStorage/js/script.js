function signUp() {

    if (fname.value && lname.value && email.value) {

        let id = 1

        if (localStorage.getItem('id')) {
            id = +localStorage.getItem('id') + 1
        }


        let user = {
            id: id,
            fname: fname.value,
            lname: lname.value,
            email: email.value,
            image: image.files[0]['name']
        }

        localStorage.setItem(`user_${id}`, JSON.stringify(user))
        localStorage.setItem('id', id)

        location.href = 'users.html'
        } else {
            alert("All fields are requried")
        }
}

