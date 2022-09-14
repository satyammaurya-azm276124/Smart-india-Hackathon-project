#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np


# In[2]:


df=pd.read_csv(r"C:\Users\lenovo\Downloads\SH1007 (1).csv")


# In[3]:


df


# In[4]:




### Independent and Dependent features
X=df.iloc[:,:-1]
y=df.iloc[:,-1]


# In[5]:


X.head()


# In[6]:


y.head()


# In[7]:


### Train Test Split
from sklearn.model_selection import train_test_split


# In[8]:


X_train,X_test,y_train,y_test=train_test_split(X,y,test_size=0.3,random_state=0)


# In[9]:


### Implement Random Forest classifier
from sklearn.ensemble import RandomForestClassifier
classifier=RandomForestClassifier()
classifier.fit(X_train,y_train)


# In[10]:


## Prediction
y_pred=classifier.predict(X_test)


# In[11]:


### Check Accuracy
from sklearn.metrics import accuracy_score
score=accuracy_score(y_test.values,y_pred)


# In[12]:


score


# In[13]:


### Create a Pickle file using serialization 
import pickle
pickle_out = open("classifier.pkl","wb")
pickle.dump(classifier, pickle_out)
pickle_out.close()


# In[14]:


classifier.predict([[1,1,30,100000,1,1]])


# In[ ]:





# In[ ]:




