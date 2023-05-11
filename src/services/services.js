import axios from 'axios';

const BASE_URL = 'https://user-crud-web.onrender.com';

export const getUser = async () => {
  try {
    const res = await axios.get(BASE_URL + '/user');

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteUser = async (usersId) => {
  try {
    await axios.delete(BASE_URL + `/user/${usersId}`);

    console.log(`El usuario con el id <${usersId}> fue eliminado`);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (usersId, newDataUser) => {
  try {
    await axios.put(BASE_URL + `/user/${usersId}`, newDataUser);

    console.log(`El usuario ${newDataUser.name} fue actualizada exitosamente`);
  } catch (error) {
    console.error(error);
  }
};
export const createUser = async (dataUser) => {
  try {
    await axios.post(BASE_URL + '/user', dataUser);

    console.log('Se creo existosamente');
  } catch (error) {
    console.error(error);
  }
};
