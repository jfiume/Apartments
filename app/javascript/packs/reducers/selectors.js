// filter selector
export const filterBedrooms = (beds, apartments) => {
  const apt = Object.values(apartments).filter(apartment => apartment.bedroom_count >= beds);
  return apt;
};

export const filterBathrooms = (baths, apartments) => {
  const apt = Object.values(apartments).filter(apartment => apartment.bathroom_count >= baths);
  return apt;
};

export const filterAll = (beds, baths, apartments) => {
  const filteredApartments = Object.values(apartments).filter(
    apartment => {
      return apartment.bathroom_count >= baths
    }).filter(apartment => {
      return bedroom_count >= beds
    });
  return filteredApartments;
};
