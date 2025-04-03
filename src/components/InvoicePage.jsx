// Description: This component allows users to create an invoice by filling out customer details and item information. It also provides a preview of the invoice and a print option.

import React, { useState } from 'react';
import { SiLinkedin } from "react-icons/si";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';





function InvoicePage() {
  const [shopName, setShopName] = useState('');
  const [shopAddress, setShopAddress] = useState('');
  const [shopContactNumber, setShopContactNumber] = useState('');
  const [items, setItems] = useState([{ name: '', quantity: '', price: '' }]);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().slice(0, 10));
  const [invoiceNumber, setInvoiceNumber] = useState(
    `INV-${Math.floor(Math.random() * 1000000)}`
  );
  const [showPreview, setShowPreview] = useState(false);

  const options = ['KG (Kilogram)', 'G (Gram)', 'PS (Pieces)', 'L (Liter)', 'ML (Milliliter)', 'Dozen', 'Box', 'Pack', 'M (Meter)'];
  const [unitOfMeasure, setUnitOfMeasure] = useState(options[0]);
  const [uomInputValue, setUomInputValue] = useState('');

  const addItem = () => setItems([...items, { name: '', quantity: '', price: '' }]);
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

          <div className='flex flex-col sm:flex-row sm:w-full justify-between mb- gap-4'>

            {/* store info */}
            <div className='mb-4 border p-4 rounded-lg sm:w-1/2'>
              <h1 className="text-xl font-bold mb-2 text-center underline underline-offset-4 text-gray-600">Store Information</h1>
              <div className="mb-4">

                <TextField id="outlined-basic" label="Name" variant="outlined" size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#45ccb8', // Border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#45ccb8', // Border color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#45ccb8', // Border color when focused
                      },
                    },
                    // Label color customization
                    '& .MuiInputLabel-root': {
                      color: '#45ccb8', // Default label color
                      '&.Mui-focused': {
                        color: '#45ccb8', // Label color when focused
                      },
                    },
                  }}
                  className="w-full"

                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  placeholder="The Lazy Panda Mart"
                />
              </div>

              <div className="mb-4">
                <TextField id="outlined-basic" label="Address" variant="outlined" size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#45ccb8', // Border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#45ccb8', // Border color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#45ccb8', // Border color when focused
                      },
                    },
                    // Label color customization
                    '& .MuiInputLabel-root': {
                      color: '#45ccb8', // Default label color
                      '&.Mui-focused': {
                        color: '#45ccb8', // Label color when focused
                      },
                    },
                  }}
                  className="w-full"
                  value={shopAddress}
                  onChange={(e) => setShopAddress(e.target.value)}
                  placeholder=" 404 Nowhere Street, Dreamland"
                />
              </div>


              <div className="mb-4">
                <TextField id="outlined-basic" label="Contact_no" variant="outlined" size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#45ccb8', // Border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#45ccb8', // Border color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#45ccb8', // Border color when focused
                      },
                    },
                    // Label color customization
                    '& .MuiInputLabel-root': {
                      color: '#45ccb8', // Default label color
                      '&.Mui-focused': {
                        color: '#45ccb8', // Label color when focused
                      },
                    },
                  }}
                  className="w-full"
                  value={shopContactNumber}
                  onChange={(e) => setShopContactNumber(e.target.value)}
                  placeholder="+91-1234567890"
                />
              </div>
            </div>

            {/* customer info */}
            <div className='mb-4 border p-4 rounded-lg sm:w-1/2'>
              <h1 className="text-xl font-bold mb-2 text-center underline underline-offset-4 text-gray-600">Customer Information</h1>
              <div className="mb-4">
                <TextField id="outlined-basic" label="Name" variant="outlined" size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#45ccb8', // Border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#45ccb8', // Border color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#45ccb8', // Border color when focused
                      },
                    },
                    // Label color customization
                    '& .MuiInputLabel-root': {
                      color: '#45ccb8', // Default label color
                      '&.Mui-focused': {
                        color: '#45ccb8', // Label color when focused
                      },
                    },
                  }}
                  className="w-full"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder='Sadique'
                />
              </div>

              <div className="mb-4">
                <TextField id="outlined-basic" label="Address" variant="outlined" size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#45ccb8', // Border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#45ccb8', // Border color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#45ccb8', // Border color when focused
                      },
                    },
                    // Label color customization
                    '& .MuiInputLabel-root': {
                      color: '#45ccb8', // Default label color
                      '&.Mui-focused': {
                        color: '#45ccb8', // Label color when focused
                      },
                    },
                  }}
                  className="w-full"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder='221B Baker Street, Bhopal'
                />
              </div>

              <div className="mb-4">
                <TextField id="outlined-basic" label="Contact_no" variant="outlined" size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#45ccb8', // Border color
                      },
                      '&:hover fieldset': {
                        borderColor: '#45ccb8', // Border color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#45ccb8', // Border color when focused
                      },
                    },
                    // Label color customization
                    '& .MuiInputLabel-root': {
                      color: '#45ccb8', // Default label color
                      '&.Mui-focused': {
                        color: '#45ccb8', // Label color when focused
                      },
                    },
                  }}
                  className="w-full"
                  value={customerNumber}
                  onChange={(e) => setCustomerNumber(e.target.value)}
                  placeholder='+91-9876543210'
                />
              </div>
            </div>
          </div>

          <div className="mb-4 border p-4 rounded-lg ">
            <label className="block font-medium text-[#45ccb8]">Date</label>
            <input
              type="date"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
              className="w-full px-4 py-2 rounded ring-1 ring-[#45ccb8] focus:ring-[#45ccb8] focus:outline-none text-[#45ccb8]"
            />
          </div>

          {/* Purchased Items */}
          <div className='mb-4 border p-4 rounded-lg '>
            <div className="mb-6">
              <h3 className="text-lg text-center font-bold mb-4 underline underline-offset-4 text-gray-600">Purchased Items</h3>
              {items.map((item, index) => (

                <div key={index} className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-4">
                  <TextField id="outlined-basic" label="Item Name" variant="outlined" size="small" value={item.name} onChange={(e) => {
                    const updatedItems = [...items];
                    updatedItems[index].name = e.target.value;
                    setItems(updatedItems);
                  }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#45ccb8', // Border color
                        },
                        '&:hover fieldset': {
                          borderColor: '#45ccb8', // Border color on hover
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#45ccb8', // Border color when focused
                        },
                      },
                      // Label color customization
                      '& .MuiInputLabel-root': {
                        color: '#45ccb8', // Default label color
                        '&.Mui-focused': {
                          color: '#45ccb8', // Label color when focused
                        },
                      },
                    }}
                  />

                  <TextField id="outlined-basic" label="Quantity" variant="outlined" size="small" value={item.quantity}
                    onChange={(e) => {
                      const updatedItems = [...items];
                      updatedItems[index].quantity = +e.target.value;
                      setItems(updatedItems);
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#45ccb8', // Border color
                        },
                        '&:hover fieldset': {
                          borderColor: '#45ccb8', // Border color on hover
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#45ccb8', // Border color when focused
                        },
                      },
                      // Label color customization
                      '& .MuiInputLabel-root': {
                        color: '#45ccb8', // Default label color
                        '&.Mui-focused': {
                          color: '#45ccb8', // Label color when focused
                        },
                      },
                    }}
                  />

                  <Autocomplete
                    value={item.unitOfMeasure}  // Set the unit of measure for this specific item
                    onChange={(event, newValue) => {
                      const updatedItems = [...items];
                      updatedItems[index].unitOfMeasure = newValue; // Update only the selected item's unitOfMeasure
                      setItems(updatedItems);  // Set the updated list of items
                    }}
                    options={options}  // The list of units of measure
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Unit of Measure"
                        size="small"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: '#45ccb8', // Border color
                            },
                            '&:hover fieldset': {
                              borderColor: '#45ccb8', // Border color on hover
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#45ccb8', // Border color when focused
                            },
                          },
                          // Label color customization
                          '& .MuiInputLabel-root': {
                            color: '#45ccb8', // Default label color
                            '&.Mui-focused': {
                              color: '#45ccb8', // Label color when focused
                            },
                          },
                        }}
                      />
                    )}
                  />


                  <TextField id="outlined-basic" label="Price" variant="outlined" size="small" value={item.price}
                    onChange={(e) => {
                      const updatedItems = [...items];
                      updatedItems[index].price = +e.target.value;
                      setItems(updatedItems);
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: '#45ccb8', // Border color
                        },
                        '&:hover fieldset': {
                          borderColor: '#45ccb8', // Border color on hover
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#45ccb8', // Border color when focused
                        },
                      },
                      // Label color customization
                      '& .MuiInputLabel-root': {
                        color: '#45ccb8', // Default label color
                        '&.Mui-focused': {
                          color: '#45ccb8', // Label color when focused
                        },
                      },
                    }}
                  />


                  <button
                    onClick={() => removeItem(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full sm:w-auto"
                  >
                    Remove Item
                  </button>
                </div>
              ))}

              <button
                onClick={addItem}
                className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-[#2E7C75] w-full sm:w-auto"
              >
                Add Item
              </button>
            </div>
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
          {/* Invoice Header */}
          <h1 className="text-3xl font-extrabold text-center mb-3 text-[#1E3A8A] uppercase tracking-wide">
            {shopName || 'Invoice'}
          </h1>
          <p className="text-center text-gray-600 text-sm">
            {shopAddress} | <span className="font-medium">Contact No:</span> {shopContactNumber}
          </p>
          <hr className="my-4 border-t-2 border-gray-300" />

          {/* Invoice Details */}
          <div className='bg-gray-100 p-3 rounded-lg mb-4'>

            <div className="flex justify-between text-gray-700">
              <p><strong>Invoice No:</strong> {invoiceNumber}</p>
              <p><strong>Date:</strong> {invoiceDate}</p>
            </div>
            <span className='text-gray-700'>
              <p><strong>Customer Name:</strong> {customerName}</p>
              <p><strong>Customer Address:</strong> {customerAddress}</p>
              <p><strong>Customer Contact_no:</strong> {customerNumber}</p>
            </span>

          </div>

          <h3 className="text-lg font-bold mt-4 text-[#1E3A8A]">Purchased Items</h3>
          <table className="w-full border-collapse border border-gray-300 mt-2 text-gray-800">
            <thead>
              <tr className="bg-[#45ccb8] text-white">
                <th className="border p-2">Item</th>
                <th className="border p-2">Quantity</th>
                <th className='border p-2'>UOM</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.quantity}</td>
                  <td className="border p-2">{item.unitOfMeasure}</td>
                  <td className="border p-2">{item.price}</td>
                  <td className="border p-2">{item.quantity * item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total Amount */}
          <h3 className="text-xl font-bold mt-4 text-[#1E3A8A]">Total: {calculateTotal()}</h3>

          {/* Action Buttons */}
          <div className="flex space-x-2 mt-4">
            <button
              onClick={handlePrint}
              className="bg-[#1E3A8A] text-white px-4 py-2 rounded hover:bg-[#162D6A] transition"
            >
              Print Invoice
            </button>
            <button
              onClick={() => setShowPreview(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
            >
              Back to Form
            </button>
          </div>

          {/* Footer Section */}
          <div className="border-t mt-6 pt-4 text-center text-gray-600">
            <p className="font-semibold text-lg">💙 Thank you for choosing <b className="text-[#45ccb8]">Invoicify</b>!</p>
            <p className="text-sm text-gray-500">Follow us for updates & offers:</p>

            <div className="flex justify-center items-center space-x-4 mt-2">
              <div className="flex items-center space-x-1 text-blue-600 font-medium">
                <SiLinkedin className="text-xl" />
                <p className="text-base">/mdsadique5</p>
              </div>

              <div className="flex items-center space-x-1 text-blue-600 font-medium">
                <SiLinkedin className="text-xl" />
                <p className="text-base">/invoicify-in</p>
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
}

export default InvoicePage;

