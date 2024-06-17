export const getUsersData = async () => {
    const url = "http://localhost:3000/users/getusers";
    const allUsersData = await fetch(url)
    const response = await allUsersData.json();
    return response.data
}


export const postUser = async (user) => {
    const url = "http://localhost:3000/users/postuser"
    const postNewUser = await fetch(url, {
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(user),
    });
    const response = await postNewUser.json();
    return response.data;
}

export const deleteUser = async (id) => {
    const url = `http://localhost:3000/users/deleteuser/${id}`;
    const userDelete = await fetch(url, {
        method: "DELETE",
        headers:{
            "Content-type": "application/json",
        },
    });
    const response = await userDelete.json();
    return response.data
}

export const updateUser = async (id, userData) => {
    const url = `http://localhost:3000/users/updateuser/${id}`
    const userUpdated = await fetch(url, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    const response = await userUpdated.json();
    return response.data
}