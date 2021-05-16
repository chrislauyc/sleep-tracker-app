import React from 'react';
function Users(props){
    const {users} = props;

    return(
        <div>
            {
                Object.keys(users).map((id)=>(
                <div>
                        <div>Name: {users[id].first_name} {users[id].last_name}</div>
                        <div>Email: {users[id].email}</div>
                        <div>Role: {users[id].role}</div>
                </div>
                ))
            }
        </div>
    );
}
export default Users;