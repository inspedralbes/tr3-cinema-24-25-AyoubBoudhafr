
const API_URL_SPRING = process.env.NEXT_PUBLIC_API_URL_SPRING;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getProductosTecnologicos = async (page, size) => {
  try {
    const response = await fetch(
      `${API_URL_SPRING}/tecnologia?pagina=${page}&tamaño=${size}`
    );
    
    if (!response.ok) throw new Error('Error en la solicitud GET');
    
    const data = await response.json();
    return data || [];
    
  } catch (error) {
    console.error('Error en fetch GET:', error);
    return [];
  }
};

export const crearTecnologico = async (tecnologia) => {
  try {
    const response = await fetch(`${API_URL_SPRING}/tecnologia`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tecnologia),
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud POST');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en fetch POST:', error);
    return null;
  }
};
export const getInmuebles = async (page = 0, size = 1) => {
  try {
    const response = await fetch(
      `${API_URL_SPRING}/inmuebles?pagina=${page}&tamaño=${size}`
    );
    if (!response.ok) throw new Error('Error en la solicitud GET');
    return await response.json();
  } catch (error) {
    console.error('Error en fetch GET:', error);
    return [];
  }
};
export const getMotor = async (page = 0, size = 1) => {
  try {
    const response = await fetch(
      `${API_URL_SPRING}/motor?pagina=${page}&tamaño=${size}`
    );
    if (!response.ok) throw new Error('Error en la solicitud GET');
    return await response.json();
  } catch (error) {
    console.error('Error en fetch GET:', error);
    return [];
  }
};
export const getLibros = async (page = 0, size = 1) => {
  try {
    const response = await fetch(
      `${API_URL_SPRING}/libro?pagina=${page}&tamaño=${size}`
    );
    if (!response.ok) throw new Error('Error en la solicitud GET');
    return await response.json();
  } catch (error) {
    console.error('Error en fetch GET:', error);
    return [];
  }
};
export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_URL_SPRING}/usuario/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }

    const data = await response.json();
    console.log('Respuesta del login:', data);
    return data;
  } catch (error) {
    console.error('Error en login:', error);
    return { success: false, message: 'Error en el login' };
  }
};

export const compra = async (datos) => {
  try{
    const response = await fetch(`${API_URL_SPRING}/transacciones`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    });
    const data = await response.json();
    return data;
  }catch(error){
    console.error('Error en fetch POST de compra: ', error)
    return null;
  }
}
export const register = async (credenciales) => {
  try{
    const response = await fetch(`${API_URL_SPRING}/usuario/register`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credenciales),
    });
    if(!response.ok){
      throw new Error('Error en la solicitud POST de register')
    }
    const data = await response.json();
    return data;
  }catch(error){
    console.error('Error en la solicitud POST de register: ',error);
    return null;
  }
}

export const getUnLibro = async (id) => {
  try{
    const response = await fetch(`${API_URL_SPRING}/libro/${id}`);
    if(!response.ok){
      throw new Error('Error la solicitud GET de libro')
    }
    const data = await response.json();
    return data;
  }catch(error){
    console.error('Error en el GET del libro',error);
    return null;
  }
}
export const getUnInmueble = async (id) =>{
  try{
    const response = await fetch(`${API_URL_SPRING}/inmuebles/${id}`);
    if(!response.ok){
      throw new Error('Error la solicitud GET de inmueble')
    }
    const data = await response.json();
    return data;
  }catch(error){
    console.error('Error en la solicitud GET de inmueble: ',error);
    return null;
  }
}
export const getUnMotor = async (id) =>{
  try{
    const response = await fetch(`${API_URL_SPRING}/motor/${id}`);
    if(!response.ok){
      throw new Error('Error la solicitud GET de motor')
    }
    const data = await response.json();
    return data;
  }catch(error){
    console.error('Error en la solicitud GET de motor: ',error);
    return null;
  }
}
export const getUnaTecnologia = async (id) =>{
  console.log(`${API_URL_SPRING}/tecnologia/${id}`);
  
  try{
    const response = await fetch(`${API_URL_SPRING}/tecnologia/${id}`);
    if(!response.ok){
      throw new Error('Error la solicitud GET de motor')
    }
    const data = await response.json();
    return data;
  }catch(error){
    console.error('Error en la solicitud GET de motor: ',error);
    return null;
  }
}
export const fetchUsuario = async (id, token) => {
  try {
    const response = await fetch(`${API_URL_SPRING}/usuario/infoUser/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error('Error en la solicitud GET de usuario');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en la solicitud GET de usuario: ', error);
    return null;
  }
}
export const getMensajesChat = async (id) => {
  try{
    const response = await fetch(`${API_URL_SPRING}/mensajes/${id}`);
    if(!response.ok){
      throw new Error('Error la solicitud GET de libro')
    }
    const data = await response.json();
    return data;
  }catch(error){
    console.error('Error en el GET del libro',error);
    return null;
  }
}