import React, { useState } from 'react';

const Checkup = ({ cartItems, handlePayment }) => {
  const [formValues, setFormValues] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    email: '',
    companyName: '',
    mobileNumber: '',
  });

  const [formErrors, setFormErrors] = useState({
    cardNumber: false,
    expiryDate: false,
    cvv: false,
    name: false,
    email: false,
    companyName: false,
    mobileNumber: false,
  });

  const calculateTotal = () => {
    if (!cartItems || cartItems.length === 0) {
      return 0;
    }

    const total = cartItems.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.quantity;
    }, 0);

    return total;
  };

  const validateForm = () => {
    let valid = true;
    const newFormErrors = { ...formErrors };

    Object.keys(formValues).forEach((key) => {
      if (!formValues[key]) {
        valid = false;
        newFormErrors[key] = true;
      } else {
        newFormErrors[key] = false;
      }
    });

    setFormErrors(newFormErrors);

    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'expiryDate' && value.length === 2 && !value.includes('/')) {
      setFormValues({ ...formValues, [name]: value + '/' });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formIsValid = validateForm();

    if (formIsValid) {
      handlePayment();
    }
  };

  const renderInput = (name, placeholder, maxLength) => {
    return (
      <label style={{ display: 'flex', flexDirection: 'column', fontSize: '1.2rem' }}>
        {name}:
        <input
          type="text"
          name={name.replace(/\s/g, '')} // Removendo espaços para usar como chave
          value={formValues[name.replace(/\s/g, '')]}
          onChange={handleChange}
          maxLength={maxLength}
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: `1px solid ${formErrors[name.replace(/\s/g, '')] ? 'red' : '#ccc'}`,
          }}
          placeholder={placeholder}
          required
        />
        {formErrors[name.replace(/\s/g, '')] && <span style={{ color: 'red' }}>Please fill in this field</span>}
      </label>
    );
  };
  
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px auto' }}>
      <div style={{ backgroundColor: '#f2f2f2', borderRadius: '10px', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold', color: '#333', textTransform: 'uppercase', marginBottom: '30px' }}>Payment Information</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {renderInput('Número do Cartão', 'Ex: 1234 5678 9012 3456', 19)}
          {renderInput('Data de Validade', 'mm/aa', 5)}
          {renderInput('cvv', 'Ex: 123', 3)}
          {renderInput('Nome', 'nome', 50)}
          {renderInput('Email', 'example@example.com', 50)}
          {renderInput('Companhia', 'Nome da Companhia', 50)}
          {renderInput('Número de Telefone', '123-456-7890', 14)}
          {renderInput('Forma de Pagamento', '', 50)}
          {renderInput('ID', 'id:', 50)}
          {renderInput('Parcelas', 'parcelas', 50)}
          {renderInput('Cupom de Desconto', 'desconto', 50)}
          {renderInput('Localização', 'localização', 50)}
          {renderInput('País', 'país', 50)}
          {renderInput('Endereço', 'endereço', 50)}
          {renderInput('CEP', 'cep', 50)}
          {renderInput('Observações', 'observações', 50)}
          <p>Total: ${calculateTotal()}</p>
          <button type="submit" style={{ padding: '15px 30px', borderRadius: '8px', backgroundColor: '#4285f4', color: 'white', fontSize: '1.4rem', cursor: 'pointer', transition: 'background-color 0.3s ease', border: 'none' }}>Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default Checkup;