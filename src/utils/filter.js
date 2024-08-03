export const filteredData = (data, searchTerm) => {
  return data.filter((item) => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    return Object.entries(item).some(([key, value]) => {
      if (key === 'id') return false;
      return value.toString().toLowerCase().includes(lowerCaseTerm);
    });
  });
};
