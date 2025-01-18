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

  const addItem = () => setItems([...items, { name: '', quantity: 1, price: 0 }]);
  const removeItem = (index) => setItems(items.filter((_, i) => i !== index));
  const calculateTotal = () => items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const handlePrint = () => window.print();

  

  return (
    <div className=" w-full p-8 bg-[#EEEFEE]  min-h-screen " id="invoice">

      <div className="bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Invoice</h1>
        <div className="mb-4">
          <strong>Invoice Number:</strong> {invoiceNumber}
        </div>
        <div className="mb-4">
          <label className="block font-medium">Customer Name</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
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
                className="flex-1 px-4 py-2 border rounded w-full "
              />
              <input
                type="number"
                placeholder="Quantity"
                // value={item.quantity}
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
                // value={item.price}
                onChange={(e) => {
                  const updatedItems = [...items];
                  updatedItems[index].price = +e.target.value;
                  setItems(updatedItems);
                }}
                className="w-full sm:w-32 px-4 py-2 border rounded"
              />
              <button
                onClick={() => removeItem(index)}
                className="  w-full sm:w-auto text-red-500 hover:underline"
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
          onClick={handlePrint}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Print Invoice
        </button>
      </div>
    </div>
  );
}

export default InvoicePage;
