const logout = async () => {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logOutBtn1').addEventListener('click', logout);
document.querySelector('#logOutBtn2').addEventListener('click', logout);
