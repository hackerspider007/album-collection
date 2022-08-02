import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
export default function UpdateAlbum(props) {
  const { id } = useParams();
  const { albums, handleChangeAlbum } = props;
  let [album, setAlbum] = useState({ title: "", userId: "" });
  console.log(album);
  let [title, setTitle] = useState(album.title);
  let [userId, setUserId] = useState(album.userId);

  useEffect(() => {
    let album = albums.find((elem) => elem.id == id);
    setAlbum(album);
    setTitle(album.title);
    setUserId(album.userId);
  }, [id, albums]);

  const updateUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        title: title,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let updatedAlbums = albums.filter((album) => {
          console.log(album);
          return album.id != id;
        });
        updatedAlbums.push(data);
        handleChangeAlbum(updatedAlbums);
      });
  };

  function handleChange(e) {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setUserId(e.target.value);
    }
  }

  return (
    <div>
      <label htmlFor='title'>Title</label>
      <input
        type='text'
        value={title}
        name='title'
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <label htmlFor='title'>userId</label>
      <input
        type='text'
        value={userId}
        name='userId'
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <Button onClick={updateUser}> Submit</Button>
    </div>
  );
}
