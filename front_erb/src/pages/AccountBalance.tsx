import { useState } from "react";

const FinancialTransactions = () => {
  const [openinVoice, setOpenInvoice] = useState(false);
  const handleClickInvoicer = () => {
    setOpenInvoice(true);
  };
  const handleClickfininctial = () => {
    setOpenInvoice(false);
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Account balance
            </h2>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Recharge balance
            </button>
          </div>

          {/* Balance Overview */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div>
              <h4 className="text-sm text-gray-600">Total balance</h4>
              <p className="text-lg font-semibold">0.00 $</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-600">Pending balance</h4>
              <p className="text-lg font-semibold">0.00 $</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-600">Available balance</h4>
              <p className="text-lg font-semibold">0.00 $</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-600">Withdrawal balance</h4>
              <p className="text-lg font-semibold">0.00 $</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="border-b mb-4">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={handleClickfininctial}
                className={`border-b-2 ${
                  openinVoice
                    ? " text-gray-500 border-b-2 border-transparent"
                    : "border-orange-500 text-orange-600"
                } py-4 px-1 text-sm font-medium`}
              >
                Financial transactions
              </button>
              <button
                onClick={handleClickInvoicer}
                className={` border-b-2 ${
                  openinVoice
                    ? " border-orange-500 text-orange-600"
                    : " text-gray-500 border-b-2 border-transparent"
                }`}
              >
                Invoices
              </button>
            </nav>
          </div>
          {openinVoice ? (
            <div className="bg-gray-100 min-h-screen p-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                {/* Filters */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-700 mb-2">
                    The condition
                  </h5>
                  <div className="space-y-1">
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-orange-600"
                          checked
                        />
                        <span className="ml-2 text-sm text-gray-700">Paid</span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-orange-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Waiting for payment
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Invoice List */}
                <div className="border rounded-lg p-4 text-center text-gray-500">
                  No search results
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 ">
              {/* Filters */}
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">Period</h5>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="From"
                      className="border rounded py-2 px-3 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="To"
                      className="border rounded py-2 px-3 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">
                    Transaction type
                  </h5>
                  <div className="space-y-1">
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-orange-600"
                          checked
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Addition
                        </span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-orange-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          VIP fees
                        </span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-orange-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Profits withdrawal fees
                        </span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-orange-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Finish a project
                        </span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-orange-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Correct a deal
                        </span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-orange-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Cancel a deal
                        </span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-orange-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Invoice
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transaction List */}
              <div className="space-y-4 ml-[-150px]">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-red-500 font-semibold">-30.00$</p>
                      <p className="text-sm text-gray-700">
                        Refund using credit card #0000
                      </p>
                    </div>
                    <p className="text-xs text-gray-500">18/08/2024</p>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-green-500 font-semibold">+30.00$</p>
                      <p className="text-sm text-gray-700">
                        Refund using credit card #0000
                      </p>
                    </div>
                    <p className="text-xs text-gray-500">18/08/2024</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FinancialTransactions;
