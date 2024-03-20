import { useState, useEffect } from "react"

export default function useViewport() {
    const [width, setWidth] = useState(() => {
        if(typeof window !== 'undefined') {
            window.innerHeight
        }
    })

    useEffect(() => {
        if(typeof window !== 'undefined') {
            window.addEventListener('resize', () => {
                setWidth(window.innerWidth)
            })
            return () => {
                window.removeEventListener('resize', () => {
                    setWidth(window.innerWidth)
                })
            }
        }
    }, [])

    return({width})
}