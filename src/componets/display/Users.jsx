

const Users = ({user}) => {
    console.log(user);
    console.log(Object.keys(user));
    const {id, name, email, age, address}=user
    return (
        <div>
            <h1> Name: {name}</h1>
            <p>Age: {age} </p>
            <p>Email: {email}</p>
            <p>Address: {address.street}, {address.city}, {address.state}, {address.zip}</p>
            
            <p>Zip: {id}</p>
        </div>
    );
};

export default Users;