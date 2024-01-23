import React from "react";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const UserInfo = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["usersData"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `${process.env.REACT_APP_ServerUrl}/api/users`
      );
      return res?.data?.payload;
    },
  });
  console.log(users);
  return (
    <div>
      <p className="text-xl text-center font-semibold my-3">User Info</p>
      <p>all user</p>
      {users?.map((user, i) => (
        <div key={i}>
          <p>{user?.name?.firstName + " " + user?.name?.lastName} user</p>
          <p>{user?.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
