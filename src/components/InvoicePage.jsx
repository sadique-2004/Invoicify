// Description: This component allows users to create an invoice by filling out customer details and item information. It also provides a preview of the invoice and a print option.

import React, { useState } from 'react';

function InvoicePage() {
  const [items, setItems] = useState([{ name: '', quantity: 1, price: 0 }]);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().slice(0, 10));
  const [invoiceNumber, setInvoiceNumber] = useState(
    `INV-${Math.floor(Math.random() * 1000000)}`
  );
  const [showPreview, setShowPreview] = useState(false);

  const addItem = () => setItems([...items, { name: '', quantity: 1, price: 0 }]);
  const removeItem = (index) => setItems(items.filter((_, i) => i !== index));
  const calculateTotal = () => items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const handlePrint = () => {
    setShowPreview(true);
    setTimeout(() => window.print(), 500); // Delay to ensure rendering
  };

  return (
    <div className="w-full p-8 bg-[#EEEFEE] min-h-screen" id='invoice-preview'>
      {!showPreview ? (
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-6">Invoice Form</h1>
          <div className="mb-4"><strong>Invoice Number:</strong> {invoiceNumber}</div>
          <div className="mb-4">
            <label className="block font-medium">Customer Name</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full px-4 py-2 border rounded ring-1 ring-[#45ccb8] ring-offset-2 focus-ring-white focus:border-red-400"
              placeholder='Sadique'
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Customer Address</label>
            <input
              type="text"
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Customer Number</label>
            <input
              type="text"
              value={customerNumber}
              onChange={(e) => setCustomerNumber(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Date</label>
            <input
              type="date"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">Items</h3>
            {items.map((item, index) => (
              <div key={index} className="flex gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Item Name"
                  value={item.name}
                  onChange={(e) => {
                    const updatedItems = [...items];
                    updatedItems[index].name = e.target.value;
                    setItems(updatedItems);
                  }}
                  className="flex-1 px-4 py-2 border rounded w-full"
                />
                <input
                  type="number"
                  placeholder="Quantity"
                  value={item.quantity}
                  onChange={(e) => {
                    const updatedItems = [...items];
                    updatedItems[index].quantity = +e.target.value;
                    setItems(updatedItems);
                  }}
                  className="w-full sm:w-24 px-4 py-2 border rounded"
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={item.price}
                  onChange={(e) => {
                    const updatedItems = [...items];
                    updatedItems[index].price = +e.target.value;
                    setItems(updatedItems);
                  }}
                  className="w-full sm:w-32 px-4 py-2 border rounded"
                />
                <button
                  onClick={() => removeItem(index)}
                  className="w-full sm:w-auto text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              onClick={addItem}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-[#2E7C75]"
            >
              Add Item
            </button>
          </div>
          <h3 className="text-lg font-bold mb-4">Total: {calculateTotal()}</h3>
          <button
            onClick={() => setShowPreview(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Generate Invoice
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 shadow-md rounded-lg" id="invoice-preview">
          <h1 className="text-2xl font-bold mb-4">Invoice</h1>
          <p><strong>Invoice No:</strong> {invoiceNumber}</p>
          <p><strong>Date:</strong> {invoiceDate}</p>
          <p><strong>Customer Name:</strong> {customerName}</p>
          <p><strong>Customer Address:</strong> {customerAddress}</p>
          <p><strong>Customer Number:</strong> {customerNumber}</p>
          
          <h3 className="text-lg font-bold mt-4">Items</h3>
          <table className="w-full border-collapse border border-gray-300 mt-2">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Item</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="border">
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.quantity}</td>
                  <td className="border p-2">{item.price}</td>
                  <td className="border p-2">{item.quantity * item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="text-lg font-bold mt-4">Total: {calculateTotal()}</h3>
          <button
            onClick={handlePrint}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Print Invoice
          </button>
          <button
            onClick={() => setShowPreview(false)}
            className="mt-4 ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Back to Form
          </button>
        </div>
      )}
    </div>
  );
}

export default InvoicePage;

