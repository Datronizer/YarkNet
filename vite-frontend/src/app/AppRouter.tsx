import { Route, Routes } from "react-router-dom"
import Home from "@/app/HomePage"
import AsteroidDetail from "@/asteroid/AsteroidDetail"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/asteroid/:spkid" element={<AsteroidDetail />} />
        </Routes>
    )
}

export default AppRouter