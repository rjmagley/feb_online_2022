from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.department import Department

@app.route('/')
def index():

    return redirect('/departments')

@app.route('/departments')
def all_departments():
    
    departments = Department.get_all_departments()

    return render_template('departments.html', departments = departments)

@app.route('/departments/create', methods=['POST'])
def create_department():

    Department.create_department(request.form)
    return redirect('/departments')