import express, { application } from 'express';
import { createProperty, getAllPropertys, getPropertyById, updateProperty, deleteProperty } from "../controller/PropertyController.js";
const router = express.Router();
// import auth, { authorizeRole } from '../config/auth.js';

router.post("/createProperty", createProperty);
router.get("/getAllPropertys", getAllPropertys);
router.get("/getPropertyById/:id", getPropertyById);
router.put("/updateProperty/:id",  updateProperty);
router.delete("/deleteProperty/:id",deleteProperty);
export default router;