const LIVE_URL=process.env.NODE_ENV==="development"?
    "http://localhost:5000"
:
"https://foodie231.herokuapp.com"

export {LIVE_URL}