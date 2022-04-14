export const getApi = async (url) => {
  return await fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};

export const postApi = async (url, body, headerType) => {
  var myHeaders = new Headers();
  headerType === true
    ? myHeaders.append("Content-Type", "multipart/form-data")
    : myHeaders.append("Content-Type", "application/json");
  return fetch(url, {
    method: "POST",
    body: body,
    headers: myHeaders,
    redirect: "follow",
  })
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      return err;
    });
};
