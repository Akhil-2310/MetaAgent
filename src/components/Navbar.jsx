// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAccount, useConnect, useDisconnect } from "wagmi"; 
import { metaMask } from "wagmi/connectors";

function Navbar() {

const { address, isConnected } = useAccount();
const { connect } = useConnect();
const { disconnect } = useDisconnect();

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Linea AI Agent
        </Link>
        <div>
          {isConnected ? (
            <button
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded gap-4"
              onClick={() => disconnect()}
            >
              Disconnect
            </button>
          ) : (
            <button
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded gap-4"
              onClick={() => connect({ connector: metaMask() })}
            >
              Connect Wallet
            </button>
          )}
            {isConnected ? `Address: ${address}` : "Not connected"}

          <Link to="/" className="bg-red-500 hover:bg-blue-600 px-4 py-2 rounded m-4">
            Home
          </Link>
          <Link
            to="/transactions"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded m-4"
          >
            Transactions
          </Link>
          <Link
            to="/consensys"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded m-4"
          >
            Consensys
          </Link>
          <Link
            to="/contracts"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
          >
            Contracts
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
