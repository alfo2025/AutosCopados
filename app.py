from flask import Flask, redirect, render_template, request, url_for

from config import CONFIG_DB
from utilidades._mysql_db import deleteDB, insertDB, selectDB, updateDB
from utilidades.request_utils import getRequest

app = Flask(__name__)

@app.route("/")
def inicio():
    pagina = render_template("inicio.html", datos = {})
    return pagina



if __name__ == "__main__":
    app.run(debug=True)
