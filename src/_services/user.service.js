import apipath from "../api/api_path";
import makeTheApiCall from "../api/axios.config";

export async function getUsersDetails(slug) {
  let options = {
    url: apipath.BASE_URL + apipath.GET_USERS + "/" + slug,
    method: "GET",
  };
  const res = await makeTheApiCall(options);

  return res.data;
}

//Total user
export async function getNamegame(body) {
  let options = {
    url: apipath.BASE_URL + apipath.Namegame,
    method: "POST",
    data: body,
  };
  const res = await makeTheApiCall(options);
  return res.data;
}

export async function getAllNamegame(body) {
  let options = {
    url: apipath.BASE_URL + apipath.AllNamegame,
    method: "POST",
    data: body,
  };
  const res = await makeTheApiCall(options);
  return res.data;
}

export async function getContactUs(body) {
  let options = {
    url: apipath.BASE_URL + apipath.ContactUs,
    method: "POST",
    data: body,
  };
  const res = await makeTheApiCall(options);
  return res.data;
}
