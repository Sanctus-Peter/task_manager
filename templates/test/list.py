import requests


# endpoint = "http://localhost:8000/api/auth/"
#
# auth_response = requests.post(
#     endpoint, json={"username": "admin", "password": "admin"})
# print(auth_response.json())


endpoint = "http://localhost:8000/api/tasks/"


requested_data = requests.get(
    endpoint,
    # params={"abc": 123},
    # data={"name": "John", "age": 23},
    # json={"title": "suit", "description": "Posh Suit", "price": 47048}
)

print(requested_data.json())
print(requested_data.status_code)
