from flask_app.config.mysqlconnection import connectToMySQL

from flask_app.models.employee import Employee

class Department:

    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.employees = []

    def total_salary(self):
        salary = 0

        for employee in self.employees:
            salary += employee.salary

        return salary

    # old way - just getting departments
    # @classmethod
    # def get_all_departments(cls):

    #     query = "SELECT * FROM departments;"

    #     results = connectToMySQL('employee_example').query_db(query)

    #     departments = []

    #     for item in results:
    #         print("individual row from results:")
    #         print(item)
    #         departments.append(Department(item))

    #     print(departments)

    #     return departments

    @classmethod
    def get_all_departments(cls):

        query = "SELECT * FROM departments LEFT JOIN employees ON departments.id = employees.department_id;"

        results = connectToMySQL('employee_example').query_db(query)

        departments = []

        new_department = Department(results[0])
        departments.append(new_department)

        for item in results:

            # print(item)
            # print('\n')

            if item['id'] != new_department.id:
                new_department = Department(item)
                departments.append(new_department)
            
            if item['employees.id'] != None:
                employee_data = {
                    'id': item['employees.id'],
                    'first_name': item['first_name'],
                    'last_name': item['last_name'],
                    'middle_name': item['middle_name'],
                    'department_id': item['department_id'],
                    'salary': item['salary'],
                    'created_at': item['employees.created_at'],
                    'updated_at': item['employees.updated_at'],
                    'department': new_department
                }
                new_employee = Employee(employee_data)
                new_department.employees.append(new_employee)

        print(departments)

        return departments

    @classmethod
    def create_department(cls, data):

        query = "INSERT INTO departments (name, location) VALUES (%(department_name)s, %(department_location)s);"
        
        result = connectToMySQL('employee_example').query_db(query, data)

        return result

    @classmethod
    def get_department(cls, data):
        query = "SELECT * FROM departments LEFT JOIN employees ON departments.id = employees.department_id WHERE departments.id = %(id)s;"

        results = connectToMySQL('employee_example').query_db(query, data)

        new_department = Department(results[0])
        
        for item in results:
            
            if item['employees.id'] != None:
                employee_data = {
                    'id': item['employees.id'],
                    'first_name': item['first_name'],
                    'last_name': item['last_name'],
                    'middle_name': item['middle_name'],
                    'department_id': item['department_id'],
                    'salary': item['salary'],
                    'created_at': item['employees.created_at'],
                    'updated_at': item['employees.updated_at'],
                    'department': new_department
                }
                new_employee = Employee(employee_data)
                new_department.employees.append(new_employee)

        return new_department