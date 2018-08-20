// Asynchronously fetch all apartments
export const fetchApartments = async function() {
  try {
    const response = await fetch("/apartments");
    const apartments = await response.json();
    return apartments;
  } catch (e) {
    console.error("API request raised an error:", e);
  }
};

// Asynchronously fetch a single apartment
export const fetchApartment = async function(id) {
  try {
    const response = await fetch(`/apartments/${id}`);
    const apartment = await response.json();
    return apartment;
  } catch (e) {
    console.error("API request raised an error:", e);
  }
};

// Asynchronously update a single apartment
export const updateApartment = async function(id, currentApartment) {
  try {
    const settings = {
      method: 'PATCH',
      body: JSON.stringify(currentApartment),
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
    const response = await fetch(`/apartments/${id}`, settings);
    const apartment = await response.json();
    return apartment;
  } catch (e) {
    console.error("API request raised an error:", e);
  }
};

// Asynchronously create a single apartment
export const createApartment = async function(newApartment) {
  try {
    const settings = {
      method: 'POST',
      body: JSON.stringify(newApartment),
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
    const response = await fetch("/apartments/", settings);
    const apartment = await response.json();
    return apartment;
  } catch (e) {
    console.error("API request raised an error:", e);
  }
};

export const searchApartments = async function(query) {
  try {
    const settings = {
      method: 'GET',
      body: JSON.stringify(query),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch("apartments/search", settings);
    const apartments = await response.json();
    return apartments;
  } catch (e) {
    console.error("API request raised an error:", e);
  }

}
