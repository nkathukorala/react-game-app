import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import userService, { User } from "../services/user-service";


const useUsers= ()=>{
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
      setLoading(true);
      const { cancel, request } = userService.getAll();
      request
        .then((res) => {
          setUsers(res.data);
          setLoading(false);
        })
    
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
    
      return cancel;
    }, []);

   return {users,error,isLoading,setUsers,setError}
    
}

export default useUsers;

