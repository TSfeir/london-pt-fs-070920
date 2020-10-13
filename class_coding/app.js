const getUsername = () => {
    const username = window.localStorage.getItem(`username`);
    let newUser;
    if (username == null) {
      newUser = prompt(`Please enter a username`);
      window.localStorage.setItem(`username`, newUser);
    }
  };

  getUsername();