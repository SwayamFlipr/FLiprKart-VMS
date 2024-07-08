export const isToteId = (id: string) => {
  return /^\d{3}-[A-Za-z]{3}-\d{4,6}$/.test(id);
};

export const isTrackingId = (id: string) => {
  return /^FMP[A-Za-z]\d{10}$/.test(id);
};
