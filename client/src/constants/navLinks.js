// src/constants/navLinks.js
import { v4 as uuidv4 } from "uuid";

const navLinks = [
  { id: uuidv4(), name: "Home", path: "/" },
  { id: uuidv4(), name: "Inventory", path: "/inventory" },
  // { id: uuidv4(), name: "Services", path: "/services" },
  // { id: uuidv4(), name: "Contact", path: "/contact" },
];

export default navLinks;
