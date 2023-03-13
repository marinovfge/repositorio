import os
from flask import Flask
from sqlalchemy import create_engine

app = Flask(__name__)
app.secret_key = '20485ba791e947005ef076f6eb4ad9d3b1dcb87c0fd3bd95bd2b384059b3c874'
app.config['SQLALCHEMY_DATABASE_URI'] = ("mysql+pymysql://"+ os.environ['DB_USER'] + ":"
                                         + os.environ['DB_PASSWORD']+ "@"
                                         + os.environ['DB_HOST']
                                         + ":3306")
mariadb = create_engine(app.config['SQLALCHEMY_DATABASE_URI'])
print(f"conectado a bbdd: {mariadb.connect()}")