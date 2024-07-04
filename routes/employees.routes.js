import express from "express";
import employees from "../controllers/employees.controller.js";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data;

    if (id) {
      data = await employees.findOne(id);
    } else {
      data = await employees.findAll();
    }

    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let employeeDTO = req.body;
    if (!employeeDTO || Object.keys(employeeDTO).length === 0) {
      return res.status(400).json({ error: "Employee data is required" });
    }
    let data = await employees.addOne(employeeDTO);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let employeeDTO = req.body;
    let data = await employees.updateOne(id, employeeDTO);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data = await employees.removeOne(id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

export default router;
