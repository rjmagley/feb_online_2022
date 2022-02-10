from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/another_route')
def another_route():
    return "this is another route on the server!!!!!!!!"

@app.route('/resource/<id>')
def variable_example(id):
    return f"requested resource with id {id}"

@app.route('/multiply/<int:x>/<int:y>')
def multiply(x, y):
    result = x * y
    return render_template('multiply.html',
        x = x,
        y = y, 
        result = result
    )

@app.route('/multiply/<int:x>/<int:y>/table')
def multiplication_table(x, y):
    return render_template('table.html', x = x, y = y)

@app.route('/multiply2/<int:x>/<int:y>/table')
def multiplication_table2(x, y):
    results_list = []
    for i in range(-1, x + 1):
        result_i = []
        for j in range(-1, y + 1):
            if (i == -1 and j == -1):
                result_i.append('X')
            elif (i == -1):
                result_i.append(j)
            elif (j == -1):
                result_i.append(i)
            else:
                result_i.append(i * j)
        results_list.append(result_i)

    print(results_list)

    return render_template('table2.html', x = x, y = y, results = results_list)

if __name__ == "__main__":
    app.run(debug = True)
    #     app.run(debug = True, port=5001) if you need to change the port