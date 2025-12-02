import axios from "axios";

export const request = async ({ url, headers, params, data, method }) => {
  const config = {
    url: url,
    headers: headers,
    method: method,
    params: params,
    data: data,
  };
  try {
    const response = await axios(config);
    return {
      data: response.data,
      statusCode: response.status,
      error: null,
    };
  } catch (err) {
    console.error(err);
    return {
      data: null,
      statusCode: err.response?.status || 500,
      error: err.message,
    };
  }
};
