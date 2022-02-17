from flask_app.config.mysqlconnection import connectToMySQL

class Employee:

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.middle_name = data['middle_name']
        self.department_id = data['department_id']
        self.salary = data['salary']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        if 'department' in data:
            self.department = data['department']

    @classmethod
    def get_all_employees(cls):

        query = "SELECT * FROM employees;"

        results = connectToMySQL('employee_example').query_db(query)

        employees = []

        for item in results:
            employees.append(Employee(item))

        return employees

    @classmethod
    def get_one_employee(cls, data):
        query = "SELECT * FROM employees WHERE id = %(employee_id)s;"

        results = connectToMySQL('employee_example').query_db(query, data)

        return Employee(results[0])

    @classmethod
    def create_employee(cls, data):

        query = "INSERT INTO employees (first_name, middle_name, last_name, salary, department_id) VALUES (%(first_name)s, %(middle_name)s, %(last_name)s, %(salary)s, %(department_id)s);"
        
        result = connectToMySQL('employee_example').query_db(query, data)

        return result

    @classmethod
    def update_employee(cls, data):

        query = "UPDATE employees SET first_name = %(first_name)s, middle_name = %(middle_name)s, last_name = %(last_name)s, salary = %(salary)s WHERE id = %(id)s;"

        connectToMySQL('employee_example').query_db(query, data)

    @classmethod
    def delete_employee(cls, data):
        query = "DELETE FROM employees WHERE id = %(id)s;"

        connectToMySQL('employee_example').query_db(query, data)