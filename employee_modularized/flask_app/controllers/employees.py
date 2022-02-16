from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.employee import Employee

@app.route('/')
def index():
    employees = Employee.get_all_employees()

    return render_template('index.html', employees = employees)

@app.route('/employees/new')
def new_employee():

    return render_template('new_employee.html')

@app.route('/employees/create', methods=['POST'])
def create_employee():
    Employee.create_employee(request.form)
    return redirect('/')

@app.route('/employees/<int:employee_id>')
def single_employee(employee_id):
    data = {
        'employee_id': employee_id
    }
    employee = Employee.get_one_employee(data)
    return render_template('employee.html', employee = employee)

@app.route('/employees/<int:employee_id>/update', methods=['POST'])
def update_employee(employee_id):
    
    data = {
        'id': employee_id,
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'salary': request.form['salary']
    }
    if request.form['middle_name'] != '':
        data['middle_name'] = request.form['middle_name']
    else:
        data['middle_name'] = None

    Employee.update_employee(data)

    return redirect(f'/employees/{employee_id}')

@app.route('/employees/<int:employee_id>/delete')
def delete_employee(employee_id):

    data = {'id': employee_id}

    Employee.delete_employee(data)

    return redirect('/')