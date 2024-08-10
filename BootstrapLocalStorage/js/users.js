function show() {
    tbody.innerHTML = ''
    let count = localStorage.getItem('id')

    for (let i = 1; i <= count; i++) {
        let user = JSON.parse(localStorage.getItem(`user_${i}`))

        if (user) {
            tbody.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.fname}</td>
                    <td>${user.lname}</td>
                    <td>${user.email}</td>
                    <td class="w-25 text-center">
                    <img class="w-75 rounded rounded-circle img-thumbnail" src='./img/${user.image}'></img>
                    </td>
                    <td>
                        <div>
                        <a href="edit.html#${user.id}" class="btn btn-primary">
                        <i class="fa fa-pen"></i>
                        </a>
                        <a href="#" class="btn btn-danger" onclick="remove(${user.id})">
                        <i class="fa fa-trash-alt"></i>
                        </a>
                        </div>
                    </td>
                </tr>
            `
        }

    }
}

function remove(id) {

    localStorage.removeItem(`user_${id}`)
    if (localStorage.length === 1) {
        localStorage.clear()
    }
    show()
}

show()