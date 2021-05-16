const userBody = document.querySelector('.userBody')
const adminBtn = document.querySelector('#requestAdminBtn')

const requestAdmin = async (e) => {
    e.preventDefault();
    const id=e.target.getAttribute()
    const response = await fetch(`/api/user/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            request_admin: true,
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    location.reload();
}

const postHandler = (event) => {

    if (event.target.hasAttribute('data-delete-id')) {
        deletePost(event);
    } else if (event.target.hasAttribute('data-edit-id')) {
        editPost(event);
    }
};

const deletePost = async (event) => {
    const id = event.target.getAttribute('data-delete-id');

    let confirmation = confirm('This will delete the post, and cannot be undone. Would you like to continue?');

    if (confirmation === true) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

const editPost = async (event) => {
    const id = event.target.getAttribute('data-edit-id');
    window.location.replace(`/edit-post/${id}`)
}

document.querySelector('.orders-container').addEventListener('click', postHandler)




const adminUpdate = async (event) => {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/user/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            request_admin: false,
            admin: true,
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });

}



if (userBody) {
    userBody.addEventListener("click", adminUpdate)
}

if (adminBtn) {
    adminBtn.addEventListener("click", requestAdmin)
}