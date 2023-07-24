import requests

endpoint = "http://localhost:8000/api/tasks/"


requested_data = requests.post(
    endpoint,
    params={"abc": 123},
    # data={"name": "John", "age": 23},
    json={"title": "suit", "description": "Posh Suit"}
)

print(requested_data.json())
print(requested_data.status_code)
