from flask import Flask, render_template, redirect, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/handle_form', methods=['POST'])
def handle_form():
    return render_template('result.html',
    full_name = request.form['full_name'],
    mothers_maiden_name = request.form['mothers_maiden_name'],
    ssn = request.form['ssn'])

if __name__ == "__main__":
    app.run(debug=True)

