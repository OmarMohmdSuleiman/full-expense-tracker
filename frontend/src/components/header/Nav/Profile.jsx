import userImage from "../../../assets/images/user-image.png";


function Profile(){
return <div className="profile">
    <h1>PROFILE</h1>

    <img src={userImage} />

    <div className="personal-info">
        <h2>Welcome Omar Suleiman</h2>
        <h3>Email: omar@gmail.com</h3>
        <h3>Phone number: +961 79153404</h3>
    </div>

    <div className="work-info">
        <h3>Type of Work: Acountant</h3>
        <h3>Monthly Salary : 600 USD</h3>
        <h3>Annual Salary: 7200 USD</h3>
    </div>

    <div className="preferences">
        <h2>Setting</h2>
        <h3>Currency: USD</h3>
        <h3>Language : English</h3>
    </div>

     <div className="privacy">
        <h2>Privacy</h2>
        <h3>Change password</h3>
        <h3>Delete Cashe</h3>
        <h3>Log out</h3>
        <h3>Delete Account</h3>
    </div>

     <div className="about">
        <h2>Member since 2026</h2>
    </div>

</div>
}

export default Profile;