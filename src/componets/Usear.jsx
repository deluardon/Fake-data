import { useEffect } from "react";
import { useState } from "react";
import Users from "./display/Users";


const Usear = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div>
            <div>
                {
                    users.map(user=><Users key={user.id} user={user}></Users>)
                }
            </div>
            <h1>Users : {users.length}</h1>
        </div>
    );
};

export default Usear;