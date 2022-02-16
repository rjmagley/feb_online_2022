from mysqlconnection import connectToMySQL

class Employee:

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.middle_name = data['middle_name']
        self.salary = data['salary']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all_employees(cls):

        query = "SELECT * FROM employees;"

        results = connectToMySQL('feb_employees').query_db(query)

        employees = []

        for item in results:
            employees.append(Employee(item))

        return employees

    @classmethod
    def create_employee(cls, data):

        # query = "INSERT INTO employees (first_name, middle_name, last_name, salary) VALUES "



        query = "INSERT INTO employees (first_name, middle_name, last_name, salary) VALUES (%(first_name)s, %(middle_name)s, %(last_name)s, %(salary)s);"
        
        result = connectToMySQL('feb_employees').query_db(query, data);

        return result

