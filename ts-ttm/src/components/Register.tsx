import React, { useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config();

const Register: React.FC = () => {

  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<number>(0)
  const [endtime, setEndtime] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [photo, setPhoto] = useState<string>('');

  const handleClick = () => {
    axios.post(`${process.env.REACT_APP_MAIN_SERVER}/action/register`,
    {title, price, endtime, description, photo},
    {withCredentials: true}
    )
  }

  const setTime = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if(e.currentTarget.value === '1d') {
      setEndtime('1d')
    } else if (e.currentTarget.value === '3d') {
      setEndtime('3d')
    } else if (e.currentTarget.value === '7d') {
      setEndtime('7d')
    }
  }

  return (
    <section>
      <input type="file" accept="image/png, image/jpeg" onChange={e => setPhoto(e.target.value)}/>
      <input className="title" placeholder="제목을 입력해주세요" type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <input className="price" placeholder="최소 가격을 입력해주세요" type="text" onChange={e => setPrice(Number(e.target.value))} />
      <div className="btnbox">
        <button className="1d" value="1d" onClick={setTime}>1일</button>
        <button className="3d" value="3d" onClick={setTime}>3일</button>
        <button className="7d" value="7d" onClick={setTime}>7일</button>
      </div>
      <textarea className="description" onChange={e => setDescription(e.target.value)} ></textarea>
      <button className="submit" onClick={handleClick}>등록</button>
    </section>
  )
}

export default Register;