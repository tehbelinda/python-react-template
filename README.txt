Initial server setup
```
cd server
virtualenv .
source bin/activate
pip install -r requirements.txt
```

Run python server using virtualenv
```
source server/bin/activate
python server/main.py
```

Build JS
```
cd js
npm install
npm run build
```

Load in browser: localhost:5000
