export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `${import.meta.env.TNDB_AUTHENTICATION}`,
  },
};
