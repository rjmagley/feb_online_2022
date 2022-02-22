from flask_app import app
from flask_app.controllers import departments, employees

if __name__ == "__main__":
    app.run(debug = True)