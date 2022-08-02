import { useState, useEffect } from 'react';
import './Post.css';
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export default function Post() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((current) => !current);
    console.log(isModalOpen);
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const contactsCollectionRef = collection(db, 'employee');

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(contactsCollectionRef);
      console.log(data.docs);
    };
    getUsers();
  }, []);

  return (
    <>
      <div className="mainPost">
        <div className="postContent">
          <h1 className="postTitle">Post your job offering</h1>
          <p className="postP">Display your skills and get clients!</p>
          <button className="postButton" onClick={toggleModal}>
            Post
          </button>
        </div>
        {isModalOpen && (
          <>
            <div className="mainModal" onClick={toggleModal}>
              <div
                className="modalContent"
                onClick={(event) => event.stopPropagation()}
              >
                <p>
                  Please provide the information needed for the service you
                  offer
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
