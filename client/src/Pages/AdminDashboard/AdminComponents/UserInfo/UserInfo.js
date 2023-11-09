import React from "react";
import { useQuery } from "react-query";

const UserInfo = () => {
  const { data: users = [],} = useQuery({
    queryKey: ["usersData"],
    queryFn: async () => {
      const res = await fetch(`https://faithful-jade-tie.cyclic.app/api/users`);
      const data = await res.json();
      return data?.payload;
    },
  });

  return (
    <div>
      <p className="text-xl text-center font-semibold mb-3">User Info</p>
      {users?.map((user) => (
        <div key={user?._id}>
          <p>{user?.name?.firstName+" "+user?.name?.lastName}</p>
          <p>{user?.email}</p>
  
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
