import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';

const useAdmin = () => {
    const {user,loading} =useAuth()
    const [axiosSecure] = useAxiosSecure();
    // use axios with react query & jwt
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`api/users/admin/${user?.email}`);
            return res?.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;