const User = () => {

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    
    if (userInfo.message) {
        return <div className="user-info"> Error occured while fetching user info </div>
    }

    const { email, name: { title, first, last } }= userInfo;

    return (
        <div className="user-info">
            <p> Name - {title} {first} {last}</p>
            <p> E-mail - {email}</p>
        </div>
    )
}

export default User;