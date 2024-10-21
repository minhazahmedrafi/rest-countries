const User = ({ user }) => {
  return (
    <>
      <h3>ID: {user.id}</h3>
      <h3>Name: {user.name} </h3>
      <h3>Email: {user.email} </h3>
      <h3>Address: {user.address.city}</h3>
      <br />
      <br />
    </>
  );
};

export default User;
