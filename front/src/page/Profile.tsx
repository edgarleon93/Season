import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Buttons/Button';
import IconButton from '~/components/Buttons/IconButton';
import { Navbar } from '~/components/Navbar';
import PostsAndLikes from '~/components/PostsAndLikes';
import { Sidebar } from '~/components/Sidebar/Sidebar';
import NavigateBar from '~/components/navigateBar';

const Profile = () => {
  const [userData, setUserData] = useState<any>(null);
  const [followers, setFollowers] = useState<number>(0);
  const [following, setFollowing] = useState<number>(0);
  const [posts, setPosts] = useState<number>(0);
  const navigate = useNavigate();
  const [userPosts, setUserPosts] = useState([]);

  const baseURL = 'https://season-app-hbxam.ondigitalocean.app';

  useEffect(() => {
    const fetchUserData = async (username: string) => {
      try {
        const response = await axios.get(`${baseURL}/username/${username}`);
        const data = response.data;
        console.log('DATA :', data);
        setUserData(data);
        setFollowers(data.followers.length);

        const followingResponse = await axios.get(`${baseURL}/all/followers/${data._id}`);
        const followingData = followingResponse.data;
        setFollowing(followingData.length);
        console.log(followingData);

        const postsResponse = await axios.get(`${baseURL}/posts/users/${data._id}`);
        const postsData = postsResponse.data;
        setPosts(postsData.length);
        console.log(postsData);

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    // fetchUserData(userData.username);
    fetchUserData('Brandi63');
  }, []);

  useEffect(() => {
    if (!userData) return;

    async function fetchPosts() {
      try {
        const response = await axios.get(`${baseURL}/posts/users/${userData._id}`);
        const fetchedPosts = response.data.posts;

        fetchedPosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );

        if (Array.isArray(fetchedPosts)) {
          setUserPosts(fetchedPosts);
        } else {
          console.error('API response is not an array');
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchPosts();
  }, [userData]);

  const [userLikedPosts, setUserLikedPosts] = useState([]);
  useEffect(() => {
    if (!userData) return;

    // Ajouter cette ligne pour appeler fetchLikedPosts
    fetchLikedPosts();
    async function fetchLikedPosts() {
      try {
        const response = await axios.get(`${baseURL}/all/likes/user/${userData._id}`);
        const fetchedLikedPosts = response.data.posts;

        fetchedLikedPosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );

        if (Array.isArray(fetchedLikedPosts)) {
          setUserLikedPosts(fetchedLikedPosts);
        } else {
          console.error('API response is not an array');
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchLikedPosts();
  }, [userData]);

  return (
    <>
      <Navbar />
      <NavigateBar title="Profile" />
      <div className="flex items-center justify-center text-white">
        {userData ? (
          <div className="flex flex-col items-center">
            <div className="mb-4 flex items-start justify-start gap-8 md:gap-12">
              <img
                className="my-9 ml-9 h-28 w-28 rounded-full md:h-40 md:w-40"
                src={userData.profilePic}
                alt={userData.username}
              />
              <div className="my-9 mr-9">
                <h1 className="text-3xl font-bold">{userData.username}</h1>
                <div className="mt-4 flex gap-4">
                  <div className=" text-center">
                    <p className=" font-bold">{followers}</p>
                    <p className="text-xs">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold">{userData.followings.length}</p>
                    <p className="text-xs">Following</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold">{userData.posts.length}</p>
                    <p className="text-xs">Posts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="align-center absolute mt-36 sm:mt-40 md:mt-44">
              <Button variant="secondary" onClick={() => navigate('/Home')}>
                <h2 className="px-3 pt-1">Modify Profile</h2>
              </Button>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="mt-12">
        <PostsAndLikes
          userData={userData}
          userPosts={userPosts}
          userLikedPosts={userLikedPosts}
        />
      </div>
      <Sidebar />
    </>
  );
};

export default Profile;

// const handleUpdateUser = async (id: string) => {
//   try {
//     const accessToken = localStorage.getItem('access_token');

//     await axios.put(
//       `${baseURL}/modify/${id}`,
//       {},
//       { headers: { Authorization: `Bearer ${accessToken}` } },
//     );
//     // Handle success
//     console.log('User updated successfully');
//   } catch (error) {
//     // Handle error
//     console.log(error);
//   }
// };

// const handleToggleFollow = async (userId: string) => {
//   try {
//     const accessToken = localStorage.getItem('access_token');

//     await axios.patch(
//       `${baseURL}/user/follow/${userId}`,
//       {},
//       { headers: { Authorization: `Bearer ${accessToken}` } },
//     );

//     console.log('Follow status toggled successfully');
//   } catch (error) {
//     console.log(error);
//   }
// };

// const handleGetFollowers = async (userId: string) => {
//   try {
//     const response = await axios.get(`${baseURL}/all/followers/${userId}`);
//     const data = response.data;

//     setFollowers(data.length);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const handleGetPosts = async (userId: string) => {
//   try {
//     const response = await axios.get(`${baseURL}/posts/users/${userId}`);
//     const data = response.data;

//     setFollowers(data.length);
//   } catch (error) {
//     console.log(error);
//   }
// };
