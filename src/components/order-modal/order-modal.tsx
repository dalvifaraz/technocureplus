import React, { useState } from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import emailjs from 'emailjs-com';

// EmailJS Function
const sendEmail = async (email: any, message: any) => {
  try {
    const result = await emailjs.send('service_o1qxz6d', 'template_x3qsgmy', {
      to_email: email,
      message,
    }, 'YXVZOCCWYYbD7dgoQ');
    console.log(result.text);
  } catch (error: any) {
    console.log(error.text);
  }
};

// // Twilio WhatsApp API Function
// const sendWhatsAppMessage = async (phone: any, message: any) => {
//   try {
//     // Call your WhatsApp sending API with the message and phone number
//     await fetch('/https://api.twilio.com/2010-04-01/Accounts/AC9acc805272876f6dea9cd773c4e0b58c/Messages.json', {
//       method: 'POST',
//       body: JSON.stringify({
//         to: phone,
//         message: message,
//       }),
//     });
//   } catch (error) {
//     console.log('Error sending WhatsApp message:', error);
//   }
// };


Modal.setAppElement('#root'); // Modal accessibility fix

const PlaceOrderModal = ({ isOpen, onClose, cart, clearCart } : any) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    // Perform validation on fields before submission
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.address) {
      alert('Please fill in all required fields.');
      return;
    }

    // Prepare message
    const deliveryDate = moment().add(3, 'days').format('LL');
    const message = `
      Hi ${formData.firstName} ${formData.lastName}, thank you for shopping with us. Your order will be delivered to you on ${deliveryDate}.
      Order Details:
      ${cart.map((item: any, index: any) => `${index + 1}. ${item.name} - Qty: ${item.quantity} - Price: ₹${item.price}`).join('\n')}
      Thank you!
    `;

    // Send via email or WhatsApp
    if (formData.email) {
      await sendEmail(formData.email, message);
    }
    // if (formData.phone) {
    //   await sendWhatsAppMessage(formData.phone, message);
    // }

    clearCart(); // Clear the cart after placing the order
    onClose(); // Close the modal after order is placed
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Place Your Order</h2>
      <form>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Phone Number (Optional)</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
          <small>Only if you need order confirmation on WhatsApp</small>
        </div>
        <div>
          <label>Delivery Address</label>
          <textarea name="address" value={formData.address} onChange={handleInputChange} required />
        </div>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </Modal>
  );
};

export default PlaceOrderModal;
