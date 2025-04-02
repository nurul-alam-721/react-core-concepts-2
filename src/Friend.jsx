export default function Friend({friend}){
    console.log(friend);
    const {name, email, phone} = friend;
    return(
       <div className="card">
        <h3>name: {name}</h3>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
       </div>
    )
}