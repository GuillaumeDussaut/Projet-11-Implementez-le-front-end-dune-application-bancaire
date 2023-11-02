//  fonction login
export async function callApiLogin(email, password) {
  const requestBody = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error('Échec de la connexion. Vérifiez vos informations d\'identification.');
    }

    const data = await response.json();

    if (data && data.body && data.body.token) {
      const authToken = data.body.token;

      return authToken;
    } else {
      throw new Error('La réponse du serveur ne contient pas de token valide.');
    }
  } catch (err) {
    throw err;
  }
}

// Fonction données utilisateur
export async function callApiGetUserData(authToken) {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`
      },
    });

    if (!response.ok) {
      throw new Error('Échec de la récupération du pseudo.');
    }

    const data = await response.json();
    if (data && data.body && data.body.firstName && data.body.lastName && data.body.userName) {
      const userProfile = {
        firstName: data.body.firstName,
        lastName: data.body.lastName,
        userName:data.body.userName,
      };
      return userProfile;
    } else {
      throw new Error('La réponse du serveur ne contient pas de pseudo valide.');
    }
  } catch (err) {
    throw err;
  }
}
// changement pseudo
export async function callApiUpdateUserName(authToken, newUserName) {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName: newUserName }),
    });

    if (!response.ok) {
      throw new Error('Échec de la mise à jour du nom d\'utilisateur.');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}



  
  
