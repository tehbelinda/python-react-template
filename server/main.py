from flask import Flask, render_template

app = Flask(__name__, static_folder="../static", template_folder="../tmpl")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/hello")
def hello():
    return "Hello World!"

if __name__ == "__main__":
    app.run()
