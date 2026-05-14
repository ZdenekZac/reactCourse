function StaffRow({ staff }) {
  const { id: staffId, fullName, email, phone } = staff;
  return (
    <div>
      <p>{staffId}</p>
      <p>{fullName}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}

export default StaffRow;
