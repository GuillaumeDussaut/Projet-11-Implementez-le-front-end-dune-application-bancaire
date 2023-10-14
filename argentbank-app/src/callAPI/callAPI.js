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
      console.log('Connexion réussie ! Token:', authToken);
      return authToken;
    } else {
      throw new Error('La réponse du serveur ne contient pas de token valide.');
    }
  } catch (err) {
    throw err;
  }
}
  
  
