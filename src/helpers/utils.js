export async function getPhotosApi() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos/');
    return await response.json();
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
