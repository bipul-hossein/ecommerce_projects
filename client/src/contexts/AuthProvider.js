import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { useQuery } from "react-query";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const { data: userOldDbInfo = [], refetch } = useQuery({
    queryKey: [user],
    queryFn: async () => {
      const res = await fetch(`https://faithful-jade-tie.cyclic.app/api/user?email=${user?.email}`);
      const data = await res.json();
      return data;
    },
  });
 
  useEffect(() => {
    if (user?.email) {
      refetch();
    }
  }, [user?.email, refetch]);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (userUpdateInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, userUpdateInfo);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    return () =>
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        //get and set token
        if (currentUser) {
          fetch(`https://faithful-jade-tie.cyclic.app/api/jwt?email=${currentUser?.email}`
          )
            .then((res) => res.json()) 
            .then((data) => {
              if (data.payload.accessToken) {
                //console.log(data.accessToken);
                localStorage.setItem("accessToken",data?.payload?.accessToken);
                setLoading(false);
              }
            });
        } else {
          localStorage.removeItem("accessToken");
        }    
      });
  }, []);

  const authInfo = {
    createUser,
    signIn,
    updateUser,
    user,
    setUser,
    loading,
    logOut,
    userOldDbInfo,
    refetch,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
