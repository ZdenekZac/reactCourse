import "./App.css";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: 2,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: -2,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSelection(friend) {
    //setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  return (
    <div className="App">
      <div className="sidebar">
        <Container friends={friends} selectedFriend={selectedFriend} onSelection={handleSelection} />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button className="button" onClick={handleShowAddFriend}>
          {showAddFriend ? "close" : "Add friend"}
        </Button>
      </div>
    </div>
  );
}

function Container({ friends, onSelection, selectedFriend }) {
  return (
    <ul className="container">
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} onSelection={onSelection} selectedFriend={selectedFriend} />
      ))}
    </ul>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balace: 2,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Image URL</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

      <Button>Add</Button>
    </form>
  );
}

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} ows you {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance < 0 && (
        <p className="red">
          You owe to {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are OK</p>}

      <Button onClick={() => onSelection(friend)}>{isSelected ? "Close" : "Select"}</Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

export default App;
