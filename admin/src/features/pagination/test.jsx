<Pagination
  data={allRoomsData}
  itemsPerPage={5}
  renderItem={(room) => (
    <div className="room" key={room._id}>
      <div>Type: {room.roomType}</div>
      <div>Capacity: {room.bed}</div>
      <div className="actions">
        <NavLink to={`update/${room.roomType}`}>
          <ButtonV2 text="Update" color="green" />
        </NavLink>
        <ButtonV2 text="Delete" onClick={() => handleDelete(room._id)} />
      </div>
    </div>
  )}
/>;
