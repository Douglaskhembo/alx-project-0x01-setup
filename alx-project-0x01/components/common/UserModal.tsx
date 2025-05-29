// components/common/UserModal.tsx

import React, { useState } from 'react';
import { UserModalProps, UserData } from '../../interfaces';

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith('address.')) {
      const [_, field] = name.split('.');
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value,
        },
      }));
    } else if (name.startsWith('geo.')) {
      const [_, field] = name.split('.');
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: {
            ...prev.address.geo,
            [field]: value,
          },
        },
      }));
    } else if (name.startsWith('company.')) {
      const [_, field] = name.split('.');
      setUser((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [field]: value,
        },
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} required />
          <input name="username" placeholder="Username" onChange={handleChange} required />
          <input name="email" placeholder="Email" onChange={handleChange} required />
          <input name="address.street" placeholder="Street" onChange={handleChange} />
          <input name="address.suite" placeholder="Suite" onChange={handleChange} />
          <input name="address.city" placeholder="City" onChange={handleChange} />
          <input name="address.zipcode" placeholder="Zipcode" onChange={handleChange} />
          <input name="geo.lat" placeholder="Latitude" onChange={handleChange} />
          <input name="geo.lng" placeholder="Longitude" onChange={handleChange} />
          <input name="phone" placeholder="Phone" onChange={handleChange} />
          <input name="website" placeholder="Website" onChange={handleChange} />
          <input name="company.name" placeholder="Company Name" onChange={handleChange} />
          <input name="company.catchPhrase" placeholder="Catch Phrase" onChange={handleChange} />
          <input name="company.bs" placeholder="BS" onChange={handleChange} />
          <button type="submit">Add User</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
