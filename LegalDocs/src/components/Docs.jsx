import React from "react";
import { useAuthStatus } from "../hooks/useAuthStatus";

export default function Docs() {
  const isAuth = useAuthStatus("/");
  if (!isAuth) return null;

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-4">Documentation</h1>
      <p className="mb-6 text-gray-700">
        Welcome to the LegalDocs documentation page. Here you’ll find all the
        guides and API references you need.
      </p>
      <div className="space-y-4">
        <section className="p-4 bg-gray-100 rounded shadow">
          <h2 className="text-2xl font-semibold">Getting Started</h2>
          <p className="text-gray-600">
            Learn how to set up the project, run locally, and deploy.
          </p>
        </section>
        <section className="p-4 bg-gray-100 rounded shadow">
          <h2 className="text-2xl font-semibold">API Reference</h2>
          <p className="text-gray-600">
            Detailed information on all available endpoints.
          </p>
        </section>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
}
