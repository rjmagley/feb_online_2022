from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "this server is working!!!! :3"

@app.route('/another_route')
def another_route():
    return "this is another route on the server!!!!!!!!"

@app.route('/resource/<id>')
def variable_example(id):
    return f"requested resource with id {id}"

@app.route('/multiply/<int:x>/<int:y>')
def multiply(x, y):
    result = x * y
    return f"The result of {x} and {y} is {result}"

if __name__ == "__main__":
    app.run(debug = True)