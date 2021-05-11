
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
  
  document.querySelector('.posts-container').addEventListener('click', postHandler)