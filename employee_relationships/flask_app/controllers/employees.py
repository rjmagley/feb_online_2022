from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.employee import Employee

@app.route('/employees/create', methods=['POST'])
def create_employee():
    print(request.form)

    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'salary': request.form['salary'],
        'department_id': request.form['department_id']
    }
    if request.form['middle_name'] != '':
        data['middle_name'] = request.form['middle_name']
    else:
        data['middle_name'] = None

    Employee.create_employee(data)
    return redirect('/departments')