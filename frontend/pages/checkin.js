import { useState } from 'react';

export default function CheckIn() {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', stylist: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/checkin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    alert('Check-In Successful!');
    setFormData({ name: '', phone: '', service: '', stylist: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Online Check-In</h2>
      <input placeholder="Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
      <input placeholder="Phone" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
      <input placeholder="Service" value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })} />
      <input placeholder="Stylist" value={formData.stylist} onChange={e => setFormData({ ...formData, stylist: e.target.value })} />
      <button type="submit">Check In</button>
    </form>
  );
}