import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-container'>
            <div className='blog'>
                <h3>
                    1.What is the difference javaScript and Node js
                </h3>
                <h4>
                    # JavaScript
                </h4>
                <p>
                    Javascript is a programming language that is used for writing scripts on the website.Javascript can only be run in the browsers.It is basically used on the client-side.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                </p>
                <h4>
                    # Node JS
                </h4>
                <p>
                    NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side.V8 is the Javascript engine inside of node.js that parses and runs Javascript.Nodejs is used in server-side development.
                </p>

            </div>
            <div className='blog'>
                <h3>
                    2.What is the purpose of jwt and how does it work
                </h3>

                <p>
                    A JWT is a mechanism to verify the owner of some JSON data. It's an encoded, URL-safe string that can contain an unlimited amount of data (unlike a cookie) and is cryptographically signed.

                    When a server receives a JWT, it can guarantee the data it contains can be trusted because it's signed by the source. No middleman can modify a JWT once it's sent.

                    It's important to note that a JWT guarantees data ownership but not encryption. The JSON data you store into a JWT can be seen by anyone that intercepts the token because it's just serialized, not encrypted.
                </p>


            </div>
            <div className='blog'>
                <h3>
                   1. Differences between sql and nosql databases.
                </h3>
                <h4>
                    # SQL
                </h4>
                <p>
                RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.Vertically Scalable
                </p>
                <h4>
                    # NoSQL
                </h4>
                <p>
                Non-relational or distributed database system.They have dynamic schema.These databases are best suited for hierarchical data storage.These databases are not so good for complex queries.Horizontally scalable
                </p>

            </div>
        </div>
    );
};

export default Blogs;