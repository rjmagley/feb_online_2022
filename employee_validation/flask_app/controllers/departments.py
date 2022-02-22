from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.department import Department
from flask_app.models.employee import Employee

@app.route('/')
def index():

    return redirect('/departments')

@app.route('/departments')
def all_departments():
    
    departments = Department.get_all_departments()

    return render_template('departments.html', departments = departments)

@app.route('/departments/create', methods=['POST'])
def create_department():

    if not Department.validate_department(request.form):
        return redirect('/departments')

    else:
        department_id = Department.create_department(request.form)
        return redirect(f'/departments/{department_id}')
        # print("validation OK")
        # return redirect('/departments')

@app.route('/departments/<int:department_id>')
def single_department(department_id):

    data = {'id': department_id}
    department = Department.get_department(data)
    non_department_employees = Employee.get_employees_not_in_department(data)

    return render_template('department_info.html', department = department, non_department_employees = non_department_employees)

@app.route('/departments/<int:department_id>/transfer_employee', methods=['POST'])
def transfer_employee(department_id):

    data = {
        'department_id': department_id,
        'employee_id': request.form['employee_id']
    }

    Employee.transfer_department(data)

    return redirect(f'/departments/{department_id}')