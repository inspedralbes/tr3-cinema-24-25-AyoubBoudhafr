
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