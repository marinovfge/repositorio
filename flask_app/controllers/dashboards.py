from flask_app import app
from flask_app.models.dashboard import Dashboard
from flask import render_template, redirect, flash, session, request
from urllib import request
from datetime import datetime


@app.route('/dashboard-general')
def dashboard_general():
    return render_template("dashboard_general_test.html")


@app.route('/reporte-crear', methods=['GET'])
def dashboard_crear():
    fecha_corte = Dashboard.get_fecha_corte()
    return render_template("reporte_crear2.html", fecha_corte=fecha_corte)


@app.route('/dashboard-general-fge', methods=['GET'])
def dashboard_general_fge():
    fecha_corte = Dashboard.get_fecha_corte()
    return render_template("dashboard_general_fge.html", fecha_corte = fecha_corte)

@app.route('/acerca-de-los-datos')
def acerca_datos():
    fecha_corte = Dashboard.get_fecha_corte()
    fecha_ini = datetime(2015,1,1).strftime("%d/%m/%Y")
    return render_template("acerca_datos.html", fecha_corte=fecha_corte, fecha_ini=fecha_ini)

