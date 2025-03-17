
const API_URL_SPRING = process.env.NEXT_PUBLIC_API_URL_SPRING;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getProductosTecnologicos = async () => {
  try {

    const response = await fetch(`${API_URL_SPRING}/tecnologia`);

    if (!response.ok) {
      throw new Error('Error en la solicitud GET');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en fetch GET:', error);
    return null;
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
export const getInmuebles = async () => {
  try { 
    console.log(`${API_URL_SPRING}/inmuebles`);
    
    const response = await fetch(`${API_URL_SPRING}/inmuebles`);

    if (!response.ok) {
      throw new Error('Error en la solicitud GET');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en fetch GET:', error);
    return null;
  }
};
export const getMotor = async () => {
  try { 

    const response = await fetch(`${API_URL_SPRING}/motor`);

    if (!response.ok) {
      throw new Error('Error en la solicitud GET');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en fetch GET:', error);
    return null;
  }
};
export const login = async (credenciales) => {
  try{
    const response = await fetch(`${API_URL_SPRING}/usuario/login`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credenciales),
    });
    if(!response.ok){
      throw new Error('Error en la solicitud POST de login')
    }
    const data = response.json();
    return data;
  }catch(error){
    console.error('Error en fetch POST de login: ', error)
    return null;
  }
}
export const register = async (credenciales) => {
  try{
    const response = fetch(`${API_URL_SPRING}/usuario/register`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credenciales),
    });
    if(!response.ok){
      throw new Error('Error en la solicitud POST de register')
    }
    const data = response.json();
    return data;
  }catch(error){
    console.error('Error en la solicitud POST de register: ',error);
    return null;
  }
}

export const getLibros = async () => {
  try {

    const response = await fetch(`${API_URL_SPRING}/libro`);

    if (!response.ok) {
      throw new Error('Error en la solicitud GET');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en fetch GET:', error);
    return null;
  }
};
export const getUnLibro = async (id) => {
  try{
    const response = await fetch(`${API_URL_SPRING}/libro/${id}`);
    if(!response.ok){
      throw new Error('Error la solicitud GET de libro')
    }
    const data = response.json();
    return data;
  }catch(error){
    console.error('Error en el GET del libro',error);
    return null;
  }
}
export const getUnInmueble = async (id) =>{
  try{
    const response = fetch(`${API_URL_SPRING}/inmuebles/${id}`);
    if(!response.ok){
      throw new Error('Error la solicitud GET de inmueble')
    }
    const data = response.json();
    return data;
  }catch(error){
    console.error('Error en la solicitud GET de inmueble: ',error);
    return null;
  }
}
export const getUnMotor = async (id) =>{
  try{
    const response = fetch(`${API_URL_SPRING}/motor/${id}`);
    if(!response.ok){
      throw new Error('Error la solicitud GET de motor')
    }
    const data = response.json();
    return data;
  }catch(error){
    console.error('Error en la solicitud GET de motor: ',error);
    return null;
  }
}
export const getUnaTecnologia = async (id) =>{
  console.log(`${API_URL_SPRING}/tecnologia/${id}`);
  
  try{
    const response = fetch(`${API_URL_SPRING}/tecnologia/${id}`);
    if(!response.ok){
      throw new Error('Error la solicitud GET de motor')
    }
    const data = response.json();
    return data;
  }catch(error){
    console.error('Error en la solicitud GET de motor: ',error);
    return null;
  }
}