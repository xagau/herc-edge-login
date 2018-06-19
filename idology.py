import os
import csv
import requests
import xml.etree.ElementTree as ET
from dotenv import load_dotenv

APP_ROOT = os.path.join(os.path.dirname(__file__), '.') # refers to application_top
dotenv_path = os.path.join(APP_ROOT, '.env')
load_dotenv(dotenv_path)

username = os.getenv('username')
password = os.getenv('password')
url = "https://web.idologylive.com/api/idiq.svc"

# r = requests.get(url, auth=(username, password))
r = requests.post(url, data = {
'username' : username, #YOUR ExpectID USERNAME (16)
'password' : password, #YOUR ExpectID PASSWORD
'invoice': '', #YOUR INVOICE OR ORDER NUMBER (30)
'amount': '', #ORDER AMOUNT
'shipping': '', #SHIPPING AMOUNT
'tax': '',#TAX AMOUNT
'total': '',#TOTAL AMOUNT(SUM OF THE ABOVE)
'idType': '',#TYPE OF ID PROVIDED
'idIssuer': '',#ISSUING AGENCY OF ID
'idNumber': '',#NUMBER ON ID
'paymentMethod': '',#PAYMENT METHOD
'firstName' : 'john',
'lastName' : 'smith',
'address': '222333 peachtree place', #STREET ADDRESS
'city': '',
'state': '', #STATE (2)
'zip' : '30318', #5-DIGIT ZIP CODE (5)
'ssnLast4': '',#LAST 4 DIGITS OF SSN(4)
'ssn': '', #FULL SSN
'dobMonth': '',#MONTH OF BIRTH (2)
'dobDay': '',#DAY OF BIRTH (2)
'dobYear': '', #YEAR OF BIRTH (4)
'ipAddress': '',#IP ADDRESS E.G. 11.111.111.11
'email': '',#EMAIL ADDRESS
'telephone': '', #PHONE NUMBER
'sku': '',
'uid': '', #USER ID (EXTERNAL APPLICATION)
'altAddress': '',
'altCity': '',
'altState': '',
'altZip': '',
})
# MUST INCLUDE ZIP CODE AND/OR CITY + STATE
# USERNAME AND PASSWORD MUST BE HARD CODED TO PREVENT POSSIBLE USER TAMPERING
print(r.status_code)
print(r.encoding)
print(r.text)
with open('test.xml', 'wb') as f:
    f.write(r.content)

tree = ET.parse('test.xml')
root = tree.getroot()
# for child in root:
#     for a in child:
#         print(a.tag, a.attrib)
print(root[0].text) #id-number
print(root[1][0].text) #summary-result/key
print(root[1][1].text) #summary-result/message
print(root[2][0].text) #results/key
print(root[2][1].text) #results/message

"""
Julie's Notes

# Sometimes result will return element <differentiator-question>
    Sometimes the ExpectID process locates records on more than one individual. If ExpectID Differentiator is enabled and triggered, the API will return one question along with the ID results. Post response to https://web.idologylive.com/api/differentiator-answer.svc or https://web.idologylive.com/api/differentiator-answer-iq.svc
    [page 11]

# testing connections to idology in the event of a failover
    $ curl https://209.10.76.166 --insecure SUCCESS
    $ curl https://209.10.76.168 --insecure SUCCESS
    $ wget -O- https://209.10.76.166 --no-check-certificate -q SUCCESS
    $ wget -O- https://209.10.76.168 --no-check-certificate -q SUCCESS

# element <questions>
can be triggered by rules based on results OR generated for each transaction
questions can be skipped
"""
