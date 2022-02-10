class Department:

    departments = []

    def __init__(self, name, location):
        self.name = name
        self.location = location
        self.employees = []
        Department.departments.append(self)

    def add_employee(self, employee):
        self.employees.append(employee)

    def modify_salaries(self, change):
        for employee in self.employees:
            employee.change_salary(int(employee.salary * (1 + change)))

    @classmethod
    def list_all_departments(cls):
        for department in cls.departments:
            print(f"{department.name} - {len(department.employees)}")

    def __repr__(self):
        return self.name


class Employee:

    def __init__(self, first_name, last_name, salary, department, middle_name = None):
        self.first_name = first_name
        self.middle_name = middle_name
        self.last_name = last_name
        self.salary = salary
        self.department = department

        department.add_employee(self)


    def change_salary(self, new_salary):
        if isinstance(new_salary, int):
            if new_salary > 40000:
                self.salary = new_salary
            else:
                self.salary = 40000

    def full_name(self):
        if self.middle_name != None:
            return f"{self.first_name} {self.middle_name} {self.last_name}"
        else:
            return f"{self.first_name} {self.last_name}"

    def __repr__(self):
        return f"{self.first_name[0]} {self.last_name} - {self.department}"


department_a = Department("Sales", "301A")
department_b = Department("Engineering", "208B")
department_c = Department("HR", "801C")

departments = [department_a, department_b, department_c]

new_employee = Employee("Adam", "Jones", 48000, department_a)
new_employee2 = Employee("Brad", "Smith", 68000, department_c)
new_employee3 = Employee("Charlie", "Adams", 74000, department_b, middle_name = "Jacob")
new_employee4 = Employee(last_name="Alexander", first_name = "Dave", department = department_b, salary = 74000)
new_employee5 = Employee("Eric", "Smith", 78000, department_a)
new_employee6 = Employee("Francis", "Lastname", 63000, department_a)

# print(len(new_employee.department.employees))

# for department in departments:
#     print(f"{department.name} - {len(department.employees)} employees")
#     for employee in department.employees:
#         print(f"{employee.full_name()} - {employee.salary}")

Department.list_all_departments()

print(department_a.departments)

# employees = [new_employee, new_employee2, new_employee3, new_employee4]

# for employee in employees:
#     print(employee)