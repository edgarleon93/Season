import axios from 'axios';

const baseURL = 'https://season-app-hbxam.ondigitalocean.app';

// export const registerNewUser = async (
//   email: string,
//   username: string,
//   password: string,
//   confirmPassword: string,
// ) => {
//   try {
//     await axios
//       .post(`${baseURL}/register`, {
//         email: email,
//         username: username,
//         password: password,
//         confirmPassword: confirmPassword,
//       })
//       .then(function (response) {
//         console.log(response.data);
//         const token = response.data.token;
//         // Save user json data to localStorage
//         localStorage.setItem('token', JSON.stringify(token));
//         window.location.reload();
//         return response;
//       });
//   } catch (error) {
//     console.log('This is the error', error);
//   }
// };

// export const loginUser = async (username: string, password: string) => {
//   try {
//     await axios
//       .post(`${baseURL}/login`, {
//         // email: email,
//         userName: username,
//         password: password,
//       })
//       .then(function (response) {
//         console.log(response.data);
//         const token = response.data.token;
//         // Save user json data to localStorage
//         localStorage.setItem('token', JSON.stringify(token));
//         window.location.reload();
//         return response;

//         // return response
//       });
//   } catch (error) {
//     console.log('This is the error', error);
//   }
// };

// export const getUserbyUsername = async (username: any) => {
//   try {
//     const fetchUser = await axios.get(`${baseURL}/username/${username}`);
//     const data = fetchUser.data;
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const handleToggleFollow = async (userId: string) => {
//   try {
//     await axios.patch(`${baseURL}/follow/${userId}`).then((res) => window.alert(res));
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const handleGetFollowers = async (userId: any) => {
//   try {
//     await axios
//       .get(`${baseURL}/all/followers/${userId}`)
//       .then((res) => window.alert(res));
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const searchUsers = async (searchTerm: string) => {
//   try {
//     const response = await axios.post(`${baseURL}/search`, { searchTerm });
//     const results = response.data;
//     // Update the component state with the search results
//     return results;
//   } catch (error) {
//     console.error(error);
//   }
// };
