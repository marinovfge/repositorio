from flask_app import app
from flask_app.models.dashboard import Dashboard
from flask import render_template, redirect, flash, session, request
from urllib import request


@app.route('/dashboard-general')
def dashboard_general():
    return render_template("dashboard_general_test.html")


@app.route('/reporte-crear')
def dashboard_crear():
    fecha_corte = Dashboard.get_fecha_corte()
    return render_template("reporte_crear2.html", fecha_corte=fecha_corte)


@app.route('/dashboard-general-fge')
def dashboard_general_fge():
    fecha_corte = Dashboard.get_fecha_corte()
    return render_template("dashboard_general_fge.html", fecha_corte = fecha_corte)


