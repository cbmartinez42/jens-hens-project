const adminUpdate = async (event) => {
    console.log('userBody was clicked!');
    console.log('the event is as folows:',event);
    const id = event.target.getAttribute('data-id');
    console.log('and the id is ',id);

    const response = await fetch(`/api/user/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ 
            request_admin: false,
            admin: true,
        }),
        headers: { 'Content-Type': 'application/json' },
        });
    location.reload();

}

document.querySelector('.userBody').addEventListener("click",adminUpdate)
