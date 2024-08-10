let id = location.hash.slice(1)

let user = JSON.parse(localStorage.getItem(`user_${id}`))

fname.value = user.fname
lname.value = user.lname
email.value = user.email
img.src = `./img/${user.image}`

function edit() {
    user.fname = fname.value
    user.lname = lname.value
    user.email = email.value

    if (image.files.length > 0) {
        user.image = image.files[0]['name']
    }

    localStorage.setItem(`user_${id}`, JSON.stringify(user))

    location.href = 'users.html'
}
