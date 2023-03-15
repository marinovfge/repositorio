from flask_app import app
from flask import render_template, redirect, flash, session, request
from urllib import request

@app.route('/', methods=['GET'])
def index():
    return render_template("index.html")
