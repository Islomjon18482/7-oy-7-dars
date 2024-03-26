import React from "react";
import styles from "./groupinfo.module.css";

function Groupinfo() {
  return (
    <>
      <div className={styles.info__wrapper}>
        <div className={styles.header}>
          <div className={styles.inp}>
            <img src="./search.svg" />
            <input type="text" placeholder="Qidiruv" />
          </div>
          <button>
            <img src="./add.svg" />
            <span>O'quvchi qo'shish</span>
          </button>
        </div>
        <div className={styles.students}>
          <div className={styles.students__heading}>
            <h2>O'quvchilar:</h2>
          </div>
          <div className={styles.students__info}>
            <table>
              <thead>
                <tr>
                  <th className={styles.id}>ID</th>
                  <th className={styles.name}>Ism Familiya Otasining ismi</th>
                  <th className={styles.phone}>Telefon raqami</th>
                  <th className={styles.login}>Login</th>
                  <th className={styles.parol}>Parol</th>
                  <th>Amallar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.id}>1820</td>
                  <td className={styles.name}>
                    Durdona Egamberdiyeva Hatamtoyeva
                  </td>
                  <td className={styles.phone}>+998933322222</td>
                  <td className={styles.login}>student1820</td>
                  <td className={styles.login}>248012</td>
                  <td className={styles.actions}>
                    <img src="./edit.svg" />
                    <img src="./delete.svg" />
                  </td>
                </tr>
                <tr>
                  <td className={styles.id}>1820</td>
                  <td className={styles.name}>Durdona Egamberdiyeva</td>
                  <td className={styles.phone}>+998933322222</td>
                  <td className={styles.login}>student1820</td>
                  <td className={styles.login}>248012</td>
                  <td className={styles.actions}>
                    <img src="./edit.svg" />
                    <img src="./delete.svg" />
                  </td>
                </tr>
                <tr>
                  <td className={styles.id}>1820</td>
                  <td className={styles.name}>Durdona Egamberdiyeva</td>
                  <td className={styles.phone}>+998933322222</td>
                  <td className={styles.login}>student1820</td>
                  <td className={styles.login}>248012</td>
                  <td className={styles.actions}>
                    <img src="./edit.svg" />
                    <img src="./delete.svg" />
                  </td>
                </tr>
                <tr>
                  <td className={styles.id}>1820</td>
                  <td className={styles.name}>Durdona Egamberdiyeva</td>
                  <td className={styles.phone}>+998933322222</td>
                  <td className={styles.login}>student1820</td>
                  <td className={styles.login}>248012</td>
                  <td className={styles.actions}>
                    <img src="./edit.svg" />
                    <img src="./delete.svg" />
                  </td>
                </tr>
                <tr>
                  <td className={styles.id}>1820</td>
                  <td className={styles.name}>Durdona Egamberdiyeva</td>
                  <td className={styles.phone}>+998933322222</td>
                  <td className={styles.login}>student1820</td>
                  <td className={styles.login}>248012</td>
                  <td className={styles.actions}>
                    <img src="./edit.svg" />
                    <img src="./delete.svg" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={styles.modal}>
        <div className={styles.modal__heading}>
          <h2>Guruhga yanigi o'quvchi qo'shish</h2>
        </div>
        <div className={styles.modal__inp}>
          <label>
            <p>O‘quvchi ismi</p>
            <input type="text" placeholder="Ism kiriting..."/>
          </label>
          <label>
            <p>O‘quvchi familiyasi</p>
            <input type="text" placeholder="Familiya kiriting..."/>
          </label>
          <label>
            <p>Otasining ismi</p>
            <input type="text" placeholder="Otasining ismini kiriting..."/>
          </label>
          <label>
            <p>Telefon raqami</p>
            <input type="text" placeholder="+998"/>
          </label>
          <label>
            <p>Tug'ilgan sanasi</p>
            <input type="text" placeholder="kk.oo.yyyy"/>
          </label>
        </div>
        <button>O'quvchi qo'shish</button>
      </div>
    </>
  );
}

export default Groupinfo;
