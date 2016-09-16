# annict-token-publisher
Annict access_token publish server for client app

```
 ______  client_id, response_type, redirect_uri [, scope]   ______
|      | ------------------------------------------------> |      |
|      |                authorization_code                 |      |
|client| <------------------------------------------------ |      |
|      |                              client_id,           |Annict|
|      |authorization_code _________  client_secret,       | API  |
|      | ---------------> |         | authorization_code   |      |
|      |                  |  token  | -------------------> |      |
|      |                  |publisher|     access_token     |      |
|      |   access_token   |         | <------------------- |      |   
|______| <--------------- |_________|                      |______|
```
