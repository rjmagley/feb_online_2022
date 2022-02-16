from flask import Flask, render_template, redirect, request
from employee import Employee

app = Flask(__name__)

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

if __name__ == "__main__":
    app.run(debug = True)