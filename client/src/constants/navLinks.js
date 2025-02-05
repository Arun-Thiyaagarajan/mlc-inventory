// src/constants/navLinks.js
import { nanoid } from "nanoid";
import { Heart, Home, LogOut, Settings, Store, User } from "lucide-react";

const navLinks = [
  { id: nanoid(), label: "Home", icon: Home, path: "/" },
  { id: nanoid(), label: "Inventory", icon: Store, path: "inventory" },
  // { id: nanoid(), label: "Categories", icon: Store, path: "categories" },
  // { id: uuidv4(), label: "Services", path: "/services" },
  // { id: uuidv4(), label: "Contact", path: "/contact" },
];

const profileLinks = [
  { id: nanoid(), label: "Profile", icon: User, path: "my-profile" },
  { id: nanoid(), label: "My Favourites", icon: Heart, path: "my-favourites" },
  { id: nanoid(), label: "Settings", icon: Settings, path: "settings" },
  { id: nanoid(), label: "Logout", icon: LogOut, path: "logout" },
];

export {
  navLinks,
  profileLinks,
};
