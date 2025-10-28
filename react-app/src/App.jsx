// import { Component } from "react";
// export default class Company extends Component {
//   constructor() {
//     super();
//     this.company = {
//       name: "Fujitsu Consulting India Pvt. Ltd.",
//       CEO: "Takahito Tokita San",
//       slogan: "Shaping tomorrow with you",
//       description:
//         "Fujitsu is a global leader in technology and business solutions, dedicated to driving innovation and sustainability across industries. The company focuses on creating value through digital transformation and responsible innovation.",
//       product:
//         "Digital Transformation Solutions, IT Services, and Cloud Platforms",
//       service:
//         "Consulting, AI Solutions, Managed Services, and Infrastructure Support",
//       location: "Pune, India",
//     };
//   }

//   render() {
//     const { name, CEO, slogan, description, product, service, location } =
//       this.company;

//     return (
//       <>
//         <h1>{name}</h1>
//         <h2>CEO: {CEO}</h2>
//         <p>“{slogan}”</p>

//         <p>{description}</p>

//         <div>
//           <p>
//             <span>Products:</span> {product}
//           </p>
//           <p>
//             <span>Services:</span> {service}
//           </p>
//           <p>
//             <span>Location:</span> {location}
//           </p>
//         </div>
//       </>
//     );
//   }
// }

// export default function PersonalDetails() {
//   const personal = {
//     name: "Suraj Pawar",
//     exp: "3+ years",
//     company: "Fujitsu Consulting India Pvt. Ltd.",
//     address: {
//       street: "Magarpatta City, Tower 8",
//       location: "Pune, Maharashtra",
//       pincode: "411013",
//     },
//     country: "India",
//   };

//   return (
//     <>
//         <h1>
//           Personal Details
//         </h1>

//         <p><strong>Name:</strong> {personal.name}</p>
//         <p><strong>Experience:</strong> {personal.exp}</p>
//         <p><strong>Company:</strong> {personal.company}</p>

//         <div>
//           <h2>Address</h2>
//           <p>{personal.address.street}</p>
//           <p>{personal.address.location}</p>
//           <p>{personal.address.pincode}</p>
//         </div>

//         <p><strong>Country:</strong> {personal.country}</p>
//     </>
//   );
// }

// import { Component } from "react";
// export default class Employee extends Component {
//   render() {
//     const { name, role, experience } = this.props;
//     return (
//       <div>
//         <h2>Name: {name}</h2>
//         <p>Role: {role}</p>
//         <p>Experience: {experience}</p>
//       </div>
//     );
//   }
// }

export default function BlogPost({ title, author, date, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>
        By {author} | {date}
      </p>
      <p>{content}</p>
    </div>
  );
}
