const express = require('express')
const router = express.Router()

// const { getAllEmployees, getEmployee, createEmp, deleteEmp, updateEmp } = require('../../controllers/employeesController')
const employeesController = require('../../controllers/employeesController')


router.route('/')
.get(employeesController.getAllEmployees)
.post(employeesController.createNewEmployee)
.put(employeesController.updateEmployee)
.delete(employeesController.deleteEmployee)

router.route('/:id')
.get(employeesController.getEmployee)
.delete(employeesController.deleteEmployee)

module.exports = router