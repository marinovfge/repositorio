import os
from flask import Flask
from sqlalchemy import create_engine
from dotenv import load_dotenv

load_dotenv('.env')

app = Flask(__name__)
app.secret_key = os.getenv('APP_SECRET_KEY')

# alternatively using os.environ[var] which reads os, but os.getenv reads file dot env
app.config['SQLALCHEMY_DATABASE_URI'] = ("mysql+pymysql://"+ os.getenv('DB_USER') + ":"
                                         + os.getenv('DB_PASSWORD')+ "@"
                                         + os.getenv('DB_HOST')
                                         + ":3306")

mariadb = create_engine(app.config['SQLALCHEMY_DATABASE_URI'])
print(f"conectado a bbdd: {mariadb.connect()}")