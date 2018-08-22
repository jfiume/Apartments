// filter selector
export const filterAll = (beds, baths, apartments) => {
  const filteredApartments = Object.values(apartments).filter(
    apartment => {
      return apartment.bathroom_count >= baths
    }).filter(apartment => {
      return apartment.bedroom_count >= beds
    });
  return filteredApartments;
};
