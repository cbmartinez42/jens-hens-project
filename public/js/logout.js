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


const logOutBtn1 = document.querySelector('#logOutBtn1');
const logOutBtn2 = document.querySelector('#logOutBtn2');


if (logOutBtn1) {
logOutBtn1.addEventListener('click', logout);
}

if (logOutBtn2) {
  logOutBtn2.addEventListener('click', logout);
  }
