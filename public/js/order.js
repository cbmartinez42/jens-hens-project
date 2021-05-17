
const adminUpdate = async (event) => {
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

document.querySelector('.orderBody').addEventListener("click",adminUpdate)
