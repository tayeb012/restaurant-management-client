import React from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Blog - SavorSphere Eatery</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">One-way Data Binding</h2>
        One-way data binding is a data flow pattern in React where data changes
        in the parent component are passed down to child components, but changes
        in the child components do not affect the parent. It ensures a
        unidirectional flow of data.
      </div>
      <div className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">NPM in Node.js</h2>
        <p className="text-gray-800">
          NPM (Node Package Manager) is a package manager for Node.js and a
          default package manager for the JavaScript runtime.
        </p>
        <p className="text-gray-800">
          In React, NPM is used to manage third-party libraries and tools. It
          allows developers to easily install, share, and manage dependencies.
        </p>
      </div>
      <div className="p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">
          Difference between MongoDB and MySQL:
        </h2>
        <ul className="list-disc pl-6 text-gray-800">
          <li>
            MongoDB is a NoSQL database, while MySQL is a relational database
            management system (RDBMS).
          </li>
          <li>
            MongoDB stores data in a flexible, JSON-like format called BSON,
            while MySQL uses a structured table-based model.
          </li>
          <li>
            MongoDB is schema-less, allowing for dynamic and flexible data
            models, whereas MySQL requires a predefined schema.
          </li>
          <li>
            MongoDB is often used for large-scale, document-oriented
            applications, while MySQL is widely used for traditional relational
            database applications.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
