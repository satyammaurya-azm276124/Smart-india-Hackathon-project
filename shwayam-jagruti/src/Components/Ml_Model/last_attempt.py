# -*- coding: utf-8 -*-
"""
Created on Thu Aug 18 02:36:42 2022

@author: lenovo
"""

import numpy as np
import pickle
import pandas as pd
#from flasgger import Swagger
import streamlit as st 

from PIL import Image

#app=Flask(__name__)
#Swagger(app)

pickle_in = open("classifier.pkl","rb")
classifier=pickle.load(pickle_in)

#@app.route('/')
def welcome():
    return "Welcome All"

#@app.route('/predict',methods=["Get"])
def predict_schemes(People_ID,GENDER,AGE,INCOME,BANK_ACCOUNT,Domecile):
    
    """Let's Authenticate the Banks Note 
    This is using docstrings for specifications.
    ---
    parameters:  
      - name: variance
        in: query
        type: number
        required: true
      - name: skewness
        in: query
        type: number
        required: true
      - name: curtosis
        in: query
        type: number
        required: true
      - name: entropy
        in: query
        type: number
        required: true
    responses:
        200:
            description: The output values
        
    """
   
    prediction=classifier.predict([[People_ID,GENDER,AGE,INCOME,BANK_ACCOUNT,Domecile]])
    print(prediction)
    return prediction



def main():
    st.title("Schemes_prediction")
    html_temp = """
    <div style="background-color:tomato;padding:10px">
    <h2 style="color:white;text-align:center;">DEPARTMENTAL USER LOGIN </h2>
    </div>
    """
    st.markdown(html_temp,unsafe_allow_html=True)
    People_ID = st.text_input("People_ID"," ")
    GENDER = st.text_input("GENDER"," ")
    AGE = st.text_input("AGE"," ")
    INCOME = st.text_input("INCOME"," ")
    BANK_ACCOUNT = st.text_input("BANK_ACCOUNT"," ")
    Domecile = st.text_input("Domecile"," ")
    result=""
    if st.button("Predict"):
        result=predict_schemes(People_ID,GENDER,AGE,INCOME,BANK_ACCOUNT,Domecile)
    st.success('Suggested Schemes {}'.format(result))
    if st.button("About"):
        st.text("Lets LEarn")
        st.text("Built with Streamlit")

if __name__=='__main__':
    main()