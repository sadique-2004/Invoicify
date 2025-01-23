import React, { useState } from 'react';

const InvoiceForm = () => {
  const [items, setItems] = useState([
    { slNo: 1, itemName: '', quantity: 1, price: 0, discount: 0, tax: 0 },
  ]);

  const handleAddItem = () => {
    setItems([
      ...items,
      { slNo: items.length + 1, itemName: '', quantity: 1, price: 0, discount: 0, tax: 0 },
    ]);
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = items.map((item, i) => {
      if (i === index) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => {
      const itemTotal =
        item.quantity * item.price -
        item.discount +
        (item.tax / 100) * (item.quantity * item.price);
      return total + itemTotal;
    }, 0);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Invoice Form</h1>

      <form className="space-y-4">
        {/* Company Details */}
        <div className="space-y-2">
          <label className="block">Company Name:</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded"
          />

          <label className="block">Logo:</label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 border rounded"
          />

          <label className="block">Address:</label>
          <textarea
            required
            className="w-full p-2 border rounded"
          ></textarea>

          <label className="block">Contact Number:</label>
          <input
            type="tel"
            className="w-full p-2 border rounded"
          />

          <label className="block">GST-No:</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Customer Details */}
        <div className="space-y-2">
          <label className="block">Customer Name:</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded"
          />

          <label className="block">Date:</label>
          <input
            type="date"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Item Details */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-6 gap-4 items-center border-b pb-4 mb-4"
            >
              <input
                type="number"
                placeholder="Sl-No"
                value={item.slNo}
                readOnly
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Item Name"
                value={item.itemName}
                onChange={(e) =>
                  handleItemChange(index, 'itemName', e.target.value)
                }
                className="p-2 border rounded"
              />
              <input
                type="number"
                placeholder="Qty"
                value={item.quantity}
                onChange={(e) =>
                  handleItemChange(index, 'quantity', Number(e.target.value))
                }
                className="p-2 border rounded"
              />
              <input
                type="number"
                placeholder="Price"
                value={item.price}
                onChange={(e) =>
                  handleItemChange(index, 'price', Number(e.target.value))
                }
                className="p-2 border rounded"
              />
              <input
                type="number"
                placeholder="Discount"
                value={item.discount}
                onChange={(e) =>
                  handleItemChange(index, 'discount', Number(e.target.value))
                }
                className="p-2 border rounded"
              />
              <input
                type="number"
                placeholder="Tax %"
                value={item.tax}
                onChange={(e) =>
                  handleItemChange(index, 'tax', Number(e.target.value))
                }
                className="p-2 border rounded"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddItem}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Item
          </button>
        </div>

        {/* Total Price */}
        <div className="mt-4 text-xl font-semibold">
          Total Price: ₹{calculateTotalPrice().toFixed(2)}
        </div>

        {/* Print Button */}
        <button
          type="button"
          onClick={handlePrint}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Print Invoice
        </button>

      </form>
    </div>
  );
};

export default InvoiceForm;
