export const modelAlbumPhoto = {
  albumId: 1,
  id: 1,
  title: "",
  url: "",
  thumbnailUrl: ""
}

export async function getPhotosApi() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos/');
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export function groupById(objArray, property) {
  return objArray.reduce(function (acc, obj) {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}
