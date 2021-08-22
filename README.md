# App Credits Example

This example shows you how to build a simple credit-based store using the numary [ledger](https://github.com/numary/ledger).

<img width="1015" alt="Capture d’écran 2021-08-23 à 01 24 56" src="https://user-images.githubusercontent.com/1770991/130373310-e0a07cfb-5e9b-4176-81ae-f9229d68cf41.png">

## Installation

1. You will need an instance of Numary [ledger](https://github.com/numary/ledger) running locally
2. Clone the repository, then build & start the app:

```SHELL
yarn build
yarn serve
```

4. Head to [http://localhost:3000](http://localhost:3000)
5. Find your user id on the app (Welcome, $userId) then issue yourself some credits:

```SHELL
curl -X POST -H "x-user-id: admin" http://localhost:3000/api/admin/users/users:56102611/funding
```

Replacing `56102611`by your user id.