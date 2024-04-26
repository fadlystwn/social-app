'use client'
import { useState } from 'react';
import UserList from '@/app/ui/UserList';
import Modal from '@/components/Modal';
import AddUser from '@/app/ui/AddUser';
export default function UserPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <div data-testid="user">
      <h1 className="text-2xl">Home</h1>
      <div className='text-right my-3'>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={openModal}
        >
          ADD USER
        </button>
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <AddUser />
        </Modal>
      </div>
      <UserList />

    </div>
  )
}