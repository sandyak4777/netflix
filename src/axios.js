import axios from "axios"

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

//instance.get("fool-bar")//=https://api.themoviedb.org/3/fool-bar
export default instance