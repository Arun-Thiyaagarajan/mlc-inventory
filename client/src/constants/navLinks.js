// src/constants/navLinks.js
import { nanoid } from "nanoid";
import { Heart, Home, LogOut, Settings, SquarePlus, Store, User } from "lucide-react";

export const navLinks = [
  { id: nanoid(), label: "Home", icon: Home, path: "/", adminOnly: false },
  { id: nanoid(), label: "Inventory", icon: Store, path: "inventory", adminOnly: false },
  { id: nanoid(), label: "Add Products", icon: SquarePlus, path: "add-products", adminOnly: true },
  // { id: nanoid(), label: "Categories", icon: Store, path: "categories" },
  // { id: uuidv4(), label: "Services", path: "/services" },
  // { id: uuidv4(), label: "Contact", path: "/contact" },
];

export const profileLinks = [
  { id: nanoid(), label: "Profile", icon: User, path: "my-profile" },
  { id: nanoid(), label: "My Favourites", icon: Heart, path: "my-favourites" },
  { id: nanoid(), label: "Settings", icon: Settings, path: "settings" },
  { id: nanoid(), label: "Logout", icon: LogOut, path: "logout" },
];
