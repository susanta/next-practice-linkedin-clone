import { useEffect, useState } from 'react';

import Input from './Input';

function Feed() {
  const [realTimePosts, setRealTimePosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('api/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseData = await response.json();
      setRealTimePosts(responseData);
    };

    fetchPosts();
  }, []);

  console.log(realTimePosts);

  return (
    <div className="space-y-6 pb-24 mx-w-lg">
      <Input />
      {/* Posts */}
    </div>
  );
}

export default Feed;
