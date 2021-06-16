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

const orderUpdate = async (event) => {
    event.preventDefault();
    console.log('orderBody was clicked!');
    console.log('the event is as folows:',event);
    const id = event.target.getAttribute('data-id');
    console.log('and the id is ',id);

    const response = await fetch(`/api/order/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ 
            fulfilled: true,
        }),
        headers: { 'Content-Type': 'application/json' },
        });
    location.reload();

}

document.querySelector('.orderBody').addEventListener("click", orderUpdate)


const adminUpdate = async (event) => {
    const id = event.target.getAttribute('data-id');
    console.log('approve admin clicked')
    const response = await fetch(`/api/user/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            admin: true,
            request_admin: false,
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if (response.ok) {
        location.reload()
    }
}



if (userBody) {
    userBody.addEventListener("click", adminUpdate)
}

if (adminBtn) {
    adminBtn.addEventListener("click", requestAdmin)
}