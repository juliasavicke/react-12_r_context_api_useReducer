export async function getData(url = 'https://reqres.in/api/login') {
  try {
    const resp = await fetch(url);
    const datainJs = await resp.json();

    return datainJs;
  } catch (err) {
    console.warn(err);
  }
}

export async function sendData(
  dataToSend,
  url = 'https://reqres.in/api/login'
) {
  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });
    return resp.json();
  } catch (err) {
    console.warn('klaida sendData', err);
  }
}

const storageName = 'usertoken';

// // irasyti i storage
// localStorage.setItem('key', 'value');

// // pasiimam is storage
// const value = localStorage.getItem('key');

// if (value) {
//   //we have value in storage
// }

export function store(arrToBeStored) {
  const stringFromArr = JSON.stringify(arrToBeStored);
  localStorage.setItem(storageName, stringFromArr);
}

export function isThereValueStored() {
  return !!localStorage.getItem(storageName);
}

export function getFromStore() {
  const jsonStoreValue = localStorage.getItem(storageName);
  return JSON.parse(jsonStoreValue);
}
