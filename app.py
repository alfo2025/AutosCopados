from flask import Flask, redirect, render_template, request, url_for

from config import CONFIG_DB
from utilidades._mysql_db import deleteDB, insertDB, selectDB, updateDB
from utilidades.request_utils import getRequest

app = Flask(__name__)

@app.route("/")
def inicio():
    css = '../static/css/inicio.css'
    js = '../static/js/Menu.js'
    pagina = render_template("inicio.html", css = css, js = js)
    return pagina


if __name__ == "__main__":
    app.run(debug=True)
