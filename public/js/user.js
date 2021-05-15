


const adminUpdate = async (event) => {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/user/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ 
            request_admin: false,
            admin: true,
        }),
        headers: { 'Content-Type': 'application/json' },
        });

}

document.querySelector('.userBody').addEventListener("click",adminUpdate)


