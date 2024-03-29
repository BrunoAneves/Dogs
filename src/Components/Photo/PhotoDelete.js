import React from "react";
import styles from "./PhotoDelete.module.css";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_DELETE } from "../../api";

const PhotoDelete = ({ id }) => {
  const { loanding, request } = useFetch();

  async function handleClick(event) {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loanding ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
