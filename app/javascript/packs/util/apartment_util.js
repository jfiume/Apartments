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

// Asynchronously updae a single apartment
export const updateApartment = async function(id) {
  try {
    const settings = {
      method: 'PUT',
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